import { toJsonSchema } from "@valibot/to-json-schema";
import { writeFile } from "node:fs/promises";
import {
  age,
  ageGroup,
  athlete,
  competition,
  competitionRanking,
  competitionResult,
  competitionResults,
  evaluation,
  overallRanking,
  overallResults,
  qualificationRule,
  qualificationCount,
  race,
  raceResult,
  raceStatus,
  root,
  round,
  roundId,
  roundStatus,
  time,
  timetableNumber,
} from "../src";

const jsonSchema = toJsonSchema(root, {
  definitions: {
    // competitionResults.ts
    competitionRanking,
    time,
    raceResult,
    competitionResult,
    competitionResults,
    // overallResults.ts
    overallRanking,
    overallResults,
    // athlete.ts
    athlete,
    // round.ts
    raceStatus,
    roundStatus,
    timetableNumber,
    qualificationCount,
    race,
    roundId,
    qualificationRule,
    round,
    // competition.ts
    competition,
    // ageGroup.ts
    age,
    ageGroup,
    // evaluation.ts
    evaluation,
  },
});

await writeFile("schema.json", JSON.stringify(jsonSchema, null, 2));
