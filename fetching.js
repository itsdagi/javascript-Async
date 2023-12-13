async function getPosts(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const posts = await response.json()
  posts.forEach(post => console.log(post.body))
}

getPosts();