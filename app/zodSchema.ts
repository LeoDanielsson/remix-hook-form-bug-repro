import * as zod from "zod";

export const schema = zod.object({
    name: zod.string().min(1),
    email: zod.string().email().min(1),
  });
  
export type FormData = zod.infer<typeof schema>;