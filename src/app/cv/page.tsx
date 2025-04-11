"use client";

import { ModeToggle } from "@/components/ModeToggle";
import PreviewImg from "@/components/PreviewImg";
import { SiGithub, SiPhonepe } from "@icons-pack/react-simple-icons";
import { MailIcon, PhoneIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { SocialIcon } from "react-social-icons";

function Li({ children }: { children: React.ReactNode }) {
  return <li className="text-opacity-75 py-4">{children}</li>;
}

export default function CV() {
  const { theme } = useTheme();

  return (
    <div className="max-w-screen-md mx-auto">
      <nav className="p-16 flex justify-between">
        <div>
          <a href="/" className="hover:underline flex gap-4 items-center">
            <img
              src="/arrow1.svg"
              className="transform rotate-180 w-8 h-8 color-foreground"
              alt="Arrow"
            />
            <span className="text-xl text-opacity-75">Back to Home</span>
          </a>
        </div>
        <ModeToggle />
      </nav>
      <div className="p-16">
        <div className="flex gap-16 flex-col sm:flex-row">
          <a
            href="http://linkedin.com/in/denialarauz"
            className="flex-shrink-0"
          >
            <img
              src="/author.jpeg"
              alt="Daniel's Portrait"
              className="w-44 h-44 rounded-full border-white border-opacity-40 border-4 hover:border-opacity-100 "
            />
          </a>
          <div>
            <h3 className="text-xl font-semibold text-opacity-75 mb-2">
              Sergio Daniel Arauz Aceves
            </h3>
            <h4 className="text-opacity-75">Software Engineer</h4>
            <h5 className="text-opacity-75 hover:text-opacity-100 hover:underline">
              <a
                href="mailto:sdarauz@gmail.com"
                className="flex flex-row gap-2 py-2"
              >
                <MailIcon />
                sdarauz@gmail.com
              </a>
            </h5>
            <h5 className="text-opacity-75 hover:text-opacity-100 hover:underline">
              <a href="tel:+31634007731" className="flex flex-row gap-2">
                <PhoneIcon />
                +31 6 3400 7731
              </a>
            </h5>
            <div className="flex gap-2 my-2 hover:underline">
              <SocialIcon
                style={{ height: 24, width: 24 }}
                network="linkedin"
                className="hover:underline"
              />
              <a href="https://linkedin.com/in/denialarauz">
                <span>linkedin.com/in/denialarauz</span>
              </a>
            </div>
            <div className="flex gap-2">
              <SocialIcon style={{ height: 24, width: 24 }} network="github" />
              <a href="http://github.com/dandelarge">
                <span>github.com/dandelarge</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mb-8 mt-16 text-hand text-4xl font-hand tracking-wide">
          Trajectory
        </div>
        <PreviewImg
          src={theme === "light" ? "/trajectory.png" : "/trajectory-dark.png"}
          alt="Trajectory"
        />
        <div className="mt-16 mb-8 text-hand text-4xl font-hand tracking-wide">
          Portfolio
        </div>
        <h3 className="text-3xl font-hand text-opacity-75 mb-4 tracking-wide">
          Internal Tools (Dogfood)
        </h3>
        <p className="text-opacity-50 mb-8">
          Most of my success has been by &quot;scratching my own itch&quot;.
          <br />I make tools to make my life, and the life of other developers
          easier.
        </p>
        <ul className="list-disc list-inside text-opacity-75">
          <p className="text-2xl font-hand tracking-wide">I&apos;ve built:</p>
          <Li>
            <span className="font-bold">SCSS analyzer</span>
            <p>
              <a
                href="https://github.com/dandelarge/scss-analyser"
                className="flex gap-4 p-2 items-center group hover:underline"
              >
                <SiGithub className="group-hover:fill-background group-hover:bg-foreground rounded-full group-hover:border-foreground group-hover:border-2" />
                https://github.com/dandelarge/scss-analyser
              </a>
            </p>
            <p className="">
              We decided that we needed to get rid of Node-SASS and move fully
              to MUI. But the SCSS codebase was deeply embedded with the
              codebase.
              <br />
              To keep track of the progress, and to make sure we found all the
              bloat, I built a cli tool in Go that scans the codebase using
              Tree-sitter and it finds all the files that import SCSS files. It
              then makes a graph that can be visualized using the small
              webserver built into the tool.
            </p>
          </Li>
          <Li>
            <span className="font-bold">White Label preview tool</span>
            <p className="">
              A little web tool that allows the boarding managers to see the
              application with a white label theme creating a ticket for the dev
              team. It also automatically geneaates the code to apply the white
              label into the codebase.
            </p>
          </Li>
          <Li>
            <span className="font-bold">UI Translations tool</span>
            <p className="">
              This was a hackathon idea. Fuga has limmited resources.
              introducing new markets is a big deal, and an expensive part of
              the process is the tranlations for the UI. We used to pay an
              agency, but nowadays we have internal people who are native
              speakers of the language reviewing the translations. This tool
              picks the translations files from the codebase and finds missing
              words to translate. Then it makes uses google translate to suggest
              the translations. You can then either export a json file or
              trigger a PR with the changes
            </p>
          </Li>
          <Li>
            <span className="font-bold">
              Fuga&apos;s own Design System: &quot;FUI&quot;
            </span>
            <p className="">
              Fuga is a small company, but the different teams are very
              fast-paced. We often spent time building components that look
              different but serve the same function.
              <br />
              My team built the first versions of the design system, and then we
              iterated on it. Right now, around 90% of the Application&apos;s
              look and feel can be built using FUI. There&apos;s still a small
              reminder of deprecated code, but we&apos;re working on it.
            </p>
          </Li>
        </ul>
        <h3 className="text-3xl font-hand text-opacity-75 mb-4 mt-8 tracking-wide">
          Processes and Documentation
        </h3>
        <p className="text-opacity-50 mb-8">
          I&apos;ve identified an area that was lacking attention at Fuga and
          turned it into it&apos;s own project. So I ended up writting a lot of
          documentation.
        </p>
        <p className="text-2xl font-hand tracking-wide">I&apos;ve written:</p>
        <p className="text-opacity-50 mb-8"></p>
        <ul className="list-disc list-inside text-opacity-75">
          <Li>
            <span className="font-bold">PRDs</span>
          </Li>
          <Li>
            <span className="font-bold">Technical Documents</span>
          </Li>
          <Li>
            <span className="font-bold">Process Documentation</span>
          </Li>
          <Li>
            <span className="font-bold">Onboarding Documentation</span>
          </Li>
          <Li>
            <span className="font-bold">POCs</span>
          </Li>
        </ul>
      </div>
    </div>
  );
}
