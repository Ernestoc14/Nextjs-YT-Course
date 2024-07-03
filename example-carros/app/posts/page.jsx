import Button from "@/components/Button"

async function getPosts() {
  const post = await fetch("https://jsonplaceholder.typicode.com/posts/")
  const data = post.json()
  await new Promise ((resolve) => setTimeout(resolve, 3000))
  return data
}

export default async function PostsPage() {
  const data = await getPosts()

  return (
    <div className="p-10 flex flex-col gap-10">
      {data.slice(0,3).map((post) => (
        <div key={post.id}>
          <h1>{post.id}-{post.title}</h1>
          <p>{post.body}</p>
          <Button post={post}/>
        </div>
      ))}
    </div>)
}