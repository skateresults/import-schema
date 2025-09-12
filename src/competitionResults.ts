import {
  boolean,
  description,
  integer,
  intersect,
  minValue,
  nullable,
  number,
  object,
  optional,
  pipe,
  record,
  strictObject,
  string,
} from "valibot";
import { id } from "./shared.js";

export const competitionRanking = strictObject({
  rank: nullable(pipe(number(), minValue(1), integer())),
  points: nullable(
    pipe(
      number(),
      minValue(0),
      integer(),
      description("Points for overall ranking")
    )
  ),
});

export const time = strictObject({
  seconds: pipe(number(), minValue(0)),
  precision: pipe(number(), minValue(0), integer()),
});

export const raceResult = strictObject({
  raceIndex: pipe(number(), minValue(0), integer()),

  startPos: nullable(pipe(number(), minValue(1), integer())),
  rank: nullable(pipe(number(), minValue(1), integer())),
  time: nullable(time),
  points: pipe(
    nullable(pipe(number(), minValue(0), integer())),
    description("Points in points race")
  ),
  remarks: string(),

  rr: pipe(boolean(), description("Reduced in rank")),
  dsqSF: pipe(boolean(), description("Disqualified by sports fault")),
  dsqTF: pipe(boolean(), description("Disqualified by technical fault")),
  fs1: pipe(boolean(), description("1st false start")),
  warning1: pipe(boolean(), description("1st warning")),
  warning2: pipe(boolean(), description("2nd warning")),
  dns: pipe(boolean(), description("Did not start")),
});

export const competitionResult = strictObject({
  // `picklist` is not supported by JSON schema
  rounds: strictObject({
    "final-a": optional(raceResult),
    "final-b": optional(raceResult),
    "final-c": optional(raceResult),
    "final-d": optional(raceResult),
    "final-e": optional(raceResult),
    "final-f": optional(raceResult),
    "final-g": optional(raceResult),
    "final-h": optional(raceResult),
    "final-i": optional(raceResult),
    "final-j": optional(raceResult),
    semifinals: optional(raceResult),
    quarterfinals: optional(raceResult),
    eighthfinals: optional(raceResult),
    heats: optional(raceResult),
  }),

  ranking: intersect([
    pipe(object({ "0": competitionRanking }), description("Main evaluation")),
    pipe(
      record(string(), competitionRanking),
      description("Key is the evaluation ID")
    ),
  ]),
});

export const competitionResults = pipe(
  record(string(), competitionResult),
  description("Key is the competition ID")
);
