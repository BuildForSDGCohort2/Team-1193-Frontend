import React, { Component } from "react";
import "./signup-page.scss";
import FormInput from "../../components/form-input/form-input";
import { Link } from "react-router-dom";
import CustomButton from "../../components/custom-button/custom-button";

class SignupPage extends Component {
  constructor() {
    super();
    this.state = { name: "", email: "", password: "" };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ name: "", email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2>Create your new account today</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="name"
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.name}
            label="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.password}
            label="Password"
            required
          />
          <CustomButton id="btn">Sign up</CustomButton>
          <div className="link-container">
            Already have an account?{" "}
            <Link to="/signin" className="link">
              Signin here
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupPage;
