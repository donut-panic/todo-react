import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import * as ROUTES from '../constants/routes';
import { withFirebase } from '../Firebase/context';

const INITIAL_STATE = {
  email: '',
  password: '',
  emailError: null,
  passwordError: null
}

class SignInScreenBody extends Component {

  state = {
    ...INITIAL_STATE
  }

  validateFormFields = () => {

    const { email, password } = this.state;

    let emailError = null;
    let passwordError = null;

    if (email === '') {
      emailError = 'E-mail address is missing';
    }

    if (password === '') {
      passwordError = 'Password is missing';
    }

    this.setState({ emailError, passwordError });

    return (emailError || passwordError) ? false : true;

  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = event => {

    event.preventDefault();

    const { email, password } = this.state;

    if (this.validateFormFields()) {
      this.props.firebase.signInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {

          let emailError = null;
          let passwordError = null;

          switch (error.code) {
            default:
            case '':
              alert('OK. This was unexpected...');
              break;
            case 'auth/wrong-password':
              passwordError = 'Invalid password';
              break;
            case 'auth/invalid-email':
              emailError = 'Invalid e-mail address';
              break;
            case 'auth/user-not-found':
              emailError = 'No user with this e-mail address';
              break;
          }

          this.setState({ emailError, passwordError });
        })
    }

  };


  render() {

    const { email, password, emailError, passwordError } = this.state;

    return (
      <div className="center">
        <div className="login">
          <div className="login__form">
            <nav className="login__nav">
              <NavLink exact to={ROUTES.SIGN_IN} activeClassName="login__nav-link--active" className="login__nav-link">Login</NavLink>
              <NavLink exact to={ROUTES.SIGN_UP} activeClassName="login__nav-link--active" className="login__nav-link">Sign up</NavLink>
            </nav>
            <div className="login__header-area">
              <h1 className="login__header login__header--big">Sign in</h1>
              <h2 className="login__header login__header--small">Just log in and start working</h2>
            </div>
            <form onSubmit={this.onSubmit} className="login__input-area">
              <input
                name="email"
                type="text"
                value={email}
                placeholder="Your email address"
                onChange={this.onChange}
                className="login__input-login"
              />
              {emailError ? <span className="login__validation-msg">{emailError}</span> : null}
              <input
                name="password"
                type="password"
                value={password}
                placeholder="Your password"
                onChange={this.onChange}
                className="login__input-password"
              />
              {passwordError ? <span className="login__validation-msg">{passwordError}</span> : null}
              <button className="login__button">Sign in</button>
            </form>
          </div>
          <div className="login__hero-image" />
        </div>
      </div>
    );
  }
}

const SignInScreen = withRouter(withFirebase(SignInScreenBody));

export default SignInScreen;
