import { observer } from 'mobx-react';
import React from 'react';
import Container from 'components/layouts/Container';
import { NavLink } from 'react-router-dom';

import classes from './Home.module.scss';

const Home: React.FC = observer(() => (
  <Container>
    <h1 className={classes.home_title}>Добро пожаловать!</h1>
    <div className={classes.home_title}>
      <h1 className={classes.home_title}>Предлагаем воспользоваться&nbsp;
        <NavLink to="/services" className={classes.item}>
          нашими сервисами
        </NavLink>
      </h1>
      {/* <NavLink to="/services" className={classes.item}>
            нашими сервисами
        </NavLink> */}
    </div>
  </Container>
));

export default Home;
