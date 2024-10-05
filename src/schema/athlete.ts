import { z } from "zod";

export const athlete = z.strictObject({
  id: z.string(),
  bib: z.number().nullable(),
  lastName: z.string(),
  firstName: z.string(),

  club: z.string().nullable(),
  nation: z.string().nullable().describe("IOC country code"),

  ageGroupId: z.string().nullable(),
});
