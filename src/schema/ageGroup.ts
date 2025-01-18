import {
  array,
  description,
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

export const ageGroup = strictObject({
  id: string(),
  name: pipe(string(), description("Name including the gender")),
  gender: union([literal("female"), literal("male"), literal("mixed")]),

  ageRange: pipe(
    optional(tuple([number(), number()])),
    description("Minimum and maximum age")
  ),

  competitions: array(competition),
});
