interface Props {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

export default function ArticlePreview({ title, date, excerpt, slug }: Props) {
  return (
    <a className="flex max-w-screen-sm " href={`/blog/${slug}`}>
      <div className="group p-8 border-2 border-white border-opacity-50 rounded-3xl my-2 hover:bg-theme-highlight hover:text-black hover:text-opacity-90 flex flex-col justify-between">
        <div>
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="text-sm text-opacity-75 text-white group-hover:text-black group-hover:text-opacity-50 mb-4">
            {date}
          </p>
          <p className="text-white text-opacity-75 group-hover:text-black group-hover:text-opacity-75">
            {excerpt}
          </p>
        </div>
        <div className="flex justify-end justify-self-end">
          <img
            src="/arrow1.svg"
            alt="go to article"
            className="mt-4 group-hover:filter group-hover:invert"
          />
        </div>
      </div>
    </a>
  );
}
