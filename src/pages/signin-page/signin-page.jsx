import React, { Component } from "react";
import "./signin-page.scss";
import FormInput from "../../components/form-input/form-input";
import { Link } from "react-router-dom";
import CustomButton from "../../components/custom-button/custom-button";
import { connect } from "react-redux";
import { emailSignInStart } from "../../redux/user/user.actions";
import { ReactComponent as LoginIcon } from "../../assets/icons/login.svg";

class SigninPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <div className="login-page-header">
          <LoginIcon className="login-icon" />{" "}
          <h2>Sign in with your email and password</h2>
        </div>
        <div>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={email}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={password}
            label="password"
            required
          />
          <CustomButton type="submit" id="btn" onClick={this.handleSubmit}>
            Sign in
          </CustomButton>
          <div className="link-container">
            Don't have an account?{" "}
            <Link to="/signup" className="link">
              Register here
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SigninPage);
