import React from 'react';
import { Row, Typography } from '@ff/ui-kit';
import { observer } from 'mobx-react';

import classes from './Modal.module.scss';

type ModalBlockContentProps = {
  title: string;
};

const ModalBlockContent: React.FC<ModalBlockContentProps> = observer(
  ({ title, children }) => (
    <div className={classes.block}>
      <Typography.Title level={3} className={classes.title}>
        {title}
      </Typography.Title>
      <Row className={classes.block_content}>{children}</Row>
    </div>
  ),
);
export default ModalBlockContent;
