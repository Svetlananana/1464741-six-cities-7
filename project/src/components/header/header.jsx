import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../const';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoutes.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.LOGIN} >
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login">Sign in</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

// isActive={(match, {pathname}) => !match ? false : pathname === AppRoute.LOGIN}
//   {/* <header className="header">
// <div className="container">
//   <div className="header__wrapper">
//     <div className="header__left">
//       <Link className="header__logo-link header__logo-link--active" to="/">
//         <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
//       </Link>
//     </div>
//     <nav className="header__nav">
//       <ul className="header__nav-list">
//         <li className="header__nav-item user">
//           <Link className="header__nav-link header__nav-link--profile" to="/">
//             <div className="header__avatar-wrapper user__avatar-wrapper">
//             </div>
//             <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
//           </Link>
//         </li>
//         <li className="header__nav-item">
//           <Link className="header__nav-link" to="/">
//             <span className="header__signout">Sign out</span>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   </div>
// </div>
// </header> */}
