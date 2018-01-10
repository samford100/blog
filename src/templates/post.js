import React from "react";
import Helmet from "react-helmet";
import moment from "moment";

require(`katex/dist/katex.min.css`);

import "../layouts/prism.css";
import "../layouts/prism.js";

import "../layouts/post.css";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  //same as const post = data.markdownRemark

  return (
    <div
      style={{
        maxWidth: "980px",
        minWidth: "500px"
      }}
    >
      <div
        className="postpicdiv"
        style={{
          width: "100%",
          overflow: "hidden",
          // height: "500px",
          maxHeight: "500px",
          position: "relative"
        }}
      >
        <img
          style={{
            maxWidth: "100%"
          }}
          src={post.frontmatter.indexImage.childImageSharp.resolutions.src}
        />
      </div>

      <div
        style={{
          margin: "0 auto",
          maxWidth: "700px",
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0,
          fontSize: "18px",
          textAlign: "justify",
          lineHeight: "1.4em"
        }}
      >
        <div style={{ paddingTop: "20px" }}>
          <h1 style={{ marginBottom: "10px" }}>{post.frontmatter.title}</h1>
          <h2 style={{ marginBottom: "10px", color: "rgb(100,100,100)" }}>
            {post.frontmatter.subtitle}
          </h2>
          <p className="date" style={{ color: "rgb(100,100,100)" }}>
            {moment(post.frontmatter.date).format("DD MMMM YYYY")}
          </p>
        </div>
        <div
          className="postbody"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

// find markdown file in out filesystem that has the same path
// and return the html and frontmatter
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        subtitle
        date
        indexImage {
          childImageSharp {
            resolutions(width: 2000) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;
