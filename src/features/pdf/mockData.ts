import { TWorkExperience } from "../../types/sections";
import { Project } from "../project/projectSlice";

type MockData = {
  personalDetails: string;
  workExperience: TWorkExperience[];
  projects: Project[];
  skills: string;
};

const mockData: MockData = {
  personalDetails: "hey",
  workExperience: [
    {
      id: "1234",
      companyName: "Juzy Studio",
      currentCompany: true,
      from: "1-11-2024",
      role: "Front End Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "123",
      companyName: "Flooid LLP",
      currentCompany: false,
      from: "15-04-2023",
      to: "30-10-2024",
      role: "Product Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
  projects: [
    {
      id: "123",
      name: "Better Resume",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "1234",
      name: "Gopher Social API",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
  skills: "ReactJS, Typescript, Javascript, GoLang",
};

export default mockData;
