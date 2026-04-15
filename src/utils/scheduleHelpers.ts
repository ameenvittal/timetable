import type { PersonSchedule, PeriodStatus, DayName } from "../types";

// Period times — adjust as needed
export const PERIOD_TIMES: {
  [period: number]: { start: string; end: string };
} = {
  1: { start: "08:00", end: "08:45" },
  2: { start: "08:45", end: "09:30" },
  3: { start: "09:30", end: "10:15" },
  4: { start: "10:30", end: "11:15" },
  5: { start: "11:15", end: "12:00" },
  6: { start: "13:30", end: "14:15" },
  7: { start: "14:15", end: "15:00" },
  8: { start: "15:00", end: "15:45" },
};

export const TOTAL_PERIODS = 8;

export function getTodayName(): DayName {
  const days: DayName[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[new Date().getDay()];
}

export function getTomorrowName(): DayName {
  const days: DayName[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[(new Date().getDay() + 1) % 7];
}

export function getCurrentPeriod(): number | null {
  const now = new Date();
  const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes(),
  ).padStart(2, "0")}`;

  for (const [periodStr, times] of Object.entries(PERIOD_TIMES)) {
    if (currentTime >= times.start && currentTime < times.end) {
      return Number(periodStr);
    }
  }
  return null;
}

export function getNextPeriod(): number | null {
  const current = getCurrentPeriod();
  const now = new Date();
  const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes(),
  ).padStart(2, "0")}`;

  if (current !== null) {
    const next = current + 1;
    return PERIOD_TIMES[next] ? next : null;
  }

  // Between periods — find the next upcoming one
  for (const [periodStr, times] of Object.entries(PERIOD_TIMES)) {
    if (currentTime < times.start) {
      return Number(periodStr);
    }
  }
  return null;
}

export function getStatusForPeriod(
  persons: PersonSchedule[],
  day: string,
  period: number,
): PeriodStatus[] {
  return persons.map((person) => {
    const p = person.schedule[day]?.[period];
    const isFree = !p || !p.subject;
    return {
      personName: person.name,
      isFree,
      period: p || null,
    };
  });
}
