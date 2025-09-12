import { nonEmpty, pipe, strictObject, string } from "valibot";
import { id } from "./shared.js";

export const evaluation = strictObject({
  id,
  name: pipe(string(), nonEmpty()),
});
