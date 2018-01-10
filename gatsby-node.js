const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators; // from api
  const postTemplate = path.resolve("src/templates/post.js");
  const resumeTemplate = path.resolve("src/templates/resume.js");

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              type
              published
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }
    // no errors
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.type == "Post") {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate
        });
      } else if (node.frontmatter.type == "Resume") {
        createPage({
          path: node.frontmatter.path,
          component: resumeTemplate
        });
      }
    });
  });
};
