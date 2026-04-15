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
    <header className="sticky top-0 z-30 border-b border-slate-300/70 bg-linear-to-r from-slate-900 via-slate-800 to-indigo-900 text-white shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Faculty Timetable</h1>
          <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.16em] text-slate-200">
            {today}
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-semibold text-white">
          <Clock3 className="h-4 w-4" />
          <span>{timeStr}</span>
        </div>
      </div>
    </header>
  );
}
