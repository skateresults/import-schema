import {
  array,
  description,
  integer,
  literal,
  minValue,
  nonEmpty,
  nullable,
  number,
  optional,
  picklist,
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

export const timetableNumber = optional(
  nullable(pipe(number(), integer())),
  null
);
export const qualificationCount = optional(
  pipe(number(), minValue(0), integer()),
  0
);

export const race = strictObject({
  status: raceStatus,
});

export const roundId = picklist([
  "final-a",
  "final-b",
  "final-c",
  "final-d",
  "final-e",
  "final-f",
  "semifinals",
  "quarterfinals",
  "eighthfinals",
  "heats",
]);

export const qualificationRule = strictObject({
  round: roundId,
  byTime: qualificationCount,
  byRank: qualificationCount,
});

export const round = strictObject({
  id: roundId,

  status: roundStatus,
  timetableNumber,
  label: optional(nullable(roundLabel), null),
  races: pipe(array(race), nonEmpty()),
  qualificationRules: pipe(
    array(qualificationRule),
    description(
      "Ordered by priority. E.g. `final-a` is the first rule, `final-b` is the second rule, etc."
    )
  ),
});
