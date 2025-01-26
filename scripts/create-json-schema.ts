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
} from "../src";
import { toJsonSchema } from "@valibot/to-json-schema";
import { writeFile } from "node:fs/promises";

const jsonSchema = toJsonSchema(root, {
  definitions: {
    athlete,
    raceStatus,
    roundStatus,
    roundLabel,
    smallFinal,
    qualifiers,
    qualifiersByRank,
    qualificationRound,
    qualificationRace,
    competition,
    ageGroup,
    evaluation,
  },
});

await writeFile("schema.json", JSON.stringify(jsonSchema, null, 2));
