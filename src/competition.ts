import {
  array,
  boolean,
  description,
  integer,
  intersect,
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
  label: optional(roundLabel),
});

export const qualifiersCount = pipe(number(), minValue(0), integer());
export const qualifiersByTime = strictObject({ byTime: qualifiersCount });
export const qualifiersByRank = strictObject({ byRank: qualifiersCount });
export const qualifiers = intersect([qualifiersByTime, qualifiersByRank]);

export const qualificationRace = strictObject({
  status: raceStatus,
});

export const qualificationRound = strictObject({
  status: roundStatus,
  timetableNumber,
  label: optional(roundLabel),
  races: pipe(array(qualificationRace), nonEmpty()),
});

function createSmallFinalQualifiers<T extends string>(rounds: T[]) {
  return strictObject(
    Object.fromEntries(
      rounds.map((round) => [round, optional(qualifiersByRank)])
    )
  );
}

function createQualificationQualifiers<T extends string>(rounds: T[]) {
  return strictObject(
    Object.fromEntries(rounds.map((round) => [round, optional(qualifiers)]))
  );
}

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
    "final-b": optional(
      intersect([
        smallFinal,
        strictObject({
          qualifiers: createSmallFinalQualifiers(["final-a"]),
        }),
      ])
    ),
    "final-c": optional(
      intersect([
        smallFinal,
        strictObject({
          qualifiers: createSmallFinalQualifiers(["final-a", "final-b"]),
        }),
      ])
    ),
    "final-d": optional(
      intersect([
        smallFinal,
        strictObject({
          qualifiers: createSmallFinalQualifiers([
            "final-a",
            "final-b",
            "final-c",
          ]),
        }),
      ])
    ),
    "final-e": optional(
      intersect([
        smallFinal,
        strictObject({
          qualifiers: createSmallFinalQualifiers([
            "final-a",
            "final-b",
            "final-c",
            "final-d",
          ]),
        }),
      ])
    ),
    "final-f": optional(
      intersect([
        smallFinal,
        strictObject({
          qualifiers: createSmallFinalQualifiers([
            "final-a",
            "final-b",
            "final-c",
            "final-d",
            "final-e",
          ]),
        }),
      ])
    ),
    semifinals: optional(
      intersect([
        qualificationRound,
        strictObject({
          qualifiers: createQualificationQualifiers([
            "final-a",
            "final-b",
            "final-c",
            "final-d",
            "final-e",
            "final-f",
          ]),
        }),
      ])
    ),
    quarterfinals: optional(
      intersect([
        qualificationRound,
        strictObject({
          qualifiers: createQualificationQualifiers([
            "final-a",
            "final-b",
            "final-c",
            "final-d",
            "final-e",
            "final-f",
            "semifinals",
          ]),
        }),
      ])
    ),
    eighthfinals: optional(
      intersect([
        qualificationRound,
        strictObject({
          qualifiers: createQualificationQualifiers([
            "final-a",
            "final-b",
            "final-c",
            "final-d",
            "final-e",
            "final-f",
            "semifinals",
            "quarterfinals",
          ]),
        }),
      ])
    ),
    heats: optional(
      intersect([
        qualificationRound,
        strictObject({
          qualifiers: createQualificationQualifiers([
            "final-a",
            "final-b",
            "final-c",
            "final-d",
            "final-e",
            "final-f",
            "semifinals",
            "quarterfinals",
            "eighthfinals",
          ]),
        }),
      ])
    ),
  }),
});
