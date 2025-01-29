import { z } from "zod";

const Sections = z.enum(["personal", "work", "education"])

// Schema for Personal Details
const PersonalDetailsSchema = z.object({
  sectionName: z.literal(Sections.Enum.personal), 
  name: z.string().trim(),
  designation: z.string().trim(),
  email: z.string().trim(),
  place: z.string().trim(),
  phoneNumber: z.string().trim(),
  about: z.string().trim().optional()
})

// Schema for Work Details
// TODO: Option to add Current Company and Previous Experiences
const WorkDetailsSchema = z.object({
  sectionName: z.literal(Sections.Enum.work),
  company: z.string(),
  role: z.string(),
})

const SectionSchema = z.discriminatedUnion("sectionName", [
  PersonalDetailsSchema,
  WorkDetailsSchema
])
 
const FormSchema = z.map(Sections, SectionSchema)

type PersonalDetailsType = z.infer<typeof PersonalDetailsSchema>
type FormSchemaType = z.infer<typeof FormSchema>
type SectionSchemaType = z.infer<typeof SectionSchema>
type SectionsType = z.infer<typeof Sections>

export { FormSchema, SectionSchema };
export  type { FormSchemaType, SectionsType, SectionSchemaType, PersonalDetailsType}