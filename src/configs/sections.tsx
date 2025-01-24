import { EducationForm } from "@components/Forms/EducationForm";
import { PersonalForm } from "@components/Forms/PersonalForm";
import {
  SuitcaseSimple,
  User,
  GraduationCap,
  Shapes,
  LightbulbFilament,
  Medal,
} from "@phosphor-icons/react";

export const sectionsConfig = [
  {
    name: "Personal",
    icon: User,
    form: PersonalForm,
  },
  {
    name: "Work Experience",
    icon: SuitcaseSimple,
    form: PersonalForm,
  },
  {
    name: "Education",
    icon: GraduationCap,
    form: EducationForm,
  },
  {
    name: "Projects",
    icon: Shapes,
    form: PersonalForm,
  },
  {
    name: "Skills",
    icon: LightbulbFilament,
    form: PersonalForm,
  },
  {
    name: "Certifications",
    icon: Medal,
    form: PersonalForm,
  },
];
