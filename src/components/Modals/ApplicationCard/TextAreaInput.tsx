import React from 'react';
import { Col, TextAreaField } from '@ff/ui-kit';

import style from './ApplicationCard.module.scss';

type TextAreaInputProps = {
  label: string;
  placeholder: string;
  xs: number;
  handleChangeTextarea: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  dataName: string;
  value?: string;
};

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  label,
  placeholder,
  xs,
  handleChangeTextarea,
  dataName,
  value,
}) => (
  <Col xs={xs} className={style.col}>
    <TextAreaField
      className={style.input}
      style={{ margin: '5px' }}
      fullWidth
      name="large"
      label={label}
      placeholder={placeholder}
      onChange={handleChangeTextarea}
      data-name={dataName}
      value={value}
    />
  </Col>
);
export default TextAreaInput;
