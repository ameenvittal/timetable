import { useEffect, useState } from "react";
import {
  Clock3,
  CalendarDays,
  SunMoon,
  Building2,
  UserRound,
} from "lucide-react";
import type { PersonSchedule } from "./types";
import { loadAllPersons } from "./data/index";
import { getTodayName, getTomorrowName } from "./utils/scheduleHelpers";
import Header from "./components/Header";
import CurrentPeriod from "./components/CurrentPeriod";
import NextPeriod from "./components/NextPeriod";
import DayView from "./components/DayView";
import RoomView from "./components/RoomView";
import PersonTimetable from "./components/PersonTimetable";

type Tab = "now" | "today" | "tomorrow" | "rooms" | "person";

function getInitialTab(): Tab {
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return "person";
  }
  return "now";
}

export default function App() {
  const [persons, setPersons] = useState<PersonSchedule[]>([]);
  const [tab, setTab] = useState<Tab>(getInitialTab);

  useEffect(() => {
    loadAllPersons().then(setPersons);
  }, []);

  const today = getTodayName();
  const tomorrow = getTomorrowName();

  const tabs: { id: Tab; label: string }[] = [
    { id: "now", label: "Now" },
    { id: "today", label: "Today" },
    { id: "tomorrow", label: "Tomorrow" },
    { id: "rooms", label: "Rooms" },
    { id: "person", label: "Person" },
  ];

  const tabIcons: Record<Tab, React.ReactNode> = {
    now: <Clock3 className="h-4 w-4" />,
    today: <CalendarDays className="h-4 w-4" />,
    tomorrow: <SunMoon className="h-4 w-4" />,
    rooms: <Building2 className="h-4 w-4" />,
    person: <UserRound className="h-4 w-4" />,
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-100 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="absolute top-24 right-0 h-80 w-80 rounded-full bg-indigo-300/25 blur-3xl" />
      </div>

      <Header />

      {/* Tab Bar */}
      <div className="sticky top-18 z-20 border-b border-slate-200/70 bg-white/80 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl gap-2 rounded-2xl bg-slate-100 p-1.5">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-all ${
                tab === t.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-white"
              }`}
            >
              {tabIcons[t.id]}
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl space-y-4 px-4 py-5 sm:py-6">
        {persons.length === 0 && (
          <p className="mt-16 text-center text-sm text-slate-500">
            Loading schedules...
          </p>
        )}

        {persons.length > 0 && (
          <>
            {tab === "now" && (
              <>
                <CurrentPeriod persons={persons} />
                <NextPeriod persons={persons} />
              </>
            )}
            {tab === "today" && (
              <DayView persons={persons} day={today} label="Today's Schedule" />
            )}
            {tab === "tomorrow" && (
              <DayView
                persons={persons}
                day={tomorrow}
                label="Tomorrow's Schedule"
              />
            )}
            {tab === "rooms" && <RoomView persons={persons} />}
            {tab === "person" && <PersonTimetable persons={persons} />}
          </>
        )}
      </div>
    </div>
  );
}
