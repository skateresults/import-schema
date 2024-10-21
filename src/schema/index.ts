import { z } from "zod";
import { athlete } from "./athlete";
import { ageGroup } from "./ageGroup";

export const schema = z.strictObject({
  version: z.literal(1),
  athletes: z.array(athlete),
  ageGroups: z.array(ageGroup),
});
