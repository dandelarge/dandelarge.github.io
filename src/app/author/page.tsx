"use client";

import React from "react";
import Header from "@/components/Header";
import ArticlePreview from "@/components/article-preview";
import SideNavLayout from "@/components/layouts/sidenav-layout";
import { SocialIcon } from "react-social-icons";

export default function Author() {
  const [iconColors, setIconColors] = React.useState({
    linkedin: {
      bgColor: "white",
      fgColor: "black",
    },
    github: {
      bgColor: "white",
      fgColor: "black",
    },
  });

  const handleMouseEnter = (key: string) => {
    setIconColors((prevState) => ({
      ...prevState,
      [key]: {
        bgColor: "black",
        fgColor: "white",
      },
    }));
  };

  const handleMouseLeave = (key: string) => {
    setIconColors((prevState) => ({
      ...prevState,
      [key]: {
        bgColor: "white",
        fgColor: "black",
      },
    }));
  };

  return (
    <SideNavLayout selected="author">
      <div>
        <Header>About the Author</Header>
        <div className="flex gap-8 items-center">
          <a href="http://linkedin.com/in/denialarauz">
            <img
              src="/author.jpeg"
              alt="Daniel's Portrait"
              className="w-32 h-32 rounded-full border-white border-opacity-40 border-4 hover:border-opacity-100"
            />
          </a>
          <div>
            <h3 className="text-2xl font-bold text-white text-opacity-75 mb-4">
              I am{" "}
              <span className="text-white text-opacity-100">Daniel Arauz.</span>
            </h3>
            <p className="text-white text-opacity-75">
              I&apos;ve been developing stuff since 2012.
            </p>
            <div className="flex py-6 gap-4">
              <SocialIcon
                style={{ height: 42, width: 42 }}
                url="https://linkedin.com/in/denialarauz"
                bgColor={iconColors.linkedin.bgColor}
                fgColor={iconColors.linkedin.fgColor}
                onMouseEnter={() => handleMouseEnter("linkedin")}
                onMouseLeave={() => handleMouseLeave("linkedin")}
              />
              <SocialIcon
                style={{ height: 42, width: 42 }}
                url="https://github.com/dandelarge"
                bgColor={iconColors.github.bgColor}
                fgColor={iconColors.github.fgColor}
                onMouseEnter={() => handleMouseEnter("github")}
                onMouseLeave={() => handleMouseLeave("github")}
              />
            </div>
          </div>
        </div>
        <div className="mt-40">
          <Header>Stuff I worked on</Header>
          <div className="flex flex-col lg:grid grid-cols-2 gap-4">
            <ArticlePreview
              title="Using TreeSitter to get rid of NodeSASS"
              excerpt="The bundle size of our app was unnecessarily big. NodeSASS was causing most of it. We decided to replace it with JSS. To track the size of the project and the progress, I made a custom analyzing tool that builds a graph of dependencies."
              image="/treesitter.png"
              date="3/30/2025"
              slug="using-treesitter"
            />
            <ArticlePreview
              title="Formalizing loose processes."
              excerpt="Unwritten rules are those things that everybody follows but nobody talks out loud. Sometimes you break one of those unwritten rules and somebody comes to you and says: 'Hey, we have a better way of doing that'."
              image="/treesitter.png"
              date="3/30/2025"
              slug="formalizing-loose-processes"
            />
          </div>
        </div>
      </div>
    </SideNavLayout>
  );
}
