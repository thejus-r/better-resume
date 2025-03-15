import { useAppSelector } from "../../store/hooks";
import { TWorkExperience } from "@features/work/types";
import { TPersonalDetails } from "@features/personal/type";

import { saveAs } from "file-saver";

import { ResumeDocument } from "./ResumePDF";
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

const FloatBar = () => {
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

  return (
    <div className="fixed bottom-0 left-1/2 flex -translate-x-1/2 -translate-y-8 items-center gap-4 rounded-full bg-white px-2 pl-4 drop-shadow-2xl">
      <div className="flex flex-col p-2">
        <label className="text-xs text-gray-400">Resume Name</label>
        <input ref={nameRef} defaultValue={"Untitled"} />
      </div>
      {isDownloadable && (
        <button
          onClick={handleClick}
          className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
        >
          Download
        </button>
      )}
      {/*

      // For Testing
      <div className="fixed h-screen w-screen">
        <PDF resumeData={resumeData} />
      </div> */}
    </div>
  );
};

export { FloatBar };
