import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import Header from '../../header/header';
import {login} from '../../../store/api-actions';
import {getLoginError} from '../../../store/user/selectors';
import {getActiveCity} from '../../../store/main/selectors';
import {ErroreMessage, AppRoute} from '../../../const';

export default function LoginScreen() {

  const activeCity = useSelector(getActiveCity);
  const loginError = useSelector(getLoginError);
  const dispatch = useDispatch();

  const loginRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  }

  function handleEmailValidСhange(evt) {
    const email = evt.target.value;
    const regular = /.+@.+\..+/i;

    !regular.test(email)
      ? evt.target.setCustomValidity('Проверьте корректность почтового адреса')
      : evt.target.setCustomValidity('');
  }

  function handlePasswordValidChange(evt) {
    evt.target.value.trim().length === 0
      ? evt.target.setCustomValidity('Пароль не может состоять из пробелов')
      : evt.target.setCustomValidity('');
  }

  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            {loginError && <Alert severity="info">{ErroreMessage.LOGIN_ERROR}</Alert>}
            <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} onChange={handleEmailValidСhange} className="login__input form__input" type="email" name="email" placeholder="Email" required=""/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} onChange={handlePasswordValidChange} className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.MAIN}>
                <span>{activeCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

