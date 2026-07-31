import { useState } from "react";
import {
  Download,
  Maximize2,
  Minimize2,
  Clock,
  HardDrive,
  Loader2,
  XCircle,
  PlayCircle,
} from "lucide-react";
import ResponseTabs from "./ResponseTabs";
import ResponseHeaders from "./ResponseHeaders";

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function highlightJson(value) {
  const json = escapeHtml(JSON.stringify(value, null, 2));
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false)\b|\bnull\b|-?\d+(\.\d+)?([eE][+-]?\d+)?)/g,
    (match) => {
      let cls = "text-sky-300"; // number
      if (/^"/.test(match)) {
        cls = /:$/.test(match) ? "text-ui-accent" : "text-ui-emerald"; // key vs string value
      } else if (/^(true|false)$/.test(match)) {
        cls = "text-ui-violet";
      } else if (match === "null") {
        cls = "text-ui-muted";
      }
      return `<span class="${cls}">${match}</span>`;
    }
  );
}

function formatSize(bytes) {
  if (bytes == null) return "0 B";
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function statusLabel(status) {
  const labels = {
    200: "OK",
    201: "Created",
    204: "No Content",
  };
  return labels[status] ?? "";
}

function errorMeta(status) {
  const map = {
    400: { label: "Bad Request", heading: "Invalid request" },
    401: { label: "Unauthorized", heading: "Authentication required" },
    403: { label: "Forbidden", heading: "Access denied" },
    404: { label: "Not Found", heading: "Resource not found" },
    500: { label: "Server Error", heading: "Something went wrong" },
  };
  return map[status] ?? { label: "Error", heading: "Request failed" };
}

export default function ResponsePanel({
  response,
  responseHeaders,
  error,
  isLoading,
  status,
  responseTime,
  responseSize,
}) {
  const [activeTab, setActiveTab] = useState("response");
  const [expanded, setExpanded] = useState(false);

  const hasResult = response !== null && !error && !isLoading;

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(response, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "response.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  // ── Loading state ──────────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="mt-4 rounded-xl border border-ui-border bg-ui-panel">
        <div className="border-b border-ui-border px-4 py-3">
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ui-muted">
            <Loader2 size={13} className="animate-spin" />
            Loading...
          </span>
        </div>
        <div className="animate-pulse space-y-3 px-4 py-5">
          <div className="h-3 w-4/5 rounded bg-ui-border" />
          <div className="h-3 w-3/5 rounded bg-ui-border" />
          <div className="h-3 w-2/3 rounded bg-ui-border" />
          <div className="h-3 w-1/2 rounded bg-ui-border" />
        </div>
      </div>
    );
  }

  // ── Error state ─────────────────────────────────────────────────
  if (error) {
    const meta = errorMeta(status);
    return (
      <div className="mt-4 rounded-xl border border-ui-border bg-ui-panel">
        <div className="flex justify-end px-4 pt-3">
          <span className="flex items-center gap-1.5 rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-semibold text-red-400">
            {status ?? "Error"} {meta.label}
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 px-6 py-10 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
            <XCircle size={22} className="text-red-400" />
          </div>
          <h3 className="text-base font-semibold text-ui-heading">{meta.heading}</h3>
          <p className="max-w-sm text-sm text-ui-text">{error}</p>
        </div>
      </div>
    );
  }

  // ── Empty state ─────────────────────────────────────────────────
  if (!hasResult) {
    return (
      <div className="mt-4 rounded-xl border border-ui-border bg-ui-panel">
        <div className="flex flex-col items-center gap-3 px-6 py-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ui-accent/15">
            <PlayCircle size={22} className="text-ui-accent" />
          </div>
          <h3 className="text-base font-semibold text-ui-heading">Ready for Request</h3>
          <p className="max-w-sm text-sm text-ui-text">
            Configure your headers and parameters above, then click{" "}
            <span className="font-semibold text-ui-accent">Send</span> to see the API
            response in this panel.
          </p>
          <div className="mt-2 flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <button className="rounded-md border border-ui-border px-4 py-2 text-sm font-medium text-ui-text transition-colors hover:border-ui-accent/50 hover:text-ui-heading">
              Browse Documentation
            </button>
            <button className="rounded-md bg-ui-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90">
              Generate Example
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Success state ───────────────────────────────────────────────
  const lineCount = JSON.stringify(response, null, 2).split("\n").length;
  const lines = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <div className="mt-4 rounded-xl border border-ui-border bg-ui-panel">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ui-border px-4 py-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-ui-emerald">
            <span className="h-1.5 w-1.5 rounded-full bg-ui-emerald" />
            {status} {statusLabel(status)}
          </span>
          <span className="flex items-center gap-1 text-xs text-ui-muted">
            <Clock size={12} />
            {responseTime}ms
          </span>
          <span className="flex items-center gap-1 text-xs text-ui-muted">
            <HardDrive size={12} />
            {formatSize(responseSize)}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 text-xs font-medium text-ui-text transition-colors hover:text-ui-heading"
          >
            <Download size={13} />
            <span className="hidden sm:inline">Download</span>
          </button>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1.5 text-xs font-medium text-ui-text transition-colors hover:text-ui-heading"
          >
            {expanded ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            <span className="hidden sm:inline">{expanded ? "Collapse" : "Expand"}</span>
          </button>
        </div>
      </div>

      <ResponseTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "response" && (
        <div
            className={`flex overflow-auto font-mono text-[13px] leading-6 ${
            expanded ? "max-h-[80vh]" : "max-h-[60vh] md:max-h-[65vh]"
            }`}
        >
            <div
            className="select-none px-3 py-3 text-right text-ui-muted"
            style={{ minWidth: "2.75rem" }}
            >
            {lines.map((n) => (
                <div key={n}>{n}</div>
            ))}
            </div>
            <pre
            className="flex-1 whitespace-pre-wrap px-3 py-3 text-ui-text"
            dangerouslySetInnerHTML={{ __html: highlightJson(response) }}
            />
        </div>
        )}

      {activeTab === "headers" && <ResponseHeaders responseHeaders={responseHeaders} />}

      {activeTab === "cookies" && (
        <p className="px-4 py-10 text-center text-sm text-ui-muted">
          No cookies in this response.
        </p>
      )}
    </div>
  );
}