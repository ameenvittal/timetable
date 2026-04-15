import type { PersonSchedule, PeriodStatus } from "../types";
import { BookOpen, CircleCheckBig, CircleX, MapPin } from "lucide-react";
import {
  getCurrentPeriod,
  getTodayName,
  getStatusForPeriod,
  PERIOD_TIMES,
} from "../utils/scheduleHelpers";

interface Props {
  persons: PersonSchedule[];
}

export default function CurrentPeriod({ persons }: Props) {
  const period = getCurrentPeriod();
  const today = getTodayName();

  if (!period) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Current Period
        </h2>
        <p className="text-sm text-slate-500">No active period right now.</p>
      </div>
    );
  }

  const statuses: PeriodStatus[] = getStatusForPeriod(persons, today, period);
  const free = statuses.filter((s) => s.isFree);
  const busy = statuses.filter((s) => !s.isFree);
  const times = PERIOD_TIMES[period];

  return (
    <section className="overflow-hidden rounded-3xl border border-indigo-200 bg-white shadow-sm">
      <div className="bg-linear-to-r from-indigo-600 to-cyan-600 px-5 py-4 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em]">
            Current Period
          </h2>
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
            P{period} | {times.start}-{times.end}
          </span>
        </div>
      </div>

      <div className="grid gap-4 p-5 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              <CircleCheckBig className="h-4 w-4" />
              Free Now
            </p>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">
              {free.length}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {free.length ? (
              free.map((s) => (
                <span
                  key={s.personName}
                  className="rounded-full border border-emerald-200 bg-white px-3 py-1 text-sm font-semibold text-emerald-700"
                >
                  {s.personName}
                </span>
              ))
            ) : (
              <p className="text-sm text-emerald-700/80">No one is free.</p>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-rose-700">
              <CircleX className="h-4 w-4" />
              In Class
            </p>
            <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-bold text-rose-700">
              {busy.length}
            </span>
          </div>

          <div className="space-y-2">
            {busy.length ? (
              busy.map((s: PeriodStatus) => (
                <div
                  key={s.personName}
                  className="rounded-xl border border-rose-100 bg-white p-2.5"
                >
                  <p className="text-sm font-semibold text-slate-800">
                    {s.personName}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-600">
                    <BookOpen className="h-3.5 w-3.5" />
                    {s.period?.subject || "Class"}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="h-3.5 w-3.5" />
                    LT/Room: {s.period?.room || "N/A"}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-rose-700/80">No classes right now.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
