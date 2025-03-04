type TWorkExperience = {
    id: string,
    role: string,
    companyName: string
    currentCompany: true,
    from: string
    description?: string
} | {
    id: string,
    role: string,
    companyName: string
    currentCompany: false
    from: string
    to: string
    description?: string
}

type TPersonalDetails = {
    name: string,
    email: string,
    phoneNumber: string,
    place: string
  }

  type TSKills = string[]
  
export type { TWorkExperience, TPersonalDetails, TSKills }