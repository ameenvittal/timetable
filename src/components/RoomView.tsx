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
    <div className="rounded-3xl shadow-2xl border border-white/10 bg-[#0B1121]/80 backdrop-blur-md p-4">
      <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3">
        📍 Room Locations (Now)
      </h2>

      {!period ? (
        <p className="text-gray-500 text-sm">No active period.</p>
      ) : (
        <div className="space-y-2">
          {entries.map((e) => (
            <div
              key={e.name}
              className="flex items-center justify-between border border-white/5 bg-white/5 rounded-xl px-3 py-2"
            >
              <span className="font-medium text-gray-200 text-sm">{e.name}</span>
              {e.room ? (
                <span className="text-[10px] uppercase tracking-wide bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-full font-semibold">
                  {e.room}
                </span>
              ) : (
                <span className="text-xs text-gray-600">Free / No class</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}