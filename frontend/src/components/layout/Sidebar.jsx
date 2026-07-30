import React from "react";

export default function Sidebar() {
  return (
    <aside className="flex h-[calc(100vh-4rem)] w-64 shrink-0 flex-col justify-between border-r border-ui-border bg-ui-panel p-4 text-ui-text select-none">
      <div className="space-y-6">
        {/* Workspace Info Header */}
        <div className="flex items-center gap-3 px-2 py-1">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-ui-accent text-sm font-semibold text-white">
            TW
          </div>
          <div className="overflow-hidden">
            <h2 className="truncate text-sm font-semibold leading-tight text-ui-heading">
              Team Workspace
            </h2>
            <p className="text-xs text-ui-text/70">6 Members</p>
          </div>
        </div>

        {/* Action Button */}
        <button className="flex w-full items-center justify-center gap-2 rounded-md bg-ui-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          <span>New Request</span>
        </button>

        {/* Main Navigation */}
        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-ui-text hover:bg-ui-border/40 hover:text-ui-heading transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M12 7v5l4 2" />
            </svg>
            <span>History</span>
          </a>

          {/* Active Item Example */}
          <a
            href="#"
            className="flex items-center gap-3 rounded-md bg-ui-border/60 px-3 py-2 text-sm font-medium text-ui-heading transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L8.6 3.3A2 2 0 0 0 6.9 2.5H4a2 2 0 0 0-2 2v13.5a2 2 0 0 0 2 2z" />
            </svg>
            <span>Collections</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-ui-text hover:bg-ui-border/40 hover:text-ui-heading transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            <span>APIs</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-ui-text hover:bg-ui-border/40 hover:text-ui-heading transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="21" y2="21" />
              <line x1="4" x2="20" y1="14" y2="14" />
              <line x1="4" x2="20" y1="7" y2="7" />
              <circle cx="8" cy="21" r="2" />
              <circle cx="16" cy="14" r="2" />
              <circle cx="12" cy="7" r="2" />
            </svg>
            <span>Environments</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-ui-text hover:bg-ui-border/40 hover:text-ui-heading transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
              <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
              <line x1="6" x2="6.01" y1="6" y2="6" />
              <line x1="6" x2="6.01" y1="18" y2="18" />
            </svg>
            <span>Mock Servers</span>
          </a>
        </nav>
      </div>

      {/* Footer Navigation */}
      <div className="space-y-1 border-t border-ui-border/60 pt-4">
        <a
          href="#"
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-ui-text hover:bg-ui-border/40 hover:text-ui-heading transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a1 1 0 0 0 1 1h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
          </svg>
          <span>Docs</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-ui-text hover:bg-ui-border/40 hover:text-ui-heading transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
          <span>Help</span>
        </a>
      </div>
    </aside>
  );
}