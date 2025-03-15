// Zod Schema Definition and Type infer
import { string, z } from "zod";

/**
 * Schema for Personal Details Form
 * @param name
 * @param role
 * @param email
 * @param phoneNumber
 * @param place
 */
const personalDetailsSchema = z.object({
  name: string()
    .trim()
    .min(1, { message: "Name should be atleast 1 character long!" }),
  role: string()
    .trim()
    .min(1, { message: "Role should be atleast 1 character long!" }),
  email: string().trim().email({ message: "Enter a valid email address!" }),
  phoneNumber: string().length(10, { message: "Enter a valid Phone Number!" }),
  place: string()
    .trim()
    .min(1, { message: "Place should be atleast 1 character long!" }),
});

type TPersonalDetailsSchema = z.infer<typeof personalDetailsSchema>;

export { personalDetailsSchema, type TPersonalDetailsSchema };
