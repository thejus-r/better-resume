import { useAppSelector } from "../../store/hooks";
import { TWorkExperience } from "@features/work/types";
import { TPersonalDetails } from "@features/personal/type";

import { saveAs } from "file-saver";

import { DownloadSimple, PencilSimple } from "@phosphor-icons/react"
import { ResumeDocument } from "@features/pdf/ResumePDF";
import { Project } from "@features/project/type";
import { Skill } from "@features/skills/type";
import { pdf } from "@react-pdf/renderer";
import { useRef } from "react";

export type ResumeData = {
  work: TWorkExperience[];
  personal: TPersonalDetails;
  projects: Project[];
  skills: Skill[];
};

const NavBar = () => {

  const nameRef = useRef<HTMLInputElement>(null);

  const work = useAppSelector((state) => state.workExperience.experience);
  const personal = useAppSelector((state) => state.personal.value);
  const skills = useAppSelector((state) => state.skills.list);
  const projects = useAppSelector((state) => state.projects.list);

  const isDownloadable =
    work.length > 0 && personal != undefined && skills.length > 0;

  const resumeData: ResumeData = {
    work: work,
    personal: personal,
    skills: skills,
    projects: projects,
  };

  const handleClick = async () => {
    const blob = await pdf(<ResumeDocument resumeData={resumeData} />).toBlob();
    saveAs(blob, `${nameRef.current?.value}.pdf`);
  };

  return <nav className="p-2 md:p-0">
    <div className="bg-white lg:px-24 flex items-center gap-2 rounded-2xl p-2 md:py-4">
      <div className="flex gap-4 w-full">
        <div className="h-8 w-8">
          <img src="./images/wm-logo.svg" className="h-8 w-8" alt="logo" />
        </div>

        <div className="flex gap-1 items-center justify-center">
          <PencilSimple />
          <input rel={nameRef} className="w-full" type="text" defaultValue={"Untitled"} />
        </div>
      </div>
      <div>
        <button onClick={handleClick} disabled={!isDownloadable} className="bg-black disabled:bg-gray-200/50 disabled:text-gray-500/50 flex gap-2 items-center text-white px-3 py-2 rounded-xl text-sm">
          <span>
            <DownloadSimple weight="bold" />
          </span>
          Download</button>
      </div>
    </div>
  </nav>
}

export { NavBar }

