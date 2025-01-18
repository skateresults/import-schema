import {
  description,
  integer,
  literal,
  nullable,
  number,
  optional,
  pipe,
  strictObject,
  string,
  union,
} from "valibot";

export const raceStatus = union([
  literal("open"),
  literal("seeded"),
  literal("done"),
]);

export const timetableNumber = nullable(pipe(number(), integer()));

export const smallFinal = strictObject({
  status: raceStatus,
  timetableNumber,
  ascenders: pipe(number(), integer()),
});

export const qualificationRound = strictObject({
  status: raceStatus,
  timetableNumber,
});

export const competition = strictObject({
  id: string(),
  name: string(),
  distance: pipe(nullable(number()), description("Distance in meters")),
  rounds: strictObject({
    "final-a": strictObject({
      status: raceStatus,
      timetableNumber,
    }),
    "final-b": optional(smallFinal),
    "final-c": optional(smallFinal),
    "final-d": optional(smallFinal),
    "final-e": optional(smallFinal),
    "final-f": optional(smallFinal),
    semifinals: optional(qualificationRound),
    quarterfinals: optional(qualificationRound),
    eighthfinals: optional(qualificationRound),
    heats: optional(qualificationRound),
  }),
});
