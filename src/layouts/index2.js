import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.css";

const Header2 = () => (
  <div
    style={{
      // background: "rgba(50, 100, 200, 1)",
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
        color: "black"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: "none"
          }}
        >
          \\ sam-ford //
        </Link>
        <div style={{ float: "right", fontSize: "30px", lineHeight: "1.75em" }}>
          &nbsp;
          <Link
            to="/"
            style={{
              color: "black",
              textDecoration: "none"
            }}
          >
            blog
          </Link>
          &nbsp;--&nbsp;
          <Link
            to="/about"
            style={{
              color: "black",
              textDecoration: "none"
            }}
          >
            about
          </Link>
          &nbsp;--&nbsp;
          <Link
            to="/projects"
            style={{
              color: "black",
              textDecoration: "none"
            }}
          >
            projects
          </Link>
          &nbsp;
        </div>
      </h1>
    </div>
  </div>
);

const Header = () => (
  <div
    style={{
      // background: "rgba(50, 100, 200, 1)",
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
        color: "black",
        display: "flex",
        width: "100%",
        paddingBottom: "0px",
        marginTop: "1.45rem"
      }}
    >
      <h3 style={{ marginRight: "auto", lineHeight: "1.5em" }}>
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

      <h1 style={{ textAlign: "center", lineHeight: "0.5em" }}>
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

      <h3 style={{ marginLeft: "auto", lineHeight: "1.5em" }}>
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
  </div>
);
// gatsby build
// scp -r ./public sam@138.197.87.105:/home/sam
// sudo rsync -av /home/sam/public/ /var/www/html/

const Footer = () => (
  <div style={{ textAlign: "center", color: "black" }}>
    sford100 at gatech dot edu
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Sam Ford's Blog"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div
    // style={{
    //   margin: "0 auto",
    //   maxWidth: 960,
    //   padding: "0px 1.0875rem 1.45rem",
    //   paddingTop: 0
    // }}
    >
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
