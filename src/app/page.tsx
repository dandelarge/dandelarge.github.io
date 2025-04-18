import Header from "@/components/Header";
import ArticlePreview from "@/components/article-preview";
import SideNavLayout from "@/components/layouts/sidenav-layout";
import getPosts from "@/utils/getPosts";

export default function Home() {
  const articles = getPosts();

  return (
    <SideNavLayout selected="home">
      <Header> Latest Articles </Header>
      <div className="flex flex-wrap flex-row gap-4">
        {articles.map((article, index) => (
          <ArticlePreview
            key={index}
            title={article.title}
            date={article.date}
            excerpt={article.excerpt}
            image={article.image}
            slug={article.slug}
          />
        ))}
      </div>
    </SideNavLayout>
  );
}
