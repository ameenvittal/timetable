import Papa from "papaparse";
import type { PersonSchedule, Period } from "../types";

// Parses a cell like "Subject Name (Teacher Name) @ ROOM-01"
function parseCell(cell: string): Period {
  const trimmed = cell.trim();
  if (!trimmed) return { subject: null, teacher: null, room: null };

  const roomMatch = trimmed.match(/@\s*(.+)$/);
  const room = roomMatch ? roomMatch[1].trim() : null;

  const withoutRoom = roomMatch
    ? trimmed.slice(0, trimmed.lastIndexOf("@")).trim()
    : trimmed;

  const teacherMatch = withoutRoom.match(/\(([^)]+)\)\s*$/);
  const teacher = teacherMatch ? teacherMatch[1].trim() : null;

  const subject = teacherMatch
    ? withoutRoom.slice(0, withoutRoom.lastIndexOf("(")).trim()
    : withoutRoom;

  return { subject: subject || null, teacher, room };
}

export async function parsePersonCSV(
  name: string,
  csvText: string,
): Promise<PersonSchedule> {
  const result = Papa.parse<string[]>(csvText, { skipEmptyLines: true });
  const rows = result.data;

  const headers = rows[0]; // ["Day/Period", "Period 1", ..., "Period 8"]
  const periodCount = headers.length - 1;

  const schedule: PersonSchedule["schedule"] = {};

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    const day = row[0].trim();
    if (!day) continue;

    const daySchedule: { [period: number]: Period } = {};

    for (let p = 1; p <= periodCount; p++) {
      daySchedule[p] = parseCell(row[p] || "");
    }

    schedule[day] = daySchedule;
  }

  return { name, schedule };
}
