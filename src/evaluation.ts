import { nonEmpty, pipe, strictObject, string } from "valibot";

export const evaluation = strictObject({
  id: pipe(string(), nonEmpty()),
  name: pipe(string(), nonEmpty()),
});
