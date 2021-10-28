import { Icon } from '@ff/ui-kit';
import React from 'react';

import classes from './EmptyTableMessage.module.scss';

const EmptyTableMessage: React.FC = () => (
  <div className={classes.wrapper}>
    <Icon className={classes.icon} name="emoji_dizzy" />
    <div className={classes.text}>Результаты не найдены </div>
  </div>
);
export default EmptyTableMessage;
