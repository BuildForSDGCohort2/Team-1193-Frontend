import React from "react";
import "./homepage.scss";

import Directory from "../../components/directory/directory";
import Features from "../../components/features/features";

const Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
      <Features />
    </div>
  );
};

export default Homepage;
