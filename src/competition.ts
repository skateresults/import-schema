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

export const competition = strictObject({
  id: pipe(string(), nonEmpty()),
  name: pipe(string(), nonEmpty()),
  distance: pipe(nullable(number()), description("Distance in meters")),
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
