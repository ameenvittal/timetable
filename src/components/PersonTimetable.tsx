import { useEffect, useMemo, useState } from "react";
import type { PersonSchedule } from "../types";
import {
  getTodayName,
  getTomorrowName,
  PERIOD_TIMES,
  TOTAL_PERIODS,
} from "../utils/scheduleHelpers";

interface Props {
  persons: PersonSchedule[];
}

type DayMode = "today" | "tomorrow";

const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

type ViewMode = "single-day" | "week";

export default function PersonTimetable({ persons }: Props) {
  const [selectedName, setSelectedName] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dayMode, setDayMode] = useState<DayMode>("today");
  const [viewMode, setViewMode] = useState<ViewMode>("single-day");

  const filteredPersons = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery) {
      return persons;
    }

    return persons.filter((person) =>
      person.name.toLowerCase().includes(normalizedQuery),
    );
  }, [persons, searchQuery]);

  useEffect(() => {
    if (persons.length === 0) {
      setSelectedName("");
      return;
    }

    const exists = persons.some((p) => p.name === selectedName);
    if (!exists) {
      setSelectedName(persons[0].name);
    }
  }, [persons, selectedName]);

  useEffect(() => {
    if (filteredPersons.length === 0) {
      return;
    }

    const exists = filteredPersons.some((p) => p.name === selectedName);
    if (!exists) {
      setSelectedName(filteredPersons[0].name);
    }
  }, [filteredPersons, selectedName]);

  const selectedPerson = useMemo(
    () => persons.find((p) => p.name === selectedName) || null,
    [persons, selectedName],
  );

  const dayName = dayMode === "today" ? getTodayName() : getTomorrowName();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 space-y-4">
      <div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Personal Timetable
        </h2>

        <label htmlFor="person-search" className="text-xs text-gray-500">
          Search Person
        </label>
        <input
          id="person-search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Type a name..."
          className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label
          htmlFor="person-select"
          className="mt-3 block text-xs text-gray-500"
        >
          Select Person
        </label>
        <select
          id="person-select"
          value={selectedName}
          onChange={(e) => setSelectedName(e.target.value)}
          className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {filteredPersons.map((person) => (
            <option key={person.name} value={person.name}>
              {person.name}
            </option>
          ))}
        </select>
        {filteredPersons.length === 0 && (
          <p className="mt-2 text-xs text-rose-500">
            No person matches your search.
          </p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("single-day")}
            className={`flex-1 text-sm font-medium py-2 rounded-lg transition-colors ${
              viewMode === "single-day"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Day View
          </button>
          <button
            onClick={() => setViewMode("week")}
            className={`flex-1 text-sm font-medium py-2 rounded-lg transition-colors ${
              viewMode === "week"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Week View
          </button>
        </div>

        {viewMode === "single-day" && (
          <div className="flex gap-2">
            <button
              onClick={() => setDayMode("today")}
              className={`flex-1 text-sm font-medium py-2 rounded-lg transition-colors ${
                dayMode === "today"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setDayMode("tomorrow")}
              className={`flex-1 text-sm font-medium py-2 rounded-lg transition-colors ${
                dayMode === "tomorrow"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Tomorrow
            </button>
          </div>
        )}
      </div>

      <div>
        {!selectedPerson ? (
          <p className="text-sm text-gray-400">No person selected.</p>
        ) : viewMode === "week" ? (
          <div className="space-y-4">
            {WEEK_DAYS.map((weekday) => (
              <div
                key={weekday}
                className="rounded-xl border border-gray-100 bg-gray-50 p-3"
              >
                <p className="mb-2 text-sm font-semibold text-gray-700">
                  {weekday}
                </p>
                <div className="space-y-2">
                  {Array.from({ length: TOTAL_PERIODS }, (_, i) => i + 1).map(
                    (period) => {
                      const times = PERIOD_TIMES[period];
                      const detail = selectedPerson.schedule[weekday]?.[period];
                      const isFree = !detail?.subject;

                      return (
                        <div
                          key={`${weekday}-${period}`}
                          className="flex items-start justify-between rounded-lg border border-gray-100 bg-white px-3 py-2"
                        >
                          <div>
                            <p className="text-xs font-semibold text-gray-400">
                              P{period} - {times.start}-{times.end}
                            </p>
                            {isFree ? (
                              <p className="text-sm text-emerald-700 font-medium mt-1">
                                Free
                              </p>
                            ) : (
                              <div className="mt-1">
                                <p className="text-sm text-gray-800 font-medium">
                                  {detail.subject}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {detail.teacher || "No teacher"}
                                </p>
                              </div>
                            )}
                          </div>

                          <div className="ml-3">
                            {detail?.room ? (
                              <span className="text-xs bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full font-semibold">
                                {detail.room}
                              </span>
                            ) : (
                              <span className="text-xs text-gray-400">-</span>
                            )}
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p className="text-xs text-gray-400 mb-2">{dayName}</p>
            <div className="space-y-2">
              {Array.from({ length: TOTAL_PERIODS }, (_, i) => i + 1).map(
                (period) => {
                  const times = PERIOD_TIMES[period];
                  const detail = selectedPerson.schedule[dayName]?.[period];
                  const isFree = !detail?.subject;

                  return (
                    <div
                      key={period}
                      className="flex items-start justify-between rounded-xl border border-gray-100 bg-gray-50 px-3 py-2"
                    >
                      <div>
                        <p className="text-xs font-semibold text-gray-400">
                          P{period} - {times.start}-{times.end}
                        </p>
                        {isFree ? (
                          <p className="text-sm text-emerald-700 font-medium mt-1">
                            Free
                          </p>
                        ) : (
                          <div className="mt-1">
                            <p className="text-sm text-gray-800 font-medium">
                              {detail.subject}
                            </p>
                            <p className="text-xs text-gray-500">
                              {detail.teacher || "No teacher"}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="ml-3">
                        {detail?.room ? (
                          <span className="text-xs bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full font-semibold">
                            {detail.room}
                          </span>
                        ) : (
                          <span className="text-xs text-gray-400">-</span>
                        )}
                      </div>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
