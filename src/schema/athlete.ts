import {
  description,
  nullable,
  number,
  pipe,
  strictObject,
  string,
} from "valibot";

export const athlete = strictObject({
  id: string(),
  bib: nullable(number()),
  lastName: string(),
  firstName: string(),

  club: nullable(string()),
  nation: pipe(nullable(string()), description("IOC country code")),

  ageGroupId: nullable(string()),
});
