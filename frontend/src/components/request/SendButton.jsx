import { Play, Loader2 } from "lucide-react";

export default function SendButton({ onClick, isLoading }) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="flex shrink-0 items-center gap-1.5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm
        font-semibold text-white transition-colors hover:bg-blue-500
        disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isLoading ? (
        <>
          <Loader2 size={14} className="animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send
          <Play size={12} fill="currentColor" />
        </>
      )}
    </button>
  );
}