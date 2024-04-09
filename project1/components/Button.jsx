"use client"
import Link from 'next/link'

function Button({post}) {
  return (
    <Link href={`/posts/${post.id}`}>
      Click me!
    </Link>
  )
}

export default Button