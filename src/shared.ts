import { maxLength, minLength, nonEmpty, pipe, regex, string } from "valibot";

export const id = pipe(
  string(),
  regex(/^[A-Za-z0-9._~-]*$/),
  nonEmpty(),
  maxLength(32)
);
