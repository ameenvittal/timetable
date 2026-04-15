import type { PersonSchedule, PeriodStatus } from "../types";
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
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
          Current Period
        </h2>
        <p className="text-gray-400 text-sm">No active period right now.</p>
      </div>
    );
  }

  const statuses: PeriodStatus[] = getStatusForPeriod(persons, today, period);
  const free = statuses.filter((s) => s.isFree);
  const busy = statuses.filter((s) => !s.isFree);
  const times = PERIOD_TIMES[period];

  return (
    <div className="bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl p-4 text-white shadow-md">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide opacity-80">
          Current Period
        </h2>
        <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full font-medium">
          P{period} · {times.start}–{times.end}
        </span>
      </div>

      <div className="space-y-3">
        {free.length > 0 && (
          <div>
            <p className="text-xs font-semibold opacity-70 mb-1">🟢 Free</p>
            <div className="flex flex-wrap gap-2">
              {free.map((s) => (
                <span
                  key={s.personName}
                  className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {s.personName}
                </span>
              ))}
            </div>
          </div>
        )}
        {busy.length > 0 && (
          <div>
            <p className="text-xs font-semibold opacity-70 mb-1">🔴 In Class</p>
            <div className="flex flex-wrap gap-2">
              {busy.map((s) => (
                <span
                  key={s.personName}
                  className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-sm"
                >
                  {s.personName}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
