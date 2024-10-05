import { z } from "zod";
import { athlete } from "./athlete";
import { ageGroup } from "./ageGroup";

export const schema = z.strictObject({
  athletes: z.array(athlete),
  ageGroups: z.array(ageGroup),
});
