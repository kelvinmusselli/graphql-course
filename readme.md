Fragmentos

// são usados para não ter duplicidade de código nas querys

fragment post on Post {
  id
  title
  body
  createdAt
  title
}

query Post($postId: ID!) {
  post(id: $postId) {
    ...post
  }
}
