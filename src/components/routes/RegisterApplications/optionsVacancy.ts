import data from '../../../stores/application/data';

type IOptionVacancy = {
  key: number;
  value: string;
  label: string | 'Все вакансии';
};

const optionsVacancy: IOptionVacancy[] = data.map((entity) => ({
  key: entity.id + 1,
  value: entity.invacancy,
  label: entity.invacancy,
})).filter((v, i, a) => a.findIndex((t) => (t.value === v.value)) === i);

export default optionsVacancy;
