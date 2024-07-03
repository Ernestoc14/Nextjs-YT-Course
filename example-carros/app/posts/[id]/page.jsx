
async function loadPost(post_id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
  const data = await res.json()
  return data
}

async function Page({ params }) {
  const post = await loadPost(params.id)
  console.log(params.id, post)
  return (<div>
    <h1>{post.id}. {post.title}</h1>
    <p>{post.body}</p>
  </div>
  )
}

export default Page
