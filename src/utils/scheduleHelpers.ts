import type { PersonSchedule, PeriodStatus, DayName } from "../types";

// Period times — adjust as needed
export const PERIOD_TIMES: {
  [period: number]: { start: string; end: string };
} = {
  1: { start: "07:35", end: "08:25" },
  2: { start: "08:50", end: "09:40" },
  3: { start: "09:45", end: "10:35" },
  4: { start: "10:40", end: "11:30" },
  5: { start: "11:35", end: "12:25" },
  6: { start: "12:30", end: "13:15" },
  7: { start: "14:15", end: "15:05" },
  8: { start: "15:15", end: "16:05" },
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
