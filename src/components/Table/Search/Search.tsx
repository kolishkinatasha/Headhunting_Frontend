import React from 'react';
import { TextField } from '@ff/ui-kit';

import classes from './Search.module.scss';

type PropsType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
};

const Search: React.FC<PropsType> = ({ onChange }) => (
  <div className={classes.search}>
    <TextField
      name="with-start-adornment"
      startAdornment="search"
      placeholder="Поиск"
      onChange={onChange}
      className={classes.search_field}
    />
  </div>
);
export default Search;
