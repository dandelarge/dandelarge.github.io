import BlogSubMenu from "@/components/BlogSubmenu";
import PreviewImg from "@/components/PreviewImg";
import SideNavLayout from "@/components/layouts/sidenav-layout";
import getPosts from "@/utils/getPosts";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = getPosts();
  const currentPost = posts.find((post) => post.slug === slug);
  return (
    <SideNavLayout
      selected="blog"
      subMenus={{
        blog: <BlogSubMenu posts={posts} selected={currentPost?.slug} />,
      }}
    >
      <div className="prose dark:prose-invert">
        <MDXRemote
          source={currentPost?.content || ""}
          components={{
            Img: PreviewImg,
          }}
        />
      </div>
    </SideNavLayout>
  );
}
