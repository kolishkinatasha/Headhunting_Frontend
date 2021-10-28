import data from '../../../stores/application/data';

type IOptionLocation = {
  key: number;
  value: string;
  label: string | 'Все локации';
};

const optionsLocation: IOptionLocation[] = data.map((entity) => ({
  key: entity.id + 1,
  value: entity.location,
  label: entity.location,
})).filter((v, i, a) => a.findIndex((t) => (t.value === v.value)) === i);

export default optionsLocation;
