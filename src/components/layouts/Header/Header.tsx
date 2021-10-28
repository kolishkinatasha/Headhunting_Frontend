import React from 'react';
import { UserProfile, UserAvatar } from '@ff/ui-kit';
import { NavLink } from 'react-router-dom';
import Profile from 'stores/profile';

import classes from './Header.module.scss';
import fnsLogo from './assets/logo.png';
import ava from './assets/ava.jpg';
import Container from '../Container';

const Header: React.FC = () => (
  <>
    <header className={classes.header}>
      <Container>
        <div className={classes.topBlockWrapper}>
          <NavLink to="/" exact>
            <img className={classes.logo} src={fnsLogo} alt="logo" />
          </NavLink>
          <div className={classes.menu}>
            {/* <NavLink to="/services" className={classes.item}>
              Наши сервисы
            </NavLink> */}
            {/* <NavLink to="#" className={classes.item}>
              Бухгалтерия
            </NavLink>
            <NavLink to="#" className={classes.item}>
              Some
            </NavLink> */}
          </div>
          <UserProfile
            className={classes.headerUser}
            userName={Profile.name}
            userDetails={Profile.role}
          >
            <UserAvatar size="small" bordered imageUrl={ava} />
          </UserProfile>
        </div>
      </Container>
    </header>
  </>
);

export default Header;
