import {
  array,
  description,
  integer,
  literal,
  number,
  optional,
  pipe,
  strictObject,
  string,
  tuple,
  union,
} from "valibot";
import { competition } from "./competition";

export const age = pipe(number(), integer(), description("Age in years"));

export const ageGroup = strictObject({
  id: string(),
  name: pipe(string(), description("Name including the gender")),
  gender: union([literal("female"), literal("male"), literal("mixed")]),

  ageRange: pipe(
    optional(tuple([age, age])),
    description("Minimum and maximum age")
  ),

  competitions: array(competition),
});
