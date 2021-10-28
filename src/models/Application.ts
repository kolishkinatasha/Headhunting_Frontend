export type TStatusApp =
  | 'На рассмотрении'
  | 'Черновик'
  | 'На согласовании'
  | 'Отклонена'
  | 'На исполнении'
  | 'Согласование с руководством'
  | 'Приостановлена'
  | 'Исполнена'
  | 'Закрыта';

export type TApp = {
  token: string,
  id: number,
  location: string,
  reason: string,
  position: string,
  description: string,
  department: string,
  confirmaccount: string,
  invacancy: string,
  pubvacancy: string,
  payment: number,
  numberofvacancies: number,
  whyisitneeded: string,
  project: string,
  education: string,
  basicskills: string,
  extraskills: string,
  numberofyears: string,
  requiredexperience: string,
  jobduties: string,
  schedule: string,
  occupation: string,
  probation: number,
  bonuses: string,
  complexity: number,
  priority: number,
  creationdate: string,
  begindate: string,
  hr: string,
  vacanciesnumber: number,
  hrpartner: string,
  currentstatus: TStatusApp,
  reasonofdenial: string,
  numberofdonevacancies: number,
  applicantsfio: string,
  interviewers: string,
  mentors: string,
  claimstatus: TStatusApp,
  autor: string,
  autorid: string,
  accountid: string,
  hrid: string,
  processid: string,
};
