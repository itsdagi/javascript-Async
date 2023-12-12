// const getPosts = () =
//   fetch('https://jsonplaceholder.typicode.com/posts/')
//   .then(response => response.json())
//   .then(posts => {
//     posts.forEach(post => console.log(post.title))
//   })
//   .catch(error => console.log(error))
// }
// getPosts()

async function getPosts(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const posts = await response.json()
  posts.forEach(post => console.log(post.body))
}

getPosts();