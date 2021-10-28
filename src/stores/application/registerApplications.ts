import _ from 'lodash';
import { computed, makeAutoObservable } from 'mobx';

import data from './data';

class RegisterApplications {
  constructor() {
    makeAutoObservable(this);
  }

  @computed sortData(fields: string[], orders: ('desc' | 'asc')[]) {
    return _.orderBy(this.data, fields, orders);
  }

  // Вынести отдельно блок HR
  data = data;
}

export default new RegisterApplications();
