import { Button } from '@ff/ui-kit';
import ModalWrapper from 'components/layouts/Modal/ModalWrapper';
import DetailedApplicationCard from 'components/Modals/DetailedApplicationCard';
import applications from 'stores/application/applications';

import ApplicationCard from '../../Modals/ApplicationCard';

const detalApp = (id: number) => {
  const button = (
    <Button
      onClick={() => applications.setId(id)}
      style={{ color: '#0057ff', background: '#fff' }}
      
    >
      Перейти
    </Button>
  );
  return (
    <ModalWrapper button={button}>
      <DetailedApplicationCard />
    </ModalWrapper>
  );
};
const changeApp = (id: number) => {
  const button = (
    <Button
      onClick={() => applications.setId(id)}
      style={{ color: '#0057ff', background: '#fff', left: '25%' }}
      startIcon='pencil_square'
      variant="text"
    ></Button>
  );
  return (
    <ModalWrapper button={button}>
      <ApplicationCard id={id} />
    </ModalWrapper>
  );
};
const columns = [
  {
    title: 'Редактировать',
    key: 0,
    dataKey: 'id',
    render: changeApp,
  },
  {
    title: 'Подробнее',
    key: 1,
    dataKey: 'id',
    render: detalApp,
  },
  {
    title: '№',
    key: 2,
    dataKey: 'id',
  },
  {
    title: 'Дата заявки',
    key: 3,
    dataKey: 'creationdate',
  },
  {
    title: 'Должность',
    key: 4,
    dataKey: 'pubvacancy',
  },
  {
    title: 'Статус',
    key: 5,
    dataKey: 'claimstatus',
  },
  {
    title: 'Автор',
    key: 6,
    dataKey: 'autor',
    render: (author: string) => (
      <span style={{ color: '#6fafb7' }}>{author}</span>
    ),
  },
];
export default columns;
