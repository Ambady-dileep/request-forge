import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

const METHODS = [
  {
    value: "GET",
    color: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/20",
    activeBg: "hover:bg-sky-500/15",
  },
  {
    value: "POST",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
    activeBg: "hover:bg-amber-500/15",
  },
  {
    value: "PUT",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
    activeBg: "hover:bg-violet-500/15",
  },
  {
    value: "PATCH",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    activeBg: "hover:bg-emerald-500/15",
  },
];

export default function MethodSelect({ value = "GET", onChange }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentMethod =
    METHODS.find((m) => m.value === value) ?? METHODS[0];

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelect = (methodValue) => {
    onChange(methodValue);
    setOpen(false);
  };

  return (
    <div className="relative shrink-0" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`group flex min-w-[4.25rem] items-center justify-between gap-1 rounded-xl border px-2 py-1.5 sm:min-w-[4.75rem] sm:px-2.5 sm:py-2 text-xs sm:text-sm font-bold shadow-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${currentMethod.bg} ${currentMethod.color}`}
      >
        <span className="tracking-wide">{currentMethod.value}</span>
        <ChevronDown
          size={13}
          className={`shrink-0 transition-transform duration-200 opacity-70 group-hover:opacity-100 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Reduced Width Dropdown Menu */}
    {open && (
    <div className="absolute left-0 top-full z-50 mt-1.5 w-20 overflow-hidden rounded-xl border border-slate-800 bg-[#121723]/95 p-1 shadow-2xl backdrop-blur-md animate-in fade-in-0 zoom-in-95 duration-100 sm:w-24">
        <div className="flex flex-col gap-0.5">
        {METHODS.map((method) => {
            const isSelected = method.value === value;
            return (
            <button
                key={method.value}
                type="button"
                onClick={() => handleSelect(method.value)}
                className={`flex w-full items-center justify-between rounded-lg px-1.5 py-1 text-xs font-semibold transition-colors sm:px-2 sm:py-1.5 sm:text-sm ${method.activeBg} ${method.color} ${
                isSelected ? "bg-slate-800/60" : ""
                }`}
            >
                <span className="tracking-wide">{method.value}</span>
                {isSelected && <Check size={11} className="opacity-80 shrink-0" />}
            </button>
            );
        })}
        </div>
    </div>
    )}
    </div>
  );
}