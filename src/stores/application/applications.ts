import { TApp } from 'models/Application';
import { makeAutoObservable } from 'mobx';
import lowercaseSearch from 'utils/lowercaseSearch';
import _ from 'lodash';

import data from './data';
import profile from '../profile';

class Application {
  constructor() {
    makeAutoObservable(this);
  }

  data: TApp[] = this.readData();

  filterData: TApp[] = this.data;

  id: number | undefined = 1;

  get filteredData() {
    return this.data.filter((item) => item.id === this.id);
  }

  readData(): TApp[] {
    const dataJson = localStorage.getItem('data');
    if (dataJson) this.data = JSON.parse(dataJson);
    else this.data = data;
    return this.data;
  }

  rewriteData() {
    const jsonData = JSON.stringify(this.data);
    localStorage.setItem('data', jsonData);
  }

  setId(id: number) {
    this.id = id;
  }

  updateData() {
    this.filterData = this.data;
  }

  setData(newApp: TApp) {
    this.data.push(newApp);
    this.updateData();
    this.rewriteData();
  }

  updateApp(newApplicationData: TApp) {
    const idApp = newApplicationData.id;
    const index = _.findIndex(this.filterData, ['id', idApp]);
    this.filterData[index] = newApplicationData;
    this.data = this.filterData;
    this.rewriteData();
  }

  get getData(): TApp[] | [] {
    switch (profile.role) {
      case 'Администратор':
      case 'Главный рекрутер':
        return this.filterData;
      case 'Аккаунт':
        return this.filterData.filter((item) => item.confirmaccount === profile.name);
      case 'Рекрутер':
        return this.filterData.filter((item) => item.hrpartner === profile.name);
      default:
        return this.filterData.filter((item) => item.autor === profile.name);
    }
  }

  set getSelected(value: string | string[]) {
    if (value !== 'Все заявки') {
      this.filterData = this.data.filter((app) => app.currentstatus === value);
    } else {
      this.filterData = this.data;
    }
  }

  set getSearch(value: string) {
    this.filterData = this.data.filter(
      (el) => lowercaseSearch(el.currentstatus, value)
        || lowercaseSearch(el.autor, value)
        || lowercaseSearch(el.position, value)
        || lowercaseSearch(el.creationdate, value),
    );
  }
}
export default new Application();
