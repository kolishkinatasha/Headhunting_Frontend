import React from 'react';
import { Button, Typography } from '@ff/ui-kit';
import ApplicationCard from 'components/Modals/ApplicationCard';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import ModalWrapper from 'components/layouts/Modal/ModalWrapper';

import classes from './NavBar.module.scss';
import profile from '../../stores/profile';

const allowRoles = ['Администратор', 'Главный рекрутер'];

const button = (
  <Button variant="outline" type="primary" className={classes.buttons} style={{ width: '185px' }}>
    Подать заявку
  </Button>
);

const NavBar: React.FC = observer(() => (
  <div className={classes.box}>
    <Typography.Title level={2} node="div" className={classes.title}>
      Заявки на подбор персонала
    </Typography.Title>
    <div className={classes.buttonBox}>
      <ModalWrapper button={button}>
        <ApplicationCard />
      </ModalWrapper>
      { allowRoles.includes(profile.role)
      && (
      <NavLink to="/services/work/applications/register">
        <Button variant="fill" type="primary" className={classes.buttons}>
          Реестор всех заявок
        </Button>
      </NavLink>
      )}
    </div>
  </div>
));

export default NavBar;
