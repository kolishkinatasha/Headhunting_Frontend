type TextAreas = {
  payment: string;
  whyisitneeded: string;
  numberofvacancies: string;
  project: string;
  extraskills: string;
  requiredexperience: string;
  jobduties: string;
  probation: string;
  complexity: string;
  priority: string;
  hr: string;
  hrpartner: string;
  numberofdonevacancies: string;
  applicantsfio: string;
  interviewers: string;
  mentors: string;
};

type ApplicationCard = {
  textAreas: TextAreas;
  selects: Array<string>;
};
export default ApplicationCard;
