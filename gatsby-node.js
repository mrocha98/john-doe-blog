const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages'
    })

    // Creates new query'able field with name of 'slug'
    const SLUG_TITLE_INDEX = 12
    const title = slug.slice(SLUG_TITLE_INDEX)
    createNodeField({
      node,
      name: 'slug',
      value: `/${title}`
    })
  }
}

// To create the posts pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(/* GraphQL */ `
    query GET_SLUGS {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMarkdownRemark.edges.forEach(
      ({
        node: {
          fields: { slug }
        }
      }) => {
        createPage({
          path: slug,
          component: path.resolve(`./src/templates/blog-post.tsx`),
          context: {
            slug
          }
        })
      }
    )
  })
}
