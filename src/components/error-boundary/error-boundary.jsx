import React, { Component } from "react";
import "./error-boundary.scss";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error-image-overlay">
          <div className="error-image"></div>
          <div className="error-image-text">Sorry, the page is damaged.</div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
