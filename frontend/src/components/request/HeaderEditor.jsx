import { Plus, X } from "lucide-react";

export default function HeaderEditor({ headers, setHeaders }) {
  const updateHeader = (index, field, value) => {
    const updatedHeaders = [...headers];
    updatedHeaders[index][field] = value;
    setHeaders(updatedHeaders);
  };

  const removeHeader = (index) => {
    setHeaders(headers.filter((_, i) => i !== index));
  };

  const addHeader = () => {
    setHeaders([...headers, { key: "", value: "" }]);
  };

  return (
    <div className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          Headers
        </span>
        <button
          onClick={addHeader}
          className="flex items-center gap-1 text-xs font-medium text-blue-400 transition-colors hover:text-blue-300"
        >
          <Plus size={13} />
          Add Header
        </button>
      </div>

      <div className="space-y-2">
        {headers.map((header, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              placeholder="Header key"
              value={header.key}
              onChange={(e) => updateHeader(index, "key", e.target.value)}
              className="min-w-0 flex-1 rounded-md border border-slate-700/80 bg-[#141a29] px-3 py-2
                text-sm text-slate-200 placeholder:text-slate-500 outline-none transition-colors
                hover:border-slate-600 focus:border-blue-500"
            />
            <input
              placeholder="Header value"
              value={header.value}
              onChange={(e) => updateHeader(index, "value", e.target.value)}
              className="min-w-0 flex-1 rounded-md border border-slate-700/80 bg-[#141a29] px-3 py-2
                text-sm text-slate-200 placeholder:text-slate-500 outline-none transition-colors
                hover:border-slate-600 focus:border-blue-500"
            />
            <button
              onClick={() => removeHeader(index)}
              className="shrink-0 rounded-md p-2 text-slate-500 transition-colors hover:bg-slate-800 hover:text-red-400"
              aria-label="Remove header"
            >
              <X size={14} />
            </button>
          </div>
        ))}

        {headers.length === 0 && (
          <p className="py-2 text-sm text-slate-600">No headers added yet.</p>
        )}
      </div>
    </div>
  );
}