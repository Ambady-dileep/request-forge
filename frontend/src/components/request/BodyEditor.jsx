import { useRef } from "react";
import { Wand2 } from "lucide-react";

export default function BodyEditor({ value, onChange }) {
  const textareaRef = useRef(null);
  const gutterRef = useRef(null);

  const lineCount = Math.max(value.split("\n").length, 1);
  const lines = Array.from({ length: lineCount }, (_, i) => i + 1);

  const syncScroll = () => {
    if (gutterRef.current && textareaRef.current) {
      gutterRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  const handleBeautify = () => {
    try {
      const parsed = JSON.parse(value);
      onChange(JSON.stringify(parsed, null, 2));
    } catch {
      // Invalid JSON — leave the content untouched.
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-4 pb-2 pt-4">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          JSON Content
        </span>
        <button
          onClick={handleBeautify}
          className="flex items-center gap-1.5 text-xs font-medium text-blue-400 transition-colors hover:text-blue-300"
        >
          <Wand2 size={13} />
          Beautify
        </button>
      </div>

      <div className="mx-4 mb-4 flex h-64 overflow-hidden rounded-lg border border-slate-800 bg-[#0d1220] font-mono text-[13px] leading-6">
        <div
          ref={gutterRef}
          className="select-none overflow-hidden bg-[#0b0f1a] px-3 py-3 text-right text-slate-600"
          style={{ minWidth: "2.75rem" }}
        >
          {lines.map((n) => (
            <div key={n}>{n}</div>
          ))}
        </div>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onScroll={syncScroll}
          spellCheck={false}
          placeholder="Enter JSON body"
          className="flex-1 resize-none bg-transparent px-3 py-3 text-slate-200 outline-none placeholder:text-slate-600"
        />
      </div>
    </div>
  );
}