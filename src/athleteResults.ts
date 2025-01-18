import {
  description,
  InferOutput,
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
  rank: nullable(pipe(number(), integer(), minValue(1))),
  points: nullable(pipe(number(), integer(), minValue(0))),
});

export const athleteResults = strictObject({
  overall: intersect([
    pipe(object({ "0": overallResult }), description("Main Evaluation")),
    record(pipe(string(), description("Evaluation ID")), overallResult),
  ]),
});
