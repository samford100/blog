import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

// import "./index.css";

import "./grid.css";
import "./post.css";

const Header = () => <div>asdf </div>;
// gatsby build
// scp -r ./public sam@138.197.87.105:/home/sam
// sudo rsync -av /home/sam/public/ /var/www/html/

const Footer = () => (
  <div className="footer">
    <a href="mailto:sford100@gatech.edu">
      <i className="fas fa-2x fa-at" />
    </a>
    <a href="https://www.linkedin.com/in/sam-ford-100/" target="_blank">
      <i className="fab fa-2x fa-linkedin-in" />
    </a>
    <a href="https://github.com/samford100/" target="_blank">
      <i className="fab fa-2x fa-github" />
    </a>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div className="container">
    <Helmet
      title="Sam Ford's Blog"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    >
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.4/js/all.js"
      />
    </Helmet>
    <div className="nav">
      <h3 id="about" style={{ lineHeight: "1.5em" }}>
        <Link
          to="/about"
          style={{
            color: "black",
            textDecoration: "none",
            borderBottom: "3px solid black"
          }}
        >
          about
        </Link>
      </h3>

      <h1>
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: "none",
            borderBottom: "3px solid black"
          }}
        >
          // sam-ford \\
        </Link>
      </h1>

      <h3 id="projects">
        <Link
          to="/projects"
          style={{
            color: "black",
            textDecoration: "none",
            borderBottom: "3px solid black"
          }}
        >
          projects
        </Link>
      </h3>
    </div>
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
