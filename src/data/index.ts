// To add a new person: import their CSV and add to this array.

import ameenCSV from "./persons/ameen.csv?raw";
import ashiqCSV from "./persons/ashiq.csv?raw";
import hashirCSV from "./persons/hashir.csv?raw";
import hishamCSV from "./persons/hisham.csv?raw";
import munavirCSV from "./persons/munavir.csv?raw";
import nabhanCSV from "./persons/nabhan.csv?raw";
import salmanCSV from "./persons/salman.csv?raw";

import { parsePersonCSV } from "../utils/csvParser";
import type { PersonSchedule } from "../types";

const rawFiles: { name: string; csv: string }[] = [
  { name: "Ameen", csv: ameenCSV },
  { name: "Ashiq", csv: ashiqCSV },
  { name: "Hashir", csv: hashirCSV },
  { name: "Hisham", csv: hishamCSV },
  { name: "Munavir", csv: munavirCSV },
  { name: "Nabhan", csv: nabhanCSV },
  { name: "Salman", csv: salmanCSV },
];

export async function loadAllPersons(): Promise<PersonSchedule[]> {
  return Promise.all(
    rawFiles.map(({ name, csv }) => parsePersonCSV(name, csv)),
  );
}
