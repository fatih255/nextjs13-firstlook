import DefaultTags from "@/app/DefaultTags";
import dataJson from "../../../data.json";

export default function Head({ params }: { params: { slug: string } }) {
  const title = dataJson.blogs.find((data) => data.slug === params.slug)?.title;

  return (
    <>
      <title>{title}</title>
      <DefaultTags />
    </>
  );
}
