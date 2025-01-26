import {
  array,
  description,
  integer,
  literal,
  nonEmpty,
  nullable,
  number,
  optional,
  pipe,
  strictObject,
  string,
  tuple,
  union,
} from "valibot";
import { competition } from "./competition.js";

export const age = pipe(number(), integer(), description("Age in years"));

export const ageGroup = strictObject({
  id: pipe(string(), nonEmpty()),
  name: pipe(string(), nonEmpty(), description("Name including the gender")),
  gender: union([literal("female"), literal("male"), literal("mixed")]),

  ageRange: pipe(
    optional(nullable(tuple([age, age])), null),
    description("Minimum and maximum age")
  ),

  competitions: array(competition),
});
