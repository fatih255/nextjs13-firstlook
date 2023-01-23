import Link from "next/link";

export default function DefaultNavbar() {
  return (
    <div>
      <span>Default Navbar</span>
      <Link href="/blog">Blog</Link>
      <Link href="/">Home</Link>
    </div>
  );
}
