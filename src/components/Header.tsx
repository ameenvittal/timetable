import { getTodayName } from "../utils/scheduleHelpers";
import { Clock3 } from "lucide-react";

export default function Header() {
  const today = getTodayName();
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight">
            Festie Team's Timetable
          </h1>
          <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.16em] text-cyan-400/80">
            {today}
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white shadow-[0_0_10px_rgba(255,255,255,0.05)]">
          <Clock3 className="h-4 w-4 text-cyan-400" />
          <span>{timeStr}</span>
        </div>
      </div>
    </header>
  );
}
