import { makeAutoObservable } from 'mobx';

class Users {
  constructor() {
    makeAutoObservable(this);
  }

  users = [
    {
      name: 'Петров Сергей Иванович',
      role: 'Автор заявки',
      position: 'Бухгалтер',
    },
    {
      name: 'Круглов Афанасий Aккаунтович',
      role: 'Аккаунт',
      position: 'Бухгалтер',
    },
  ];
}
export default new Users();
