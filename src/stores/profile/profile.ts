import { RoleType } from 'models/Users';
import { makeAutoObservable } from 'mobx';

class Profile {
  userId = 1;

  role: RoleType = 'Администратор';

  name = 'Иванов Сергей Авторович';
  //Аккаунтович
  constructor() {
    makeAutoObservable(this);
  }
}

export default new Profile();
