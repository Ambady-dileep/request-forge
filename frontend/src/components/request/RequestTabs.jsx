const TABS = [
  { id: "params", label: "Params" },
  { id: "auth", label: "Authorization" },
  { id: "headers", label: "Headers" },
  { id: "body", label: "Body" },
];

export default function RequestTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex items-center gap-6 border-b border-slate-800 px-4">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative py-3 text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? "text-slate-100"
              : "text-slate-500 hover:text-slate-300"
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-blue-500" />
          )}
        </button>
      ))}
    </div>
  );
}