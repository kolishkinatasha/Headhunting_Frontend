import React, { useState, useCallback } from 'react';
import Loader from 'components/Loader';
import { Message, Typography, Button } from '@ff/ui-kit';
import Container from 'components/layouts/Container';

import data from '../../../stores/application/applications';
import classes from './RegisterApplications.module.scss';
import RegisterCard from '../../RegisterCard';
import Selector from './Selector';
import ScrollButton from '../../ScrollButton';
import { TApp } from '../../../models/Application';

const RegisterApplications: React.FC = () => {
  const [isLoading] = useState(false);
  const [value, setValue] = useState<TApp[]>(data.filterData);
  const [vacanciesFilter, setVacanciesFilter] = useState('');
  const [locationsFilter, setLocationsFilter] = useState('');

  const handleFilter = () => {
    setValue(value.filter((item) => item.invacancy === vacanciesFilter && item.location === locationsFilter));
  };
  const selectorHandlerVacancy = useCallback((e: string | string[]) => {
    setVacanciesFilter(e.toString());
  }, []);
  const selectorHandlerLocation = useCallback((e: string | string[]) => {
    setLocationsFilter(e.toString());
  }, []);

  if (isLoading) return <Loader />;

  return (
    <Container>
      <div className={classes.box}>
        <Typography.Title level={2} node="div" className={classes.title}>
          Общий реестр заявок
        </Typography.Title>
      </div>
      <div className={classes.wrapper} id="wrapper">
        <div className={classes.filter}>
          <Selector onChange={selectorHandlerVacancy} placeholder="Выберите вакансию" data="invacancy" />
          <Selector onChange={selectorHandlerLocation} placeholder="Выберите город" data="location" />
          <Button
            variant="outline"
            type="primary"
            htmlType="button"
            startIcon="filter"
            className={classes.filter_btn}
            onClick={() => { handleFilter(); }}
          > Отфильтровать
          </Button>
          <Button
            variant="outline"
            className={classes.filter_btn}
            onClick={() => { setValue(data.filterData); }}
          > Сбросить фильтр
          </Button>
        </div>
        <div className={classes.cards}>
          {value.length ? value.map((entity) => (
            <RegisterCard
              key={entity.id}
              {...entity}
            />
          )) : (
            <Message startIcon="bell_fill" type="danger" className={classes.message}>
              К сожалению, нет подходящих заявок
            </Message>
          ) }
        </div>
        <ScrollButton />
      </div>
    </Container>
  );
};

export default RegisterApplications;
