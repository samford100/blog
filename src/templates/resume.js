import React from "react";
import Helmet from "react-helmet";

import "../layouts/resume.css";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  //same as const post = data.markdownRemark
  return (
    <div className="resume" style={{}}>
      <div
        style={{ paddingTop: "0px" }}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
}

// find markdown file in out filesystem that has the same path
// and return the html and frontmatter
export const resumeQuery = graphql`
  query Resume {
    markdownRemark(frontmatter: { path: { eq: "/about" } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`;
