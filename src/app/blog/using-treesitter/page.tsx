import BlogSubMenu from "@/components/BlogSubmenu";
import SideNavLayout from "@/components/layouts/sidenav-layout";
import getPosts from "@/utils/getPosts";

const posts = getPosts();

export default function UsingTreeSitterPage() {
  return (
    <SideNavLayout
      selected="blog"
      subMenus={{
        blog: <BlogSubMenu posts={posts} />,
      }}
    >
      <div className="prose prose-invert">
        <h1>Using TreeSitter to get rid of NodeSASS</h1>
        <img src="/filegraph.png" alt="Filegraph" />
        <div className="flex flex-row w-full">
          <img className="flex-1 w-1/2" src="/confusingcode.png" alt="" />
          <img className="flex-1 w-1/2" src="/visible-confusion.png" alt="" />
        </div>
      </div>
    </SideNavLayout>
  );
}
