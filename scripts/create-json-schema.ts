import {
  ageGroup,
  athlete,
  competition,
  qualifiers,
  qualificationRace,
  qualificationRound,
  raceStatus,
  root,
  roundLabel,
  roundStatus,
  smallFinal,
  evaluation,
  qualifiersByRank,
  age,
  qualifiersCount,
  qualifiersByTime,
  timetableNumber,
  ranking,
  time,
  raceResult,
  competitionResult,
  athleteResults,
} from "../src";
import { toJsonSchema } from "@valibot/to-json-schema";
import { writeFile } from "node:fs/promises";

const jsonSchema = toJsonSchema(root, {
  definitions: {
    // athleteResult.ts
    ranking,
    time,
    raceResult,
    competitionResult,
    athleteResults,

    // athlete.ts
    athlete,
    // competition.ts
    raceStatus,
    roundStatus,
    roundLabel,
    timetableNumber,
    smallFinal,
    qualifiersCount,
    qualifiersByRank,
    qualifiersByTime,
    qualifiers,
    qualificationRace,
    qualificationRound,
    competition,
    // ageGroup.ts
    age,
    ageGroup,
    // evaluation.ts
    evaluation,
  },
});

await writeFile("schema.json", JSON.stringify(jsonSchema, null, 2));
