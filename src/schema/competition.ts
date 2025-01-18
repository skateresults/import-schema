import { z } from "zod";

const raceStatus = z.union([
  z.literal("open"),
  z.literal("seeded"),
  z.literal("done"),
]);

const smallFinal = z.strictObject({
  status: raceStatus,
  timetableNumber: z.number().nullable(),
  ascenders: z.number(),
});

const qualificationRound = z.strictObject({
  status: raceStatus,
  timetableNumber: z.number().nullable(),
});

export const competition = z.strictObject({
  id: z.string(),
  name: z.string(),
  distance: z.number().nullable().describe("Distance in meters"),
  rounds: z.strictObject({
    "final-a": z.strictObject({
      status: raceStatus,
      timetableNumber: z.number().nullable(),
    }),
    "final-b": smallFinal.optional(),
    "final-c": smallFinal.optional(),
    "final-d": smallFinal.optional(),
    "final-e": smallFinal.optional(),
    "final-f": smallFinal.optional(),
    semifinals: qualificationRound.optional(),
    quarterfinals: qualificationRound.optional(),
    eighthfinals: qualificationRound.optional(),
    heats: qualificationRound.optional(),
  }),
});
