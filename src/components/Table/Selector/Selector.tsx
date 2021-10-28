import React from 'react';
import { Select } from '@ff/ui-kit';

import classes from './Selector.module.scss';
import options from './options';

type PropsType = {
  onChange: (e: string | string[]) => void | undefined;
};

const Selector: React.FC<PropsType> = ({ onChange }) => (
  <Select
    options={options}
    className={classes.sort}
    placeholder="Сортировка по статусу"
    onChange={onChange}
  />
);
export default Selector;
