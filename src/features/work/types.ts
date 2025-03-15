type TWorkExperience =
  | {
      id: string;
      role: string;
      companyName: string;
      currentCompany: true;
      from: string;
      description?: string;
    }
  | {
      id: string;
      role: string;
      companyName: string;
      currentCompany: false;
      from: string;
      to: string;
      description?: string;
    };

type TWorkExperienceExtended = Extract<
  TWorkExperience,
  { currentCompany: false }
>;

type TWorkExperiencePayload =
  | {
      role: string;
      companyName: string;
      currentCompany: true;
      from: string;
      description?: string;
    }
  | {
      role: string;
      companyName: string;
      currentCompany: false;
      from: string;
      to: string;
      description?: string;
    };

export type {
  TWorkExperience,
  TWorkExperiencePayload,
  TWorkExperienceExtended,
};
