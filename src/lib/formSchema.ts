import { z } from 'zod'

const workExperienceSchema = z.discriminatedUnion("hasWorkExperience", [
    z.object({
        hasWorkExperience: z.literal(true),
        companyName: z.string().min(1)
    }),
    z.object({
        hasWorkExperience: z.literal(false)
    })
]);

const skills = z.discriminatedUnion("hasSkills", 
    [
        z.object({
            hasSkills: z.literal(true),
            skills: z.array(
                z.object ({
                skill: z.string().min(1)
            }))
        }),
        z.object({
            hasSkills: z.literal(false)
        })
    ]
)

const formSchema = z.object({
    name: z.string().min(1),
    designation: z.string().min(1),
}).and(workExperienceSchema).and(skills)

type FormSchema = z.infer<typeof formSchema>

const formDefaultValues: FormSchema = {
    name: "",
    designation: "",
    hasWorkExperience: false,
    hasSkills: false
}

export {formDefaultValues ,formSchema, type FormSchema}