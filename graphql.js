import gql from 'graphql-tag'
// Signup
export const SIGNUP_MUTATION = gql`
mutation SignupMutation($username: String!, $email: String!, $password: String!) {
createUser(
  username: $username,
  email: $email,
  password: $password
) {
  id
  username
  email
}
}
`
// Login
export const LOGIN_MUTATION = gql`mutation LoginMutation($email: String!, $password: String!) {
        login(
            email: $email,
            password: $password
        )
    }`

// Fetch all users
export const ALL_USERS_QUERY = gql`query AllUsersQuery {
  allUsers {
      id
      username
      email
  }
}`

// Get single user
export const USER_QUERY = gql`query UserQuery($id: Int!) {
  user(id: $id) {
      id
      username
      email
      posts {
          id
      }
  }
}`

// Add post
export const ADD_POST_MUTATION = gql`mutation AddPostMutation($title: String!, $content: String!) {
  addPost(
      title: $title,
      content: $content
  ) {
      id
      slug
      title
      content
      user {
          id
          username
          email
      }
  }
}`

// Fetch All posts
export const ALL_POSTS_QUERY = gql`query AllPostsQuery {
  allPosts {
      id
      title
      slug
      user {
          username
      }
  }
}`
// Fetch single post
export const POST_QUERY = gql`query PostQuery($slug: String!) {
  post(slug: $slug) {
      id
      title
      slug
      content
      user {
          id
          username
          email
      }
  }
}`
