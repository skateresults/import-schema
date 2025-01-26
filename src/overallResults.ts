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

export const overallRanking = strictObject({
  rank: nullable(pipe(number(), minValue(1), integer())),
  points: nullable(
    pipe(
      number(),
      minValue(0),
      integer(),
      description("Sum of all competition points")
    )
  ),
});

export const overallResults = intersect([
  pipe(object({ "0": overallRanking }), description("Main evaluation")),
  pipe(
    record(string(), overallRanking),
    description("Key is the evaluation ID")
  ),
]);
