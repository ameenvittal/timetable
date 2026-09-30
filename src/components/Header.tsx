import { getTodayName } from "../utils/scheduleHelpers";
import { Clock3, CalendarDays, CheckSquare, Layers } from "lucide-react";

export type AppMode = "select" | "timetable" | "tasks";

interface HeaderProps {
  currentMode: AppMode;
  onSelectMode: (mode: AppMode) => void;
}

export default function Header({ currentMode, onSelectMode }: HeaderProps) {
  const today = getTodayName();
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl text-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:py-4">
        {/* App Title */}
        <div
          onClick={() => onSelectMode("select")}
          className="cursor-pointer group flex items-center gap-3"
          title="Click to return to mode selection"
        >
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:scale-105 transition-transform">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Sibaq Team
            </h1>
            <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.16em] text-cyan-400/80">
              {today} • Timetable & Tasks
            </p>
          </div>
        </div>

        {/* Center / Navigation Switcher Toggle */}
        {currentMode !== "select" && (
          <div className="flex items-center rounded-2xl bg-white/5 border border-white/10 p-1 backdrop-blur-md">
            <button
              onClick={() => onSelectMode("timetable")}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all duration-300 cursor-pointer ${
                currentMode === "timetable"
                  ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <CalendarDays className="h-3.5 w-3.5" />
              <span>Timetable</span>
            </button>

            <button
              onClick={() => onSelectMode("tasks")}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all duration-300 cursor-pointer ${
                currentMode === "tasks"
                  ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <CheckSquare className="h-3.5 w-3.5" />
              <span>Tasks</span>
            </button>
          </div>
        )}

        {/* Right Info: Live Time */}
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_10px_rgba(255,255,255,0.05)]">
          <Clock3 className="h-3.5 w-3.5 text-cyan-400" />
          <span>{timeStr}</span>
        </div>
      </div>
    </header>
  );
}
