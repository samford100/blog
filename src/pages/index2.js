import React from "react";
import Link from "gatsby-link";
import moment from "moment";

const IndexPage = ({ data }) => (
  <div
    style={{
      margin: "0 auto",
      maxWidth: 960,
      marginTop: "1.45rem",

      padding: "0px 1.0875rem 1.45rem",
      paddingTop: 0
    }}
  >
    <ul className="postcards">
      {data.allMarkdownRemark.edges.map((post, i) => (
        <PostCard key={i} i={i} frontmatter={post.node.frontmatter} />
      ))}
    </ul>
  </div>
);

// <h3>{frontmatter.type}!</h3>

const PostCard = ({ i, frontmatter }) => (
  <li
    className="postcard"
    style={{ textAlign: "center" }}
    style={{ animationDelay: "" + i * 0.1 + "s" }}
  >
    <div className="foldtl" style={{ zIndex: 10 }}>
      <div
        style={{
          transform: "rotate(-45deg) translate(-50px, -5px)",
          position: "absolute",
          fontFamily: "sans-serif",
          zIndex: 60,
          width: "200px"
        }}
      />
    </div>
    <div className="postcontent">
      <img src={frontmatter.indexImage.childImageSharp.resolutions.src} />
      <div>
        <Link to={frontmatter.path}>
          <h2 style={{ padding: "10px" }}>{frontmatter.title}</h2>
        </Link>
        <h2 style={{ padding: "10px" }}>
          {moment(frontmatter.date).format("DD MMMM YYYY")}
        </h2>
      </div>
    </div>
  </li>
);

export const pageQuery = graphql`
  query Index2Query {
    allMarkdownRemark(
      limit: 10
      filter: { frontmatter: { type: { eq: "Post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            path
            date
            type
            tags
            date
            indexImage {
              childImageSharp {
                resolutions(width: 1000) {
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
    }
  }
`;

export default IndexPage;
