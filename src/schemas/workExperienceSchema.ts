// Zod Schema Definition and Type infer

import { z } from "zod"

const workExperienceSchema = z.discriminatedUnion("currentCompany", [
  z.object({
    currentCompany: z.literal(true),
    companyName: z.string().trim().min(3),
    role: z.string().trim().min(3),
    from: z.string()
  }),
  z.object({
    currentCompany: z.literal(false),
    companyName: z.string().trim().min(3),
    role: z.string().trim().min(3),
    from: z.string(),
    to: z.string()
  })
])

type TWorkExperienceSchema = z.infer<typeof workExperienceSchema>

export { workExperienceSchema, type TWorkExperienceSchema }
