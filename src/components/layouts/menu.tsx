import Li from "../Li";
import { MainMenuProps } from "@/types/types";

export default function Menu({ subMenus, selected }: MainMenuProps) {
  return (
    <div className="flex-col w-60 py-14">
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
  );
}
