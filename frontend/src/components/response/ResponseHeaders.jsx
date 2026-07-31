export default function ResponseHeaders({ responseHeaders }) {
  const entries = Object.entries(responseHeaders ?? {});

  if (entries.length === 0) {
    return (
      <p className="px-4 py-10 text-center text-sm text-ui-muted">
        No headers returned for this response.
      </p>
    );
  }

  return (
    <div className="px-4 py-4">
      <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-ui-muted">
        Response Headers
      </h3>
      <div className="divide-y divide-ui-border overflow-hidden rounded-lg border border-ui-border">
        {entries.map(([key, value]) => (
          <div
            key={key}
            className="flex flex-col gap-0.5 px-3 py-2 font-mono text-xs sm:flex-row sm:items-center sm:gap-3"
          >
            <span className="shrink-0 text-ui-accent sm:w-48">{key}</span>
            <span className="break-all text-ui-text">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}