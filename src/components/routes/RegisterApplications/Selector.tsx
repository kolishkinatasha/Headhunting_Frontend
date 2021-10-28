import React from 'react';
import { Select } from '@ff/ui-kit';

import optionsVacancy from './optionsVacancy';
import optionsLocation from './optionsLocation';

type PropsType = {
  onChange?: (e: string | string[]) => void | undefined;
  placeholder?: string;
  data?: string;
};

const Selector: React.FC<PropsType> = ({ onChange, placeholder = 'Все значения', data }) => {
  const options = () => {
    if (data === 'invacancy') {
      return optionsVacancy;
    } if (data === 'location') {
      return optionsLocation;
    } return [];
  };

  return (
    <Select
      options={options()}
      style={{ width: '300px', marginLeft: '15px' }}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
// (
//   <>
//     <Select
//       options={optionsVacancy}
//       style={{width: '300px'}}
//       placeholder={placeholder}
//       onChange={onChange}
//     />
//     {/* <Select
//       options={optionsLocation}
//       style={{width: '300px'}}
//       placeholder={placeholder}
//       onChange={onChange}
//     /> */}
//   </>
// );
export default Selector;
