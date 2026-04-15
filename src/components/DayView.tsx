import type { PersonSchedule } from "../types";
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
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">{label}</h2>
        <p className="text-xs text-gray-400">{day}</p>
      </div>

      <div className="divide-y divide-gray-50">
        {Array.from({ length: TOTAL_PERIODS }, (_, i) => i + 1).map(
          (period) => {
            const times = PERIOD_TIMES[period];
            const statuses = getStatusForPeriod(persons, day, period);
            const free = statuses.filter((s) => s.isFree);
            const busy = statuses.filter((s) => !s.isFree);

            return (
              <div key={period} className="px-4 py-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-gray-400 w-6">
                    P{period}
                  </span>
                  <span className="text-xs text-gray-400">
                    {times.start}–{times.end}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {free.map((s) => (
                    <span
                      key={s.personName}
                      className="bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full text-xs font-medium"
                    >
                      {s.personName}
                    </span>
                  ))}
                  {busy.map((s) => (
                    <span
                      key={s.personName}
                      className="bg-rose-50 text-rose-600 px-2.5 py-0.5 rounded-full text-xs"
                      title={s.period?.subject || ""}
                    >
                      {s.personName}
                    </span>
                  ))}
                </div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}
