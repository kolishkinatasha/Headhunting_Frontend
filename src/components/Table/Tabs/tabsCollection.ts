type TabName = 'Мои заявки' | 'У меня на рассмотрении' | 'Исполненные';
type TabValue = 'myApplications' | 'IHavePending' | 'Executed';

type TabsType = {
  id: number;
  name: TabName;
  value: TabValue;
};

const tabsCollection: TabsType[] = [
  {
    id: 1,
    name: 'Мои заявки',
    value: 'myApplications',
  },
  {
    id: 2,
    name: 'У меня на рассмотрении',
    value: 'IHavePending',
  },
  {
    id: 3,
    name: 'Исполненные',
    value: 'Executed',
  },
];
export default tabsCollection;
