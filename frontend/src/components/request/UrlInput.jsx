export default function UrlInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="https://api.example.com/v1/resource"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      spellCheck={false}
      className="min-w-0 flex-1 rounded-lg border border-slate-700/80 bg-[#141a29] px-4 py-2.5
        text-sm text-slate-200 placeholder:text-slate-500 outline-none transition-colors
        hover:border-slate-600 focus:border-blue-500"
    />
  );
}