import { TStatusApp } from 'models/Application';

type IOptionStatus = {
  key: number;
  value: string;
  label: TStatusApp | 'Все заявки';
};

const options: IOptionStatus[] = [
  { key: 1, value: 'Все заявки', label: 'Все заявки' },
  { key: 2, value: 'Закрыта', label: 'Закрыта' },
  { key: 3, value: 'Исполнена', label: 'Исполнена' },
  { key: 4, value: 'На исполнении', label: 'На исполнении' },
  { key: 5, value: 'На рассмотрении', label: 'На рассмотрении' },
  { key: 6, value: 'На согласовании', label: 'На согласовании' },
  { key: 7, value: 'Отклонена', label: 'Отклонена' },
  { key: 8, value: 'Приостановлена', label: 'Приостановлена' },
  {
    key: 9,
    value: 'Согласование с руководством',
    label: 'Согласование с руководством',
  },
  { key: 10, value: 'Черновик', label: 'Черновик' },
  { key: 11, value: 'На рассмотрении', label: 'На рассмотрении' },
];
export default options;
