import { z } from "zod";

export const ageGroup = z.strictObject({
  id: z.string(),
  name: z.string().describe("Name including the gender"),
  gender: z.union([z.literal("female"), z.literal("male"), z.literal("mixed")]),

  ageRange: z
    .tuple([z.number(), z.number()])
    .describe("Minimum and maximum age"),
});
