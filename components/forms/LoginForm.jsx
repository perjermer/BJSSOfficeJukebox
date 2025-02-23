import React from 'react';
import Joi from "joi-browser";
import Form from "../common/Form";
import user from "../../services/userService";

/**
 * @api {Class Component} <LoginForm/> forms/LoginForm.jsx
 * @apiName LoginForm
 * @apiGroup Components
 * @apiDescription  This component simple renders a login form. Extends from class Form.
 * @apiSuccessExample Login.js
 *    <LoginForm />
 */
class LoginForm extends Form {

  // schema used to validate user input
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  // handles what to perform when the user submits the login form
  doSubmit = async () => {
    try {
      const { data } = this.state;
      const response = await user.login(data);
      window.location = '/';
    }
    catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        errors.password = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="form">
        <div className="form-box">
          <div className="row">
            <img className="form-logo" src="../static/img/jukebox-logo-white.png" alt="" />
            {this.renderTitle("Log in to your office jukebox account")}
            <form className="form__login" onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username", "Username")}
              {this.renderInput("password", "Password", "Password", "password")}
              {this.renderButton("Log in to your jukebox account")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;