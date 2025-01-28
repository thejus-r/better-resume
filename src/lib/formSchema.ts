import { z } from "zod";

const currentCompanyDetails = z.object({
  companyName: z.string(),
  role: z.string(),
  brief: z.string(),
  fromDate: z.string(),
});

const previousCompanyDetails = z.object({
  companyName: z.string(),
  role: z.string(),
  brief: z.string(),
  fromDate: z.string(),
  toDate: z.string(),
});

const experienceSchema = z.discriminatedUnion("hasWorkExperience", [
  z.object({
    hasWorkExperience: z.literal(true),
    currentExperience: z.optional(currentCompanyDetails),
    previousExperience: z.array(previousCompanyDetails),
  }),
  z.object({
    hasWorkExperience: z.literal(false)
  })
]);

const formSchema = z
  .object({
    name: z.string(),
    phone: z.string(),
    designation: z.string(),
  })
  .and(experienceSchema);

type FormSchema = z.infer<typeof formSchema>;

const defaultValue: FormSchema = {
  name: "",
  phone: "",
  designation: "",
  hasWorkExperience: true,
  currentExperience: {
    companyName: "",
    brief: "",
    fromDate: "",
    role: ""
  },
  previousExperience: [
    {
        companyName: "",
        brief: "",
        fromDate: "",
        role: "",
        toDate: ""
    }
  ]
};

export { formSchema, defaultValue, type FormSchema };
