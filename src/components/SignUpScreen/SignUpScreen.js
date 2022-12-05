import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import * as ROUTES from '../constants/routes';
import { withFirebase } from "../Firebase/context";

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  emailError: null,
  passwordError: null
}

class SignUpScreenBody extends Component {

  state = { ...INITIAL_STATE };

  onSubmit = event => {

    event.preventDefault();

    const { email, passwordOne } = this.state;

    if (this.validateFormFields()) {
      this.props.firebase
        .createUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          console.log(authUser);
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {
          alert(error);
        })
    };

  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  validateFormFields = () => {

    const { email, passwordOne, passwordTwo } = this.state;
    let emailError = null;
    let passwordError = null;

    if (email === '') {
      emailError = 'E-mail address is missing';
    }

    if (passwordOne !== passwordTwo || passwordOne === '' || passwordTwo === '') {
      passwordError = 'Please type in your password and confirm it';
    }

    this.setState({ emailError, passwordError });

    return (emailError || passwordError) ? false : true;

  }

  render() {

    const {
      email,
      passwordOne,
      passwordTwo,
      emailError,
      passwordError
    } = this.state;

    return (
      <div className="center">
        <div className="login">
          <div className="login__form">
            <nav className="login__nav">
              <NavLink exact to={ROUTES.SIGN_IN} activeClassName="login__nav-link--active" className="login__nav-link">Login</NavLink>
              <NavLink exact to={ROUTES.SIGN_UP} activeClassName="login__nav-link--active" className="login__nav-link">Sign up</NavLink>
            </nav>
            <div className="login__header-area">
              <h1 className="login__header login__header--big">Create new account</h1>
              <h2 className="login__header login__header--small">Only e-mail is needed</h2>
            </div>
            <form onSubmit={this.onSubmit} className="login__input-area">
              <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Your e-mail"
                class="login__input-login"
              />
              {emailError ? <span className="login__validation-msg">{emailError}</span> : null}
              <input
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="Your password"
                class="login__input-password"
              />
              <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm your password"
                class="login__input-password"
              />
              {passwordError ? <span className="login__validation-msg">{passwordError}</span> : null}
              <button className="login__button" type="submit">Create new account</button>
            </form>
          </div>
          <div className="login__hero-image" />
        </div>
      </div>
    );
  }
}

const SignUpScreen = withRouter(withFirebase(SignUpScreenBody));
export default SignUpScreen;
