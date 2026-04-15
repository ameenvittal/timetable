import type { PersonSchedule } from "../types";
import {
  getNextPeriod,
  getTodayName,
  getStatusForPeriod,
  PERIOD_TIMES,
} from "../utils/scheduleHelpers";

interface Props {
  persons: PersonSchedule[];
}

export default function NextPeriod({ persons }: Props) {
  const period = getNextPeriod();
  const today = getTodayName();

  if (!period) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
          Next Period
        </h2>
        <p className="text-gray-400 text-sm">No more periods today.</p>
      </div>
    );
  }

  const statuses = getStatusForPeriod(persons, today, period);
  const free = statuses.filter((s) => s.isFree);
  const busy = statuses.filter((s) => !s.isFree);
  const times = PERIOD_TIMES[period];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Next Period
        </h2>
        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
          P{period} · {times.start}–{times.end}
        </span>
      </div>

      <div className="space-y-2">
        {free.length > 0 && (
          <div>
            <p className="text-xs text-gray-400 font-semibold mb-1">🟢 Free</p>
            <div className="flex flex-wrap gap-2">
              {free.map((s) => (
                <span
                  key={s.personName}
                  className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {s.personName}
                </span>
              ))}
            </div>
          </div>
        )}
        {busy.length > 0 && (
          <div>
            <p className="text-xs text-gray-400 font-semibold mb-1">
              🔴 In Class
            </p>
            <div className="flex flex-wrap gap-2">
              {busy.map((s) => (
                <span
                  key={s.personName}
                  className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-sm"
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
