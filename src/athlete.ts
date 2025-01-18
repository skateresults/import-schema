import {
  description,
  integer,
  minValue,
  nonEmpty,
  nullable,
  number,
  pipe,
  strictObject,
  string,
} from "valibot";
import { athleteResults } from "./athleteResults";

export const athlete = strictObject({
  id: pipe(string(), nonEmpty()),
  bib: nullable(pipe(number(), minValue(1), integer())),
  lastName: pipe(string(), nonEmpty()),
  firstName: pipe(string(), nonEmpty()),

  club: nullable(pipe(string(), nonEmpty())),
  nation: pipe(nullable(string()), description("IOC country code")),

  ageGroupId: nullable(string()),

  results: athleteResults,
});
