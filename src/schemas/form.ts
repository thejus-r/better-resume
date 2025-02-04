import { z } from "zod"

const PersonalDetailsSchema = z.object({
  name: z.string().trim(),
  email: z.string().trim().email()
})

const formSchema = z.object({
  personalDetails: PersonalDetailsSchema
})

type FormSchema = z.infer<typeof formSchema>

export { formSchema, type FormSchema }
