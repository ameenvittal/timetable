import { CalendarDays, CheckSquare, Sparkles, Clock, ArrowRight, Users } from "lucide-react";

interface ModeSelectScreenProps {
  onSelectMode: (mode: "tasks" | "timetable") => void;
}

export default function ModeSelectScreen({ onSelectMode }: ModeSelectScreenProps) {
  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-8">
      {/* Background glow accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-indigo-500/15 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-cyan-300 uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Sibaq Team Workspace</span>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            What would you like to view?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Select a mode to proceed. You can switch between your personal class schedule and team sprint tasks anytime from the top bar.
          </p>
        </div>

        {/* 2 Main Mode Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 text-left">
          {/* Tasks & Milestones Card */}
          <button
            onClick={() => onSelectMode("tasks")}
            className="group relative flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 text-left overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300 text-cyan-400">
              <CheckSquare className="h-28 w-28" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:scale-110 transition-transform">
                <CheckSquare className="h-6 w-6" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Tasks & Milestones
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full px-2 py-0.5">
                    Sprint Active
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Explore prioritized tasks for Salim, Salman, Nabhan, Hashir, Munavar, Hisham, and Majid. Includes free-slot timeline, 5m buffers, Kanban board, and batch deadlines.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-gray-300">
                <span className="inline-flex items-center gap-1 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1">
                  <Clock className="h-3 w-3 text-cyan-400" />
                  Free-slot Scheduling
                </span>
                <span className="inline-flex items-center gap-1 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1">
                  <Users className="h-3 w-3 text-indigo-400" />
                  7 Members
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
              <span>Open Tasks Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </button>

          {/* Timetable Card */}
          <button
            onClick={() => onSelectMode("timetable")}
            className="group relative flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-300 text-left overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300 text-indigo-400">
              <CalendarDays className="h-28 w-28" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:scale-110 transition-transform">
                <CalendarDays className="h-6 w-6" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    Timetable
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full px-2 py-0.5">
                    Class Schedule
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Real-time period tracker, daily class schedules, teacher locations, and free period status across all members.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-gray-300">
                <span className="inline-flex items-center gap-1 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1">
                  <Clock className="h-3 w-3 text-indigo-400" />
                  Live Periods (1–8)
                </span>
                <span className="inline-flex items-center gap-1 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1">
                  <CalendarDays className="h-3 w-3 text-cyan-400" />
                  Day & Person Views
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform">
              <span>View Timetable</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
