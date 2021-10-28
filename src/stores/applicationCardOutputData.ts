import { makeAutoObservable } from 'mobx';
import { TApp } from 'models/Application';
import _ from 'lodash';

import applications from './application/applications';
import profile from './profile/profile';
import ApplicationCardInputData from './applicationCardInputData';
import Application from './application/applications';

class ApplicationCardOutputData {
  constructor() {
    makeAutoObservable(this);
  }

  newApplication: TApp = {
    token: '',
    id: 0,
    location: '',
    reason: '',
    position: '',
    description: '',
    department: '',
    confirmaccount: '',
    invacancy: '',
    pubvacancy: '',
    payment: 0,
    numberofvacancies: 0,
    whyisitneeded: '',
    project: '',
    education: '',
    basicskills: '',
    extraskills: '',
    numberofyears: '',
    requiredexperience: '',
    jobduties: '',
    schedule: '',
    occupation: '',
    probation: 0,
    bonuses: '',
    complexity: 0,
    priority: 0,
    creationdate: '',
    begindate: '',
    hr: '',
    vacanciesnumber: 0,
    hrpartner: '',
    currentstatus: 'На рассмотрении',
    reasonofdenial: '',
    numberofdonevacancies: 0,
    applicantsfio: '',
    interviewers: '',
    mentors: '',
    claimstatus: 'На рассмотрении',
    autor: '',
    autorid: '',
    accountid: '',
    hrid: '',
    processid: '',
  };

  setDataFromTextArea(key: string | undefined, items: string) {
    for (const appKey in this.newApplication) {
      // @ts-ignore
      if (key === appKey) this.newApplication[appKey] = items;
    }
  }

  setDataFromSelect(key: string | undefined, options: string) {
    let newData = '';
// v Не нужен будет если формировать объект заявки с указанием value селекта, а не label как сделано сейчас
    for (const appKeys in ApplicationCardInputData.selects) {
      if (appKeys === key) {
        // @ts-ignore
        for (const appKey in ApplicationCardInputData.selects[appKeys]) {
          // @ts-ignore
          if (ApplicationCardInputData.selects[appKeys][appKey].value === options) {
            // @ts-ignore
            newData = ApplicationCardInputData.selects[appKeys][appKey].label;
          }
          if (options.length > 1) {
            for (const item of options) {
              // @ts-ignore
              if (ApplicationCardInputData.selects[appKeys][appKey].value === item) {
                // @ts-ignore
                newData += `${ApplicationCardInputData.selects[appKeys][appKey].label}, `;
              }
            }
          }
        }
      }
    }
    for (const appKey in this.newApplication) {
      // @ts-ignore
      if (key === appKey) this.newApplication[appKey] = newData;
    }
  }

  setData(id?: number | undefined) {
    this.newApplication.id = id || applications.filterData.length + 1;
    this.newApplication.creationdate = new Date().toLocaleDateString();
    this.newApplication.autor = profile.name;
  }

  sendData(id?: number | undefined) {
    this.setData(id);
    Application.setData(_.cloneDeep(this.newApplication));
  }

  updateData(id: number | undefined) {
    this.setData(id);
    Application.updateApp(_.cloneDeep(this.newApplication));
  }
}
export default new ApplicationCardOutputData();
