import dataJson from "../../../data.json";

/* The generateStaticParams 
function runs at build time before the corresponding 
Layouts or Pages are generated. It will not be 
called again during revalidation (ISR). */

export async function generateStaticParams() {
  return dataJson.blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const content = dataJson.blogs.find(
    (data) => data.slug === params.slug
  )?.content;
  return <div>{content}</div>;
}
