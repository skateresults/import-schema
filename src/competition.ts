import {
  array,
  boolean,
  description,
  integer,
  minValue,
  nonEmpty,
  nullable,
  number,
  optional,
  pipe,
  strictObject,
  string,
} from "valibot";
import { round } from "./round.js";
import { id } from "./shared.js";

export const competition = strictObject({
  id,
  name: pipe(string(), nonEmpty()),
  distance: pipe(
    optional(nullable(number()), null),
    description("Distance in meters")
  ),
  done: boolean(),
  priority: optional(
    pipe(
      number(),
      minValue(1),
      integer(),
      description(
        "Priority of competitions in case of a tie in points; currently not used"
      )
    )
  ),
  rounds: pipe(array(round), nonEmpty()),
});
