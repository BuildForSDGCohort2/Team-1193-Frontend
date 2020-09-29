import React, { Component } from "react";
import "./signup-page.scss";
import FormInput from "../../components/form-input/form-input";
import { Link } from "react-router-dom";
import CustomButton from "../../components/custom-button/custom-button";
import { connect } from "react-redux";
import { emailSignUpStart } from "../../redux/user/user.actions";
import { ReactComponent as RegisterIcon } from "../../assets/icons/register.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class SignupPage extends Component {
  constructor() {
    super();
    this.state = { name: "", email: "", password: "", confirmPassword: "" };
  }

  passwordMatchError = () => {
    toast.error("Passwords don't match", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = this.state;
    const { emailSignUpStart } = this.props;
    const alert = this.props;
    if (password !== confirmPassword) {
      this.passwordMatchError();

      return;
    }

    emailSignUpStart(name, email, password);
    this.setState({ name: "", email: "", password: "", confirmPassword: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <div className="register-page-header">
          <h2>
            {" "}
            <RegisterIcon className="register-icon" />
            Sign up with your email and password
          </h2>
        </div>
        <div>
          <FormInput
            type="text"
            name="name"
            handleChange={this.handleChange}
            value={name}
            label="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={email}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={password}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            handleChange={this.handleChange}
            value={confirmPassword}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit" id="btn" onClick={this.handleSubmit}>
            Sign up
          </CustomButton>
          <div className="link-container">
            Already have an account?{" "}
            <Link to="/signin" className="link">
              Signin here
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailSignUpStart: (name, email, password) =>
    dispatch(emailSignUpStart({ name, email, password })),
});

export default connect(null, mapDispatchToProps)(SignupPage);
