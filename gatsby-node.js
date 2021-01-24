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
    query GET_POSTS {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              background
              category
              date(locale: "en-us", formatString: "MMMM DD [of] YYYY")
              description
              title
            }
            timeToRead
          }
        }
      }
    }
  `).then((result) => {
    const { edges: posts } = result.data.allMarkdownRemark

    posts.forEach(
      ({
        node: {
          fields: { slug }
        }
      }) => {
        createPage({
          path: slug,
          component: path.resolve(`./src/templates/blog-post.template.tsx`),
          context: {
            slug
          }
        })
      }
    )

    const postsPerPage = 5
    const totalPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: totalPages }).forEach((_, index) => {
      const IS_HOME_PAGE = index === 0
      const currentPage = index + 1
      const skip = index * postsPerPage

      createPage({
        path: IS_HOME_PAGE ? '/' : `/page/${index + 1}`,
        component: path.resolve('./src/templates/blog-list.template.tsx'),
        context: {
          limit: postsPerPage,
          skip,
          totalPages,
          currentPage
        }
      })
    })
  })
}
