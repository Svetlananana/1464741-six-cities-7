import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import UserAuthorized from '../user-authorized/user-authorized';
import UserNotAuthorized from '../user-not-authorized/user-not-authorized';
import {getAuthorizationStatus} from '../../store/user/selectors';

export default function Header() {

  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <NavLink className="header__logo-link" to={AppRoute.MAIN}
              isActive={(match, {pathname}) => !match ? false : pathname === AppRoute.MAIN}
              activeClassName="header__logo-link--active"
            >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </NavLink>
          </div>
          <nav className="header__nav">
            {authorizationStatus === AuthorizationStatus.AUTH ? <UserAuthorized /> : <UserNotAuthorized />}
          </nav>
        </div>
      </div>
    </header>
  );
}
