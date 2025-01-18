import {
  description,
  integer,
  intersect,
  minValue,
  nullable,
  number,
  object,
  pipe,
  record,
  strictObject,
  string,
} from "valibot";

export const overallResult = strictObject({
  rank: nullable(pipe(number(), minValue(1), integer())),
  points: nullable(pipe(number(), minValue(0), integer())),
});

export const athleteResults = strictObject({
  overall: intersect([
    pipe(object({ "0": overallResult }), description("Main Evaluation")),
    record(pipe(string(), description("Evaluation ID")), overallResult),
  ]),
});
