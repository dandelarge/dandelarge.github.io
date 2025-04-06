import BlogSubMenu from "@/components/BlogSubmenu";
import PreviewImg from "@/components/PreviewImg";
import SideNavLayout from "@/components/layouts/sidenav-layout";
import getPosts from "@/utils/getPosts";
import { MDXRemote } from "next-mdx-remote/rsc";

export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = getPosts();
  const currentPost = posts.find((post) => post.slug === slug);

  const article = await MDXRemote({
    source: currentPost?.content || "",
    components: {
      Img: PreviewImg,
    },
  });
  return (
    <SideNavLayout
      selected="blog"
      subMenus={{
        blog: <BlogSubMenu posts={posts} selected={currentPost?.slug} />,
      }}
    >
      <div className="prose prose-invert prose-h1:text-4xl prose-h2:text-3xl lg:prose-h1:text-7xl">
        {article}
      </div>
    </SideNavLayout>
  );
}
