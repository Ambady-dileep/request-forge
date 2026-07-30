import React, { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative flex h-16 items-center justify-between border-b border-ui-border bg-ui-panel pl-8 pr-6">
      {/* Left: Logo + Desktop Links */}
      <div className="flex items-center gap-35">
        {/* Logo text moved slightly further right via outer pl-8 and gap-10 */}
        <span className="text-lg font-semibold tracking-tight text-ui-heading">
          Requeset Forge
        </span>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="rounded-md px-3 py-1.5 text-sm font-medium text-ui-text transition-colors hover:text-ui-heading"
          >
            Workspaces
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-1.5 text-sm font-medium text-ui-text transition-colors hover:text-ui-heading"
          >
            Environments
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-1.5 text-sm font-medium text-ui-heading hover:bg-ui-border/30"
          >
            Collections
          </a>
        </nav>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-5">
        {/* Desktop Buttons */}
        <button className="hidden rounded-md border border-ui-accent px-4 py-1.5 text-sm font-medium text-ui-accent hover:bg-ui-accent/10 sm:block">
          Upgrade
        </button>

        <div className="flex items-center gap-3">
          <button
            aria-label="Notifications"
            className="p-1 text-ui-text transition-colors hover:text-ui-heading"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </button>

          <button
            aria-label="Settings"
            className="p-1 text-ui-text transition-colors hover:text-ui-heading"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>

          <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-ui-border bg-ui-violet/30">
            <img
              src="https://i.pravatar.cc/64"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          className="p-1 text-ui-text hover:text-ui-heading md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 z-50 w-full border-b border-ui-border bg-ui-panel p-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-3">
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-ui-text hover:bg-ui-border/30 hover:text-ui-heading"
            >
              Workspaces
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-ui-text hover:bg-ui-border/30 hover:text-ui-heading"
            >
              Environments
            </a>
            <a
              href="#"
              className="rounded-md bg-ui-border/40 px-3 py-2 text-sm font-medium text-ui-heading"
            >
              Collections
            </a>
            <button className="mt-2 w-full rounded-md border border-ui-accent py-2 text-sm font-medium text-ui-accent hover:bg-ui-accent/10 sm:hidden">
              Upgrade
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}