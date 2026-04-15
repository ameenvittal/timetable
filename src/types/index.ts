export interface Period {
  subject: string | null;
  teacher: string | null;
  room: string | null;
}

export interface DaySchedule {
  [periodNumber: number]: Period;
}

export interface PersonSchedule {
  name: string;
  schedule: {
    [day: string]: DaySchedule;
  };
}

export type DayName =
  | "Saturday"
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday";

export interface PeriodStatus {
  personName: string;
  isFree: boolean;
  period: Period | null;
}
