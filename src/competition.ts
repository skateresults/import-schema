import {
  array,
  boolean,
  description,
  integer,
  literal,
  minValue,
  nonEmpty,
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
export const roundStatus = raceStatus;
export const roundLabel = pipe(string(), nonEmpty());

export const timetableNumber = nullable(pipe(number(), integer()));

export const smallFinal = strictObject({
  status: raceStatus,
  timetableNumber,
  qualifiers: pipe(number(), minValue(0), integer()),
  label: optional(roundLabel),
});

export const qualificationQualifiers = strictObject({
  byTime: pipe(number(), minValue(0), integer()),
  byRank: pipe(number(), minValue(0), integer()),
});

export const qualificationRace = strictObject({
  status: raceStatus,
});

export const qualificationRound = strictObject({
  status: roundStatus,
  timetableNumber,
  label: optional(roundLabel),
  races: pipe(array(qualificationRace), nonEmpty()),
  qualifiers: qualificationQualifiers,
});

export const competition = strictObject({
  id: pipe(string(), nonEmpty()),
  name: pipe(string(), nonEmpty()),
  distance: pipe(nullable(number()), description("Distance in meters")),
  done: boolean(),
  priority: optional(
    pipe(
      number(),
      minValue(1),
      integer(),
      description(
        "Priority of competitions in case of a tie in points; currently not used"
      )
    )
  ),
  rounds: strictObject({
    "final-a": strictObject({
      status: raceStatus,
      timetableNumber,
      label: optional(roundLabel),
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
