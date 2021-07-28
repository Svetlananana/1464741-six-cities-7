import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {logout} from '../../store/api-actions';

export function UserAuthorized({email, avatarUrl, handleLogouteClick}) {

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

UserAuthorized.propTypes = {
  email: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  handleLogouteClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({userData: {email, avatarUrl}}) => ({
  email,
  avatarUrl,
});

const mapDispatchToProps = {
  handleLogouteClick: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthorized);
