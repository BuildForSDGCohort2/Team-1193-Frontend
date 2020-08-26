import React, { Component } from "react";
import "./signup-page.scss";
import FormInput from "../../components/form-input/form-input";
import { Link } from "react-router-dom";
import CustomButton from "../../components/custom-button/custom-button";

class SignupPage extends Component {
  constructor() {
    super();
    this.state = { name: "", email: "", password: "", confirmPassword: "" };
  }

  handleSubmit = (event) => {
    const { password, confirmPassword } = this.state;
    event.preventDefault();
    this.setState({ name: "", email: "", password: "", confirmPassword: "" });
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>Sign up with your email and password</h2>
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

export default SignupPage;
