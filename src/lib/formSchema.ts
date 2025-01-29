import { z } from "zod";

const Sections = z.enum(["personal", "work", "education"])

// Schema for Personal Details
const PersonalDetailsSchema = z.object({
  sectionName: z.literal(Sections.Enum.personal), 
  name: z.string(),
  designation: z.string(),
  email: z.string(),
  place: z.string(),
  phoneNumber: z.string(),
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