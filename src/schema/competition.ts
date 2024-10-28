import { z } from "zod";

export const competition = z.strictObject({
  id: z.string(),
  name: z.string(),
  distance: z.number().nullable().describe("Distance in meters"),
});
