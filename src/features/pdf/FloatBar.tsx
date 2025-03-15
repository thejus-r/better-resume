import { useAppSelector } from "../../store/hooks";
import { TWorkExperience } from "@features/work/types";
import { TPersonalDetails } from "@features/personal/type";

import { PDF } from "./ResumePDF";

export type ResumeData = {
  work: TWorkExperience[];
  personal: TPersonalDetails;
};

const FloatBar = () => {
  const work = useAppSelector((state) => state.workExperience.experience);
  const personal = useAppSelector((state) => state.personal.value);
  const skills = useAppSelector((state) => state.skills.list);

  const isDownloadable =
    work.length > 0 && personal != undefined && skills.length > 0;

  const resumeData: ResumeData = {
    work: work,
    personal: personal,
  };

  return (
    <div className="fixed bottom-0 left-1/2 flex -translate-x-1/2 -translate-y-8 items-center gap-4 rounded-full bg-white p-2 drop-shadow-2xl">
      <div className="p-2">FileName.pdf</div>
      {isDownloadable && (
        <button className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white">
          Download
        </button>
      )}

      {/* <div className="fixed h-screen w-screen">
        <PDF resumeData={resumeData} />
      </div> */}
    </div>
  );
};

export { FloatBar };
