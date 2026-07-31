import { useEffect, useState } from "react";
import {
  Plus,
  History,
  Folder,
  Layers,
  Sliders,
  Server,
  FileText,
  HelpCircle,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "History", icon: History },
  { label: "Collections", icon: Folder, active: true },
  { label: "APIs", icon: Layers },
  { label: "Environments", icon: Sliders },
  { label: "Mock Servers", icon: Server },
];

const FOOTER_ITEMS = [
  { label: "Docs", icon: FileText },
  { label: "Help", icon: HelpCircle },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleToggle = () => setMobileOpen((v) => !v);
    const handleKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("toggle-sidebar", handleToggle);
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("toggle-sidebar", handleToggle);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  const SidebarContent = (
    <div className="flex h-full w-64 flex-col bg-ui-panel">
      {/* Workspace card */}
      <div className="flex items-center gap-3 border-b border-ui-border px-4 py-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ui-accent text-sm font-bold text-white">
          TW
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ui-heading">
            Team Workspace
          </p>
          <p className="text-xs text-ui-muted">6 Members</p>
        </div>
      </div>

      {/* New request */}
      <div className="px-4 py-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-md bg-ui-accent px-3 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90">
          <Plus size={16} />
          New Request
        </button>
      </div>

      {/* Main nav */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3">
        {NAV_ITEMS.map(({ label, icon: Icon, active }) => (
          <a
            key={label}
            href="#"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              active
                ? "bg-ui-surface text-ui-heading"
                : "text-ui-text hover:bg-ui-surface hover:text-ui-heading"
            }`}
          >
            <Icon size={16} />
            {label}
          </a>
        ))}
      </nav>

      {/* Footer nav */}
      <div className="space-y-1 border-t border-ui-border px-3 py-4">
        {FOOTER_ITEMS.map(({ label, icon: Icon }) => (
          <a
            key={label}
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-ui-text transition-colors hover:bg-ui-surface hover:text-ui-heading"
          >
            <Icon size={16} />
            {label}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar - always visible, part of layout flow */}
      <aside className="hidden shrink-0 border-r border-ui-border md:block">
        {SidebarContent}
      </aside>

      {/* Mobile sidebar - off-canvas drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          className={`absolute left-0 top-0 h-full border-r border-ui-border shadow-xl transition-transform duration-200 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {SidebarContent}
        </div>
      </div>
    </>
  );
}