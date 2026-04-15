import type { PersonSchedule } from "../types";
import {
  getCurrentPeriod,
  getTodayName,
} from "../utils/scheduleHelpers";

interface Props {
  persons: PersonSchedule[];
}

export default function RoomView({ persons }: Props) {
  const period = getCurrentPeriod();
  const today = getTodayName();

  const entries = persons.map((person) => {
    const p = period ? person.schedule[today]?.[period] : null;
    return {
      name: person.name,
      room: p?.room || null,
      subject: p?.subject || null,
    };
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
        📍 Room Locations (Now)
      </h2>

      {!period ? (
        <p className="text-gray-400 text-sm">No active period.</p>
      ) : (
        <div className="space-y-2">
          {entries.map((e) => (
            <div
              key={e.name}
              className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2"
            >
              <span className="font-medium text-gray-800 text-sm">{e.name}</span>
              {e.room ? (
                <span className="text-xs bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full font-semibold">
                  {e.room}
                </span>
              ) : (
                <span className="text-xs text-gray-400">Free / No class</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}