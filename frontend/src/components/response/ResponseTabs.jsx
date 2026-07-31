const TABS = [
  { id: "response", label: "Response" },
  { id: "headers", label: "Headers" },
  { id: "cookies", label: "Cookies" },
];

export default function ResponseTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex items-center gap-6 overflow-x-auto border-b border-ui-border px-4">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative shrink-0 whitespace-nowrap py-3 text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? "text-ui-heading"
              : "text-ui-text hover:text-ui-heading"
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-ui-accent" />
          )}
        </button>
      ))}
    </div>
  );
}