import React from 'react';
import { Col, Select, Typography } from '@ff/ui-kit';

import style from './ApplicationCard.module.scss';

type SelectInputProps = {
  title: string;
  placeholder: string;
  option: any;
  multiple?: boolean;
  xs: number;
  handleChangeSelect: any;
  handleOpenSelect: any;
  value?: string | string[];
};

const SelectInput: React.FC<SelectInputProps> = ({
  title,
  option,
  placeholder,
  multiple,
  xs,
  handleChangeSelect,
  handleOpenSelect,
  value,
}) => (
  <Col xs={xs} className={style.col}>
    <Typography node="div" bold className={style.input_title}>
      {title}
    </Typography>
    <Select
      className={style.input}
      fullWidth
      options={option}
      placeholder={placeholder}
      multiple={multiple}
      showSearch
      onChange={handleChangeSelect}
      onOpen={handleOpenSelect}
      value={value}
    />
  </Col>
);
export default SelectInput;
