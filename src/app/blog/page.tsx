import BlogSubMenu from "@/components/BlogSubmenu";
import PreviewImg from "@/components/PreviewImg";
import SideNavLayout from "@/components/layouts/sidenav-layout";
import getPosts from "@/utils/getPosts";

export default async function Blog() {
  const sources = getPosts();
  return (
    <SideNavLayout
      selected="blog"
      subMenus={{
        blog: <BlogSubMenu posts={sources} />,
      }}
    >
      <div className="prose prose-invert">
        <h1>Blog entries</h1>
        {sources.map((post) => (
          <div key={post.slug} className="mb-24 max-h-[800px] overflow-hidden">
            <h2 className="text-4xl font-bold">{post.title}</h2>
            <PreviewImg
              src={`${post.image}`}
              alt={post.title}
              styles={{
                maxHeight: "400px",
                overflow: "hidden",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <p>{post.excerpt}</p>
            <a
              href={`/blog/${post.slug}`}
              className="text-2xl flex gap-8 items-center"
            >
              Read more
              <img src="/arrow1.svg" alt="Read more" />
            </a>
          </div>
        ))}
      </div>
    </SideNavLayout>
  );
}
