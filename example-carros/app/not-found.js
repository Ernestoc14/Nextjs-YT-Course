import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Not Found</h1>
      <p>This page was not found</p>
      <Link href="/">Go back to the homepage</Link>
    </>
  );
}
