import BlogSubMenu from "@/components/BlogSubmenu";
import PreviewImg from "@/components/PreviewImg";
import SideNavLayout from "@/components/layouts/sidenav-layout";
import getPosts from "@/utils/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = getPosts();
  const currentPost = posts.find((post) => post.slug === slug);
  const compiled = await serialize(currentPost?.content || "");

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
      <div className="prose dark:prose-invert">{article}</div>
    </SideNavLayout>
  );
}
