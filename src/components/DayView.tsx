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
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-slate-50/70 px-5 py-4">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          {label}
        </h2>
        <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
          {day}
        </p>
      </div>

      <div className="divide-y divide-slate-100">
        {Array.from({ length: TOTAL_PERIODS }, (_, i) => i + 1).map(
          (period) => {
            const times = PERIOD_TIMES[period];
            const statuses = getStatusForPeriod(persons, day, period);
            const free = statuses.filter((s) => s.isFree);
            const busy = statuses.filter((s) => !s.isFree);

            return (
              <div key={period} className="px-5 py-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-800">
                    P{period}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                    {times.start}-{times.end}
                  </span>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-3">
                    <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                      <CircleCheckBig className="h-3.5 w-3.5" />
                      Free ({free.length})
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {free.length ? (
                        free.map((s) => (
                          <span
                            key={s.personName}
                            className="rounded-full border border-emerald-200 bg-white px-2.5 py-0.5 text-xs font-semibold text-emerald-700"
                          >
                            {s.personName}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-emerald-700/75">
                          None
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-3">
                    <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-rose-700">
                      <CircleX className="h-3.5 w-3.5" />
                      In Class ({busy.length})
                    </div>

                    <div className="space-y-2">
                      {busy.length ? (
                        busy.map((s) => (
                          <div
                            key={s.personName}
                            className="rounded-xl border border-rose-100 bg-white p-2"
                          >
                            <p className="text-xs font-semibold text-slate-800">
                              {s.personName}
                            </p>
                            <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-600">
                              <BookOpen className="h-3 w-3" />
                              {s.period?.subject || "Class"}
                            </p>
                            <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-500">
                              <MapPin className="h-3 w-3" />
                              LT/Room: {s.period?.room || "N/A"}
                            </p>
                          </div>
                        ))
                      ) : (
                        <span className="text-xs text-rose-700/75">None</span>
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
