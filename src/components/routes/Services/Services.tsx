import { observer } from 'mobx-react';
import React from 'react';
import Container from 'components/layouts/Container';
import { NavLink } from 'react-router-dom';
import { Message } from '@ff/ui-kit';

import classes from './Services.module.scss';

const Services: React.FC = observer(() => (
  <Container>
    <div className={classes.wrapper}>
      <NavLink className={classes.link} to="/services/work">
        <Message type="primary" startIcon="person">
          Работа
        </Message>
      </NavLink>
      <NavLink className={classes.link} to="#">
        <Message type="primary" startIcon="mail">
          Заказы
        </Message>
      </NavLink>
      <NavLink className={classes.link} to="#">
        <Message type="primary" startIcon="emoji_smile">
          Другие
        </Message>
      </NavLink>
    </div>
  </Container>
));

export default Services;
