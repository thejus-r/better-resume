type TWorkExperience = {
    id: string,
    role: string,
    companyName: string
    currentCompany: true,
    from: string
} | {
    id: string,
    role: string,
    companyName: string
    currentCompany: false
    from: string
    to: string
}

export type { TWorkExperience }