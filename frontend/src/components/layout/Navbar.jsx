import { useState } from "react";
import { Bell, Settings, Menu, X } from "lucide-react";

const NAV_LINKS = ["Workspaces", "Environments", "Collections"];

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleSidebar = () => {
    window.dispatchEvent(new CustomEvent("toggle-sidebar"));
  };

  return (
    <header className="relative z-30 flex h-16 shrink-0 items-center justify-between border-b border-ui-border bg-ui-panel px-4 md:px-6">
      <div className="flex items-center gap-3">
        {/* Sidebar toggle - mobile only */}
        <button
          onClick={toggleSidebar}
          className="flex h-8 w-8 items-center justify-center rounded-md text-ui-text transition-colors hover:bg-ui-surface hover:text-ui-heading md:hidden"
          aria-label="Toggle sidebar"
        >
          <Menu size={18} />
        </button>

        <span className="text-lg font-bold tracking-tight text-ui-heading">
          Request Forge
        </span>

        {/* Nav links - desktop */}
        <nav className="ml-6 hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-ui-text transition-colors hover:text-ui-heading"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button className="hidden rounded-md border border-ui-accent px-4 py-1.5 text-sm font-semibold text-ui-accent transition-colors hover:bg-ui-accent/10 sm:block">
          Upgrade
        </button>

        <button
          className="flex h-8 w-8 items-center justify-center rounded-md text-ui-text transition-colors hover:bg-ui-surface hover:text-ui-heading"
          aria-label="Notifications"
        >
          <Bell size={17} />
        </button>

        <button
          className="hidden h-8 w-8 items-center justify-center rounded-md text-ui-text transition-colors hover:bg-ui-surface hover:text-ui-heading sm:flex"
          aria-label="Settings"
        >
          <Settings size={17} />
        </button>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ui-accent text-xs font-semibold text-white">
          AD
        </div>

        {/* Nav links - mobile toggle */}
        <button
          onClick={() => setMobileNavOpen((v) => !v)}
          className="flex h-8 w-8 items-center justify-center rounded-md text-ui-text transition-colors hover:bg-ui-surface hover:text-ui-heading md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile nav links dropdown */}
      {mobileNavOpen && (
        <div className="absolute left-0 right-0 top-16 flex flex-col border-b border-ui-border bg-ui-panel px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="rounded-md px-2 py-2 text-sm font-medium text-ui-text transition-colors hover:bg-ui-surface hover:text-ui-heading"
            >
              {link}
            </a>
          ))}
          <button className="mt-2 rounded-md border border-ui-accent px-4 py-2 text-sm font-semibold text-ui-accent transition-colors hover:bg-ui-accent/10">
            Upgrade
          </button>
        </div>
      )}
    </header>
  );
}