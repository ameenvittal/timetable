// To add a new person: import their CSV and add to this array.

import ameenCSV from "./persons/ameen.csv?raw";
import hashimCSV from "./persons/hashim.csv?raw";
import majidCSV from "./persons/majid.csv?raw"
import ArifCSV from "./persons/arif.csv?raw"
import HishamCSV from "./persons/hisham.csv?raw"
import SiyasCSV from "./persons/siyas.csv?raw"
import ShamsheerCSV from "./persons/shamsheer.csv?raw"

import { parsePersonCSV } from "../utils/csvParser";
import type { PersonSchedule } from "../types";

const rawFiles: { name: string; csv: string }[] = [
  { name: "Ameen", csv: ameenCSV },
  { name: "Hashim", csv: hashimCSV },
  {name: "Majid", csv: majidCSV},
  {name: "Arif", csv :ArifCSV },
  {name: "Hisham", csv: HishamCSV },
  {name: "Siyas", csv: SiyasCSV },
  {name: "Shamsheer", csv: ShamsheerCSV }
  // { name: "NewPerson", csv: newPersonCSV },  ← add here
];

export async function loadAllPersons(): Promise<PersonSchedule[]> {
  return Promise.all(
    rawFiles.map(({ name, csv }) => parsePersonCSV(name, csv)),
  );
}
