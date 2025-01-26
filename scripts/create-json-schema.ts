import {
  ageGroup,
  athlete,
  competition,
  qualificationRace,
  qualificationRound,
  raceStatus,
  root,
  roundLabel,
  roundStatus,
  smallFinal,
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
    qualificationRound,
    qualificationRace,
    competition,
    ageGroup,
  },
});

await writeFile("schema.json", JSON.stringify(jsonSchema, null, 2));
