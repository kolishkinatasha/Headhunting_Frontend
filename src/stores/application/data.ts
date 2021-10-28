import { TApp } from 'models/Application';

const data: TApp[] = [
  {
    token: '',
    id: 1,
    location: 'Москва',
    reason: 'Новый проект',
    position: 'Разработчик React',
    description: 'Удаленно',
    department: 'Департамент управления проектами',
    confirmaccount: 'Иванов Сергей Аккаунтович',
    invacancy: 'Разработчик Go',
    pubvacancy: 'Разработчик Go',
    payment: 60000,
    numberofvacancies: 2,
    whyisitneeded: 'Доп текст по проекту',
    project: 'HH',
    education: 'Высшее',
    basicskills: 'Javascript',
    extraskills: 'Дополнительные навыки не указаны',
    numberofyears: '1-3',
    requiredexperience: 'Опыт разработки SPA',
    jobduties: 'Красить кнопки',
    schedule: '5/2',
    occupation: 'Полная',
    probation: 3,
    bonuses: 'Да',
    complexity: 1,
    priority: 1,
    creationdate: '22.10.2021',
    begindate: '23.10.2021',
    hr: 'Иванов Иван HRович',
    vacanciesnumber: 0,
    hrpartner: 'Иванов Иван Партнерович',
    currentstatus: 'На рассмотрении',
    reasonofdenial: '',
    numberofdonevacancies: 2,
    applicantsfio: 'Иванов Иван Заявович',
    interviewers: 'Иванов Иван Интервьюерович',
    mentors: 'Иванов Иван Менторович',
    claimstatus: 'На рассмотрении',
    autor: 'Иванов Иван Авторович',
    autorid: 'qweqwe',
    accountid: 'qweqweqwe',
    hrid: 'qwe',
    processid: 'asdasd',
  },
  {
    token: '',
    id: 2,
    location: 'Питер',
    reason: 'Новый проект',
    position: 'Разработчик React',
    description: 'Гибридный',
    department: 'Департамент управления',
    confirmaccount: 'Иванов Петр Аккаунтович',
    invacancy: 'Разработчик React',
    pubvacancy: 'Разработчик React',
    payment: 60000,
    numberofvacancies: 3,
    whyisitneeded: 'Доп текст по проекту',
    project: 'HH',
    education: 'Высшее',
    basicskills: 'Javascript',
    extraskills: 'Доп навыки тут',
    numberofyears: '1-3',
    requiredexperience: 'Опыт разработки SPA',
    jobduties: 'Красить кнопки',
    schedule: '5/2',
    occupation: 'Полная',
    probation: 3,
    bonuses: 'Да',
    complexity: 1,
    priority: 1,
    creationdate: '15.10.2021',
    begindate: '16.10.2021',
    hr: 'Сидоров Иван HRович',
    vacanciesnumber: 0,
    hrpartner: 'Иванов Иван HRпартнерович',
    currentstatus: 'Черновик',
    reasonofdenial: '',
    numberofdonevacancies: 2,
    applicantsfio: 'Иванов Иван Заявович',
    interviewers: 'Иванов Иван Интервьюерович',
    mentors: 'Иванов Иван Менторович',
    claimstatus: 'Черновик',
    autor: 'Иванов Дмитрий Авторович',
    autorid: 'qweqwe',
    accountid: 'qweqweqwe',
    hrid: 'qwe',
    processid: 'asdasd',
  },
  {
    token: '',
    id: 3,
    location: 'Екатеринбург',
    reason: 'Новый проект',
    position: 'Разработчик React',
    description: 'В офисе',
    department: 'Департамент управления',
    confirmaccount: 'Петров Дмитрий Аккаунтович',
    invacancy: 'Разработчик React',
    pubvacancy: 'Разработчик React',
    payment: 60000,
    numberofvacancies: 4,
    whyisitneeded: 'Доп текст по проекту',
    project: 'HH',
    education: 'Высшее',
    basicskills: 'Javascript',
    extraskills: 'Дополнительные навыки не указаны',
    numberofyears: '1-3',
    requiredexperience: 'Опыт разработки SPA',
    jobduties: 'Красить кнопки',
    schedule: '5/2',
    occupation: 'Полная',
    probation: 3,
    bonuses: 'Да',
    complexity: 1,
    priority: 1,
    creationdate: '19.10.2021',
    begindate: '20.10.2021',
    hr: 'Петров Иван HRович',
    vacanciesnumber: 0,
    hrpartner: 'Иванов Иван Партнерович',
    currentstatus: 'Приостановлена',
    reasonofdenial: '',
    numberofdonevacancies: 2,
    applicantsfio: 'Иванов Иван Заявович',
    interviewers: 'Иванов Иван Интервьюерович',
    mentors: 'Иванов Иван Менторович',
    claimstatus: 'Приостановлена',
    autor: 'Петров Иван Авторович',
    autorid: 'qweqwe',
    accountid: 'qweqweqwe',
    hrid: 'qwe',
    processid: 'asdasd',
  },
  {
    token: '',
    id: 4,
    location: 'Уфа',
    reason: 'Новый проект',
    position: 'Разработчик React',
    description: 'Гибридный',
    department: 'Департамент управления',
    confirmaccount: 'Иванов Иван Сергеевич',
    invacancy: 'Разработчик React',
    pubvacancy: 'Разработчик React',
    payment: 60000,
    numberofvacancies: 4,
    whyisitneeded: 'Доп текст по проекту',
    project: 'HH',
    education: 'Высшее',
    basicskills: 'Javascript',
    extraskills: 'Дополнительные навыки не указаны',
    numberofyears: '1-3',
    requiredexperience: 'Опыт разработки SPA',
    jobduties: 'Красить кнопки',
    schedule: '5/2',
    occupation: 'Полная',
    probation: 3,
    bonuses: 'Да',
    complexity: 1,
    priority: 1,
    creationdate: '5.10.2021',
    begindate: '6.10.2021',
    hr: 'Вольнов Иван HRович',
    vacanciesnumber: 1,
    hrpartner: 'Иванов Иван HRпартнерович',
    currentstatus: 'Закрыта',
    reasonofdenial: '',
    numberofdonevacancies: 2,
    applicantsfio: 'Иванов Иван Заявович',
    interviewers: 'Иванов Иван Интервьюерович',
    mentors: 'Иванов Иван Менторович',
    claimstatus: 'Закрыта',
    autor: 'Иванов Дмитрий Авторович',
    autorid: 'qweqwe',
    accountid: 'qweqweqwe',
    hrid: 'qwe',
    processid: 'asdasd',
  },
  {
    token: '',
    id: 5,
    location: 'Питер',
    reason: 'Новый проект',
    position: 'Разработчик PHP',
    description: 'Удаленно',
    department: 'Департамент управления',
    confirmaccount: 'Иванов Иван Сергеевич',
    invacancy: 'Разработчик PHP',
    pubvacancy: 'Разработчик PHP',
    payment: 60000,
    numberofvacancies: 4,
    whyisitneeded: 'Доп текст по проекту',
    project: 'HH',
    education: 'Высшее',
    basicskills: 'Javascript',
    extraskills: 'Дополнительные навыки не указаны',
    numberofyears: '1-3',
    requiredexperience: 'Опыт разработки SPA',
    jobduties: 'Красить кнопки',
    schedule: '5/2',
    occupation: 'Полная',
    probation: 3,
    bonuses: 'Да',
    complexity: 1,
    priority: 1,
    creationdate: '22.10.2021',
    begindate: '23.10.2021',
    hr: 'Иванов Иван HRович',
    vacanciesnumber: 1,
    hrpartner: 'Иванов Иван HRпартнерович',
    currentstatus: 'На рассмотрении',
    reasonofdenial: '',
    numberofdonevacancies: 2,
    applicantsfio: 'Иванов Иван Заявович',
    interviewers: 'Иванов Иван Интервьюерович',
    mentors: 'Иванов Иван Менторович',
    claimstatus: 'На рассмотрении',
    autor: 'Иванов Олег Авторович',
    autorid: 'qweqwe',
    accountid: 'qweqweqwe',
    hrid: 'qwe',
    processid: 'asdasd',
  },
  {
    token: '',
    id: 6,
    location: 'Питер',
    reason: 'Новый проект',
    position: 'Разработчик VUE',
    description: 'Удаленно',
    department: 'Департамент управления',
    confirmaccount: 'Иванов Иван Аккаунтович',
    invacancy: 'Разработчик VUE',
    pubvacancy: 'Разработчик VUE',
    payment: 60000,
    numberofvacancies: 4,
    whyisitneeded: 'Доп текст по проекту',
    project: 'HH',
    education: 'Высшее',
    basicskills: 'Javascript',
    extraskills: 'Дополнительные навыки не указаны',
    numberofyears: '1-3',
    requiredexperience: 'Опыт разработки SPA',
    jobduties: 'Красить кнопки',
    schedule: '5/2',
    occupation: 'Полная',
    probation: 3,
    bonuses: 'Да',
    complexity: 1,
    priority: 1,
    creationdate: '22.10.2021',
    begindate: '23.10.2021',
    hr: 'Иванов Иван HRович',
    vacanciesnumber: 1,
    hrpartner: 'Иванов Иван HRпартнерович',
    currentstatus: 'На рассмотрении',
    reasonofdenial: '',
    numberofdonevacancies: 2,
    applicantsfio: 'Иванов Иван Заявович',
    interviewers: 'Иванов Иван Интервьюерович',
    mentors: 'Иванов Иван Менторович',
    claimstatus: 'На рассмотрении',
    autor: 'Иванов Иван Авторович',
    autorid: 'qweqwe',
    accountid: 'qweqweqwe',
    hrid: 'qwe',
    processid: 'asdasd',
  },
  {
    token: '',
    id: 7,
    location: 'Питер',
    reason: 'Новый проект',
    position: 'Разработчик VUE',
    description: 'Удаленно',
    department: 'Департамент управления',
    confirmaccount: 'Иванов Иван Аккаунтович',
    invacancy: 'Разработчик VUE',
    pubvacancy: 'Разработчик VUE',
    payment: 60000,
    numberofvacancies: 4,
    whyisitneeded: 'Доп текст по проекту',
    project: 'HH',
    education: 'Высшее',
    basicskills: 'Javascript',
    extraskills: 'Дополнительные навыки не указаны',
    numberofyears: '1-3',
    requiredexperience: 'Опыт разработки SPA',
    jobduties: 'Красить кнопки',
    schedule: '5/2',
    occupation: 'Полная',
    probation: 3,
    bonuses: 'Да',
    complexity: 1,
    priority: 1,
    creationdate: '22.10.2021',
    begindate: '23.10.2021',
    hr: 'Иванов Иван HRович',
    vacanciesnumber: 1,
    hrpartner: 'Иванов Иван HRпартнерович',
    currentstatus: 'На рассмотрении',
    reasonofdenial: '',
    numberofdonevacancies: 2,
    applicantsfio: 'Иванов Иван Заявович',
    interviewers: 'Иванов Иван Интервьюерович',
    mentors: 'Иванов Иван Менторович',
    claimstatus: 'На рассмотрении',
    autor: 'Иванов Иван Авторович',
    autorid: 'qweqwe',
    accountid: 'qweqweqwe',
    hrid: 'qwe',
    processid: 'asdasd',
  },
  {
    token: '',
    id: 8,
    location: 'Питер',
    reason: 'Новый проект',
    position: 'Разработчик VUE',
    description: 'Удаленно',
    department: 'Департамент управления',
    confirmaccount: 'Иванов Иван Аккаунтович',
    invacancy: 'Разработчик VUE',
    pubvacancy: 'Разработчик VUE',
    payment: 60000,
    numberofvacancies: 4,
    whyisitneeded: 'Доп текст по проекту',
    project: 'HH',
    education: 'Высшее',
    basicskills: 'Javascript',
    extraskills: 'Дополнительные навыки не указаны',
    numberofyears: '1-3',
    requiredexperience: 'Опыт разработки SPA',
    jobduties: 'Красить кнопки',
    schedule: '5/2',
    occupation: 'Полная',
    probation: 3,
    bonuses: 'Да',
    complexity: 1,
    priority: 1,
    creationdate: '22.10.2021',
    begindate: '23.10.2021',
    hr: 'Иванов Иван HRович',
    vacanciesnumber: 1,
    hrpartner: 'Иванов Иван HRпартнерович',
    currentstatus: 'На рассмотрении',
    reasonofdenial: '',
    numberofdonevacancies: 2,
    applicantsfio: 'Иванов Иван Заявович',
    interviewers: 'Иванов Иван Интервьюерович',
    mentors: 'Иванов Иван Менторович',
    claimstatus: 'На рассмотрении',
    autor: 'Иванов Иван Авторович',
    autorid: 'qweqwe',
    accountid: 'qweqweqwe',
    hrid: 'qwe',
    processid: 'asdasd',
  },
  {
    token: '',
    id: 9,
    location: 'Питер',
    reason: 'Новый проект',
    position: 'Разработчик VUE',
    description: 'Удаленно',
    department: 'Департамент управления',
    confirmaccount: 'Иванов Иван Аккаунтович',
    invacancy: 'Разработчик VUE',
    pubvacancy: 'Разработчик VUE',
    payment: 60000,
    numberofvacancies: 4,
    whyisitneeded: 'Доп текст по проекту',
    project: 'HH',
    education: 'Высшее',
    basicskills: 'Javascript',
    extraskills: 'Дополнительные навыки не указаны',
    numberofyears: '1-3',
    requiredexperience: 'Опыт разработки SPA',
    jobduties: 'Красить кнопки',
    schedule: '5/2',
    occupation: 'Полная',
    probation: 3,
    bonuses: 'Да',
    complexity: 1,
    priority: 1,
    creationdate: '22.10.2021',
    begindate: '23.10.2021',
    hr: 'Иванов Иван HRович',
    vacanciesnumber: 1,
    hrpartner: 'Иванов Иван HRпартнерович',
    currentstatus: 'На рассмотрении',
    reasonofdenial: '',
    numberofdonevacancies: 2,
    applicantsfio: 'Иванов Иван Заявович',
    interviewers: 'Иванов Иван Интервьюерович',
    mentors: 'Иванов Иван Менторович',
    claimstatus: 'На рассмотрении',
    autor: 'Иванов Иван Авторович',
    autorid: 'qweqwe',
    accountid: 'qweqweqwe',
    hrid: 'qwe',
    processid: 'asdasd',
  },
  {
    token: '',
    id: 10,
    location: 'Питер',
    reason: 'Новый проект',
    position: 'Разработчик VUE',
    description: 'Удаленно',
    department: 'Департамент управления',
    confirmaccount: 'Иванов Иван Аккаунтович',
    invacancy: 'Разработчик VUE',
    pubvacancy: 'Разработчик VUE',
    payment: 60000,
    numberofvacancies: 4,
    whyisitneeded: 'Доп текст по проекту',
    project: 'HH',
    education: 'Высшее',
    basicskills: 'Javascript',
    extraskills: 'Дополнительные навыки не указаны',
    numberofyears: '1-3',
    requiredexperience: 'Опыт разработки SPA',
    jobduties: 'Красить кнопки',
    schedule: '5/2',
    occupation: 'Полная',
    probation: 3,
    bonuses: 'Да',
    complexity: 1,
    priority: 1,
    creationdate: '22.10.2021',
    begindate: '23.10.2021',
    hr: 'Иванов Иван HRович',
    vacanciesnumber: 1,
    hrpartner: 'Иванов Иван HRпартнерович',
    currentstatus: 'На рассмотрении',
    reasonofdenial: '',
    numberofdonevacancies: 2,
    applicantsfio: 'Иванов Иван Заявович',
    interviewers: 'Иванов Иван Интервьюерович',
    mentors: 'Иванов Иван Менторович',
    claimstatus: 'На рассмотрении',
    autor: 'Иванов Иван Авторович',
    autorid: 'qweqwe',
    accountid: 'qweqweqwe',
    hrid: 'qwe',
    processid: 'asdasd',
  },
];
export default data;