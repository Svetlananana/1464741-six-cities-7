import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../../store/api-actions';
import {AppRoute} from '../../../const';
import {Link} from 'react-router-dom';
import Header from '../../header/header';
// import ErrorMessage from '../../error-message/error-message';
import Alert from '@material-ui/lab/Alert';


export function LoginScreen({activeCity, onSubmit, loginError}) {

  const loginRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
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
            {/* {loginError && <p>Что-то не так...{loginError}</p>} */}
            {loginError && <Alert severity="info">This is an info alert — check it out!</Alert>} {/* можно оставить пакетный алерт? */}
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

LoginScreen.propTypes = {
  activeCity: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loginError: PropTypes.string,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  loginError: state.loginError,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
