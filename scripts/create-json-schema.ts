import {
  ageGroup,
  athlete,
  competition,
  qualificationQualifiers,
  qualificationRace,
  qualificationRound,
  raceStatus,
  root,
  roundLabel,
  roundStatus,
  smallFinal,
  evaluation,
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
    qualificationQualifiers,
    qualificationRound,
    qualificationRace,
    competition,
    ageGroup,
    evaluation,
  },
});

await writeFile("schema.json", JSON.stringify(jsonSchema, null, 2));
