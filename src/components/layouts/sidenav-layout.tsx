import { siGithub } from "simple-icons";
import { ModeToggle } from "../ModeToggle";
import { MainMenuProps } from "@/types/types";
import Menu from "./menu";
import { SlidingMenu } from "./sliding-menu";

interface Props extends MainMenuProps {
  children: React.ReactNode;
}

export default function SideNavLayout({ children, selected, subMenus }: Props) {
  return (
    <>
      <header>
        <nav className="p-4 justify-between bg-theme-accent bg-opacity-5 flex items-center">
          <div className="md:hidden">
            <SlidingMenu selected={selected} subMenus={subMenus} />
          </div>
          <a href="/" className="flex gap-2 items-center">
            <img src="/chilli.svg" alt="logo" className="w10 h-10" />
            <h3 className="font-logo text-xl">SalsaScript.dev</h3>
          </a>
          <div className="flex gap-4">
            <ModeToggle />
            <a href="https://github.com/dandelarge/dandelarge.github.io">
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
        <div className="hidden md:flex">
          <Menu selected={selected} subMenus={subMenus} />
        </div>
        <main className="md:flex md:flex-grow p-14 flex-col overflow-y-scroll overflow-hidden h-screen items-center">
          <div className="max-w-screen-md ">{children}</div>
        </main>
      </div>
    </>
  );
}
