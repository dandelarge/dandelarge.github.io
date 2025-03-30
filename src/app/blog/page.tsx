import BlogSubMenu from "@/components/BlogSubmenu";
import PreviewImg from "@/components/PreviewImg";
import SideNavLayout from "@/components/layouts/sidenav-layout";
import getPosts from "@/utils/getPosts";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Blog() {
  const sources = getPosts();
  return (
    <SideNavLayout
      selected="blog"
      subMenus={{
        blog: <BlogSubMenu posts={sources} />,
      }}
    >
      <div className="prose dark:prose-invert">
        {sources.map((post, index) => (
          <>
            <MDXRemote
              source={post.content}
              components={{
                Img: PreviewImg,
              }}
            />
            {index < sources.length - 1 && <hr className="my-20" />}
          </>
        ))}
      </div>
    </SideNavLayout>
  );
}
