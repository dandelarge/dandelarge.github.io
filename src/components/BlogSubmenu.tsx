import getPosts from "@/utils/getPosts";

export default function BlogSubMenu({
  posts,
  selected,
}: {
  posts: ReturnType<typeof getPosts>;
  selected?: string;
}) {
  return (
    <ul className="max-h-[700px] overflow-scroll">
      {posts.map((post) => (
        <li
          key={post.slug}
          className="hover:bg-theme-highlight hover:bg-opacity-5 text-white text-opacity-80 text-sm font-light p-2 pl-6 overflow-hidden text-ellipsis whitespace-nowrap"
          style={{
            color: selected === post.slug ? "rgba(255, 255, 255, 1)" : "",
            fontWeight: selected === post.slug ? 500 : 300,
          }}
        >
          <a href={`/blog/${post.slug}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  );
}
