const postsQuery = /* GraphQL */ `
  query GET_POSTS {
    posts: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          objectID: id
          fields {
            slug
          }
          frontmatter {
            category
            date_timestamp: date
            date(locale: "en-us", formatString: "MMMM DD [of] YYYYY")
            title
            description
            background
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }
`

const flatten = (array) =>
  array.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest
  }))

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    settings: {
      attributesToSnippet: ['excerpt:20']
    },
    matchFields: ['title', 'description', 'excerpt', 'category', 'background']
  }
]

module.exports = queries
