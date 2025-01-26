import {
  ageGroup,
  athlete,
  competition,
  qualificationRound,
  raceStatus,
  root,
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
    smallFinal,
    qualificationRound,
    competition,
    ageGroup,
  },
});

await writeFile("schema.json", JSON.stringify(jsonSchema, null, 2));
