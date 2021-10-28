import React from 'react';
import { observer } from 'mobx-react';
import application from 'stores/application';

import TableTabPanels from './TableTabPanels';
import Search from './Search';
import Tabs from './Tabs';
import classes from './Table.module.scss';

const TableApp: React.FC = observer(() => {
  const [value, setValue] = React.useState('myApplications');
  const shearchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    application.getSearch = e.currentTarget.value;
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.top_block}>
        <Search onChange={shearchHandler} />
      </div>
      <div className={classes.table_box}>
        <Tabs value={value} setValue={setValue}/>
        <TableTabPanels value={value} applications={application.getData} />
      </div>
    </div>
  );
});

export default TableApp;
