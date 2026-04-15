import type { PersonSchedule } from "../types";
import { BookOpen, CircleCheckBig, CircleX, MapPin } from "lucide-react";
import {
  getStatusForPeriod,
  PERIOD_TIMES,
  TOTAL_PERIODS,
} from "../utils/scheduleHelpers";

interface Props {
  persons: PersonSchedule[];
  day: string;
  label: string;
}

export default function DayView({ persons, day, label }: Props) {
  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md">
      <div className="border-b border-white/10 bg-white/5 px-5 py-4">
        <h2 className="text-lg font-semibold tracking-tight text-white">
          {label}
        </h2>
        <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-400">
          {day}
        </p>
      </div>

      <div className="divide-y divide-white/10">
        {Array.from({ length: TOTAL_PERIODS }, (_, i) => i + 1).map(
          (period) => {
            const times = PERIOD_TIMES[period];
            const statuses = getStatusForPeriod(persons, day, period);
            const free = statuses.filter((s) => s.isFree);
            const busy = statuses.filter((s) => !s.isFree);

            return (
              <div key={period} className="px-5 py-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-200">
                    P{period}
                  </span>
                  <span className="rounded-full bg-white/10 border border-white/10 px-2.5 py-1 text-xs font-semibold text-gray-300">
                    {times.start}-{times.end}
                  </span>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3">
                    <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-400">
                      <CircleCheckBig className="h-3.5 w-3.5" />
                      Free ({free.length})
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {free.length ? (
                        free.map((s) => (
                          <span
                            key={s.personName}
                            className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-300"
                          >
                            {s.personName}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-emerald-400/75">
                          None
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-3">
                    <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-rose-400">
                      <CircleX className="h-3.5 w-3.5" />
                      In Class ({busy.length})
                    </div>

                    <div className="space-y-2">
                      {busy.length ? (
                        busy.map((s) => (
                          <div
                            key={s.personName}
                            className="rounded-xl border border-white/10 bg-white/5 p-2"
                          >
                            <p className="text-xs font-semibold text-gray-200">
                              {s.personName}
                            </p>
                            <p className="mt-1 flex items-center gap-1 text-[11px] text-gray-400">
                              <BookOpen className="h-3 w-3" />
                              {s.period?.subject || "Class"}
                            </p>
                            <p className="mt-1 flex items-center gap-1 text-[11px] text-gray-500">
                              <MapPin className="h-3 w-3" />
                              LT/Room: {s.period?.room || "N/A"}
                            </p>
                          </div>
                        ))
                      ) : (
                        <span className="text-xs text-rose-400/75">None</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}
