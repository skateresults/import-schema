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
  lastName: string(),
  firstName: string(),

  club: nullable(string()),
  nation: pipe(nullable(string()), description("IOC country code")),

  ageGroupId: nullable(string()),

  results: athleteResults,
});
