import Link from "next/link";

export default function DefaultNavbar() {
   /* 
    useSelectedLayoutSegments is a Client Component hook 
    that lets you read the active route segments below
    the Layout it is called from. 
    */
  return (
    <div>
      <span>Blog Navbar</span>
      <Link href="/blog">Blog</Link>
      <Link href="/">Home</Link>
    </div>
  );
}
