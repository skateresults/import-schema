import {
  ageGroup,
  athlete,
  competition,
  qualificationRound,
  raceStatus,
  root,
  smallFinal,
} from "./schema";
import { toJsonSchema } from "@valibot/to-json-schema";
import { writeFile } from "node:fs/promises";

const jsonSchema = toJsonSchema(root, {
  definitions: {
    athlete,
    raceStatus,
    smallFinal,
    qualificationRound,
    competition,
    ageGroup,
  },
});

await writeFile("schema.json", JSON.stringify(jsonSchema, null, 2));
