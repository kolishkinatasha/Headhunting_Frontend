import React from 'react';
import { Col, Typography } from '@ff/ui-kit';

import classes from './DetailedApplicationCard.module.scss';

type TextBlockProps = {
  title?: string;
  xs: number;
};
const TextBlock: React.FC<TextBlockProps> = ({ title, xs, children }) => (
  <>
    <Col xs={xs} className={classes.col}>
      <Typography node="div" className={classes.input_title} bold>
        {title}
      </Typography>
      {children}
    </Col>
  </>
);
export default TextBlock;
