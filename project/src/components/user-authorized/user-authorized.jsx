import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {logout} from '../../store/api-actions';
import {getUserEmail, getUserAvatarUrl} from '../../store/user/selectors';

export default function UserAuthorized() {

  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  const avatarUrl = useSelector(getUserAvatarUrl);

  function handleLogouteClick() {
    dispatch(logout());
  }

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES} >
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img src={avatarUrl} alt="User avatar" style={{borderRadius: '50%'}}/>
          </div>
          <span className="header__user-name user__name">{email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link"
          to={AppRoute.MAIN}
        >
          <span onClick={handleLogouteClick} className="header__signout">
          Sign out
          </span>
        </Link>
      </li>
    </ul>
  );
}
