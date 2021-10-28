import { Badge } from '@ff/ui-kit';
import React from 'react';

import classes from './Tabs.module.scss';
import tabsCollection from './tabsCollection';
import applications from '../../../stores/application';

type PropsType = {
  setValue: (tabValue: string) => void;
  value: string;
};

const Tabs: React.FC<PropsType> = ({ value, setValue }) => (
  <div className={classes.tab_box}>
    {tabsCollection.map((tab) => (
      <div
        role="tab"
        key={tab.id}
        onClick={() => setValue(tab.value)}
        onKeyDown={() => setValue(tab.value)}
        className={
            tab.value === value
              ? `${classes.tab} ${classes.active}`
              : classes.tab
          }
      >
        <Badge displayValue={applications.getData.length} />
        <div className={classes.tab_name}> {tab.name}</div>
      </div>
    ))}
  </div>
);
export default Tabs;
