import React from "react";
import Link from "gatsby-link";
import moment from "moment";

const IndexPage = ({ data }) => (
  <div className="main">
    {data.allMarkdownRemark.edges.map((post, i) => (
      <PostCard key={i} i={i} frontmatter={post.node.frontmatter} />
    ))}
  </div>
);

const PostCard = ({ i, frontmatter }) => (
  <div
    className="postcard"
    style={{ position: "relative", animationDelay: "" + i * 0.1 + "s" }}
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
    {frontmatter.type == "Coming Soon" ? (
      <h3
        style={{
          position: "absolute",
          top: 0,
          transform: "rotate(-45deg) translate(-125px,-50px)",
          backgroundColor: "gold",
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px)",
          width: "100%",
          textAlign: "center"
        }}
      >
        Coming Soon
      </h3>
    ) : null}
    <img
      style={{ opacity: frontmatter.type == "Post" ? "1" : "1" }}
      src={frontmatter.indexImage.childImageSharp.resolutions.src}
    />
    <div className="postcardheader" style={{ textAlign: "center" }}>
      <Link to={frontmatter.path}>
        <h3 style={{ margin: "15px", padding: "10px" }}>{frontmatter.title}</h3>
      </Link>
      <h3 style={{ margin: "15px", padding: "10px" }}>
        {moment(frontmatter.date).format("DD MMMM YYYY")}
      </h3>
    </div>
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      filter: {
        frontmatter: { type: { ne: "Resume" }, published: { eq: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            published
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
