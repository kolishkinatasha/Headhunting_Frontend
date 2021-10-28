import { observer } from 'mobx-react';
import React from 'react';
import Container from 'components/layouts/Container';
import { NavLink } from 'react-router-dom';
import { Message } from '@ff/ui-kit';

import classes from './Work.module.scss';

const Work: React.FC = observer(() => (
  <Container>
    <div className={classes.wrapper}>
      <NavLink className={classes.link} to="/services/work/applications">
        <Message type="primary" startIcon="person">
          Заявки на подбор персонала
        </Message>
      </NavLink>
      <NavLink className={classes.link} to="#">
        <Message type="primary" startIcon="emoji_smile">
          Сервис
        </Message>
      </NavLink>
      <NavLink className={classes.link} to="#">
        <Message type="primary" startIcon="emoji_smile">
          Сервис
        </Message>
      </NavLink>
    </div>
  </Container>
));

export default Work;
