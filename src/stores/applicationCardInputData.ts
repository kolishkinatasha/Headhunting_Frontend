import { makeAutoObservable } from 'mobx';

import appType from '../models/ApplicationCard';

class ApplicationCardInputData {
  constructor() {
    makeAutoObservable(this);
  }

  selects = {
    pubvacancy: [
      { key: 1, value: 'first', label: 'web-разработчик React' },
      { key: 2, value: 'second', label: 'разработчик Golang' },
      { key: 3, value: 'third', label: 'разработчик Java' },
      { key: 4, value: 'fourth', label: 'разработчик PHP' },
    ],
    invacancy: [
      { key: 1, value: 'first', label: 'web-разработчик React' },
      { key: 2, value: 'second', label: 'разработчик Golang' },
      { key: 3, value: 'third', label: 'разработчик Java' },
      { key: 4, value: 'fourth', label: 'разработчик PHP' },
    ],
    reason: [
      { key: 1, value: 'first', label: 'Новый проект' },
      { key: 2, value: 'second', label: 'Расширение текущего проекта' },
    ],

    description: [
      { key: 1, value: 'first', label: 'Удаленно' },
      { key: 2, value: 'second', label: 'Гибридный' },
      { key: 3, value: 'third', label: 'В офисе' },
    ],

    location: [
      { key: 1, value: 'first', label: 'Москва' },
      { key: 2, value: 'second', label: 'Уфа' },
      { key: 3, value: 'third', label: 'Екатеринбург' },
    ],

    confirmaccount: [
      { key: 1, value: 'first', label: 'Иванов Иван Сергеевич' },
      { key: 2, value: 'second', label: 'Иванов Иван Иванович' },
      { key: 3, value: 'third', label: 'Иванов Сергей Аккаунтович' },
    ],

    department: [
      { key: 1, value: 'first', label: 'Департамент управления проектами' },
      { key: 2, value: 'second', label: 'Департамент клиентской поддержки' },
      { key: 3, value: 'third', label: 'Департамент HR' },
    ],

    education: [
      { key: 1, value: 'first', label: 'Высшее' },
      { key: 2, value: 'second', label: 'Высшее неполное' },
      { key: 3, value: 'third', label: 'Полное среднее' },
      { key: 4, value: 'fourth', label: 'Среднее профессиональное' },
    ],

    basicskills: [
      { key: 1, value: 'first', label: 'Навык 1' },
      { key: 2, value: 'second', label: 'Навык 2' },
      { key: 3, value: 'third', label: 'Навык 3' },
      { key: 4, value: 'fourth', label: 'Навык 4' },
    ],

    numberofyears: [
      { key: 1, value: 'first', label: '1-3' },
      { key: 2, value: 'second', label: '3-5' },
      { key: 3, value: 'third', label: '5-8' },
    ],

    schedule: [
      { key: 1, value: 'first', label: '5/2' },
      { key: 2, value: 'second', label: '2/2' },
      { key: 3, value: 'third', label: '1/3' },
    ],

    occupation: [
      { key: 1, value: 'first', label: 'Полная' },
      { key: 2, value: 'second', label: 'Частичная' },
    ],

    bonuses: [
      { key: 1, value: 'first', label: 'Да' },
      { key: 2, value: 'second', label: 'Нет' },
    ],

    currentstatus: [
      { key: 1, value: 'first', label: 'На рассмотрении' },
      { key: 2, value: 'second', label: 'Черновик' },
      { key: 3, value: 'third', label: 'На согласовании' },
      { key: 4, value: 'fourth', label: 'Отклонена' },
      { key: 5, value: 'fifth', label: 'На исполнении' },
      { key: 6, value: 'sixth', label: 'Согласование с руководством' },
      { key: 7, value: 'seventh', label: 'Приостановлена' },
      { key: 8, value: 'eighth', label: 'Исполнена' },
      { key: 9, value: 'ninth', label: 'Закрыта' },
    ],

    claimstatus: [
      { key: 1, value: 'first', label: 'На рассмотрении' },
      { key: 2, value: 'second', label: 'Черновик' },
      { key: 3, value: 'third', label: 'На согласовании' },
      { key: 4, value: 'fourth', label: 'Отклонена' },
      { key: 5, value: 'fifth', label: 'На исполнении' },
      { key: 6, value: 'sixth', label: 'Согласование с руководством' },
      { key: 7, value: 'seventh', label: 'Приостановлена' },
      { key: 8, value: 'eighth', label: 'Исполнена' },
      { key: 9, value: 'ninth', label: 'Закрыта' },
    ],
    // еще Номер вакансии из свободного бюджета
  };

  textAreas: appType['textAreas'] = {
    payment: 'Заработная плата',
    whyisitneeded: 'Обоснование',
    numberofvacancies: 'Количество вакансий',
    project: 'Проект',
    extraskills: 'Дополнительные навыки',
    requiredexperience: 'Требуемый опыт',
    jobduties: 'Должностные обязанности',
    probation: 'Испытательный срок',
    complexity: 'Сложность',
    priority: 'Приоритет',
    hr: 'Рекрутер',
    hrpartner: 'HR партнер',
    numberofdonevacancies: 'Колличество подобранных вакансий',
    applicantsfio: 'ФИО кандидатов',
    interviewers: 'Проводящие собеседования',
    mentors: 'Наставники',
  };
  // еще Дата выхода на работу
}
export default new ApplicationCardInputData();
