import { schema } from "./schema";
import { zodToJsonSchema } from "zod-to-json-schema";
import { writeFile } from "node:fs/promises";

const jsonSchema = zodToJsonSchema(schema);

await writeFile("schema.json", JSON.stringify(jsonSchema, null, 2));
