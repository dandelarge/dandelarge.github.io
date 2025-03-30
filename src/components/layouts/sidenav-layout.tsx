import Li from "../Li";
import { siGithub } from "simple-icons";

interface Props {
  children: React.ReactNode;
  selected: string;
  subMenus?: {
    blog?: React.ReactNode;
    home?: React.ReactNode;
    author?: React.ReactNode;
  };
}

export default function SideNavLayout({ children, selected, subMenus }: Props) {
  console.log(siGithub.svg);
  return (
    <>
      <header>
        <nav className="p-4 justify-between bg-theme-accent bg-opacity-5 flex items-center">
          <a href="/" className="flex gap-2 items-center">
            <img src="/chilli.svg" alt="logo" className="w10 h-10" />
            <h3 className="font-logo text-xl">SalsaScript.dev</h3>
          </a>
          <div>
            <a
              className="text-white"
              href="https://github.com/dandelarge/dandelarge.github.io"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9"
                fill="white"
              >
                <title>GitHub</title>
                <path d={siGithub.path} />
              </svg>
            </a>
          </div>
        </nav>
      </header>
      <div className="flex min-h-screen">
        <div className="flex flex-col w-60 py-14">
          <ul>
            <Li path="/" selected={selected} id="home" label="Home">
              {subMenus?.home && subMenus.home}
            </Li>
            <Li path="/blog" selected={selected} id="blog" label="Blog">
              {subMenus?.blog && subMenus.blog}
            </Li>
            <Li path="/author" selected={selected} id="author" label="Author">
              {subMenus?.author && subMenus.author}
            </Li>
          </ul>
        </div>
        <main className="flex flex-grow p-14 flex-col overflow-y-scroll overflow-hidden h-screen items-center">
          <div className="max-w-screen-md">{children}</div>
        </main>
      </div>
    </>
  );
}
