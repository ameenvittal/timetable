// To add a new person: import their CSV and add to this array.

import ameenCSV from "./persons/ameen.csv?raw";
import ashiqCSV from "./persons/ashiq.csv?raw";
import hashirCSV from "./persons/hashir.csv?raw";
import hishamCSV from "./persons/hisham.csv?raw";
import majidCSV from "./persons/majid.csv?raw";
import munavirCSV from "./persons/munavir.csv?raw";
import nabhanCSV from "./persons/nabhan.csv?raw";
import rabeeCSV from "./persons/rabee.csv?raw";
import salmanCSV from "./persons/salman.csv?raw";
import siyasCSV from "./persons/siyas.csv?raw";
import galibCSV from "./persons/galib.csv?raw";

import { parsePersonCSV } from "../utils/csvParser";
import type { PersonSchedule } from "../types";

const rawFiles: { name: string; csv: string }[] = [
  { name: "Ameen", csv: ameenCSV },
  { name: "Ashiq", csv: ashiqCSV },
  { name: "Hashir", csv: hashirCSV },
  { name: "Hisham", csv: hishamCSV },
  { name: "Majid", csv: majidCSV },
  { name: "Munavir", csv: munavirCSV },
  { name: "Nabhan", csv: nabhanCSV },
  { name: "Rabee", csv: rabeeCSV },
  { name: "Salman", csv: salmanCSV },
  { name: "Siyas", csv: siyasCSV },
  {name: "Galib", csv: galibCSV}
];

export async function loadAllPersons(): Promise<PersonSchedule[]> {
  return Promise.all(
    rawFiles.map(({ name, csv }) => parsePersonCSV(name, csv)),
  );
}
