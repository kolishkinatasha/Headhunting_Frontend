import React from 'react';
import { Table, TabPanel, TabPanels } from '@ff/ui-kit';
import { TApp } from 'models/Application';

import classes from './TableTabPanels.module.scss';
import EmptyTableMessage from '../EmptyTableMessage/EmptyTableMessage';
import columns from './columns';

type PropsType = {
  value: string;
  applications: TApp[] | [];
};

const TableTabPanels: React.FC<PropsType> = ({ value, applications }) => (
  <TabPanels className={classes.wrapper} value={value}>
    <TabPanel value="myApplications">
      <Table
        columns={columns}
        rows={applications}
        emptyTableMessage={<EmptyTableMessage />}
        dense
      />
    </TabPanel>
    <TabPanel value="IHavePending">IHavePending</TabPanel>
    <TabPanel value="Executed">Executed</TabPanel>
  </TabPanels>
);
export default TableTabPanels;
