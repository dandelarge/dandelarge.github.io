import { readdirSync, readFileSync } from "fs";

export default function getPosts() {
  const posts = readdirSync("src/app/blog/entries");
  return posts
    .map((post) => {
      const content = readFileSync(`src/app/blog/entries/${post}`, "utf-8");
      const title = content.match(/#\s(.*)/);
      const dateWithTimeString = post.split("__")[0];
      const slug = post.split("__")[1].split(".")[0];
      const dateString = dateWithTimeString.split("_")[0];
      const timeString = dateWithTimeString.split("_")[1];
      const [year, month, day] = dateString.split("-");
      const [hour, minute] = timeString.split("-");
      const image = content.match(/\<img src="(.*)" alt="(.*)"\ \/\>/);
      const imageSrc = image ? image[1] : "/placeholder.jpg";
      const excerpt = content.match(/\w.*\n/g);

      if (title) {
        const date = new Date(
          parseInt(year),
          parseInt(month) - 1,
          parseInt(day),
          parseInt(hour),
          parseInt(minute),
        );
        return {
          title: title[1],
          date: date.toLocaleDateString(),
          image: imageSrc,
          excerpt: excerpt ? excerpt[1] : "",
          content,
          slug,
        };
      }

      return {
        title: "",
        date: "",
        image: "/placeholder.jpg",
        excerpt: "",
        content: "",
        slug: "",
      };
    })
    .reverse();
}
