import { ReactElement } from "react"

const ThemifiedBanner = ({ theme = '', children }: { theme?: string, children: ReactElement | string }) => (
  <article className={`p-4 ${theme}`} >
    <h1 className="text-6xl text-theme-accent font-mono">{children}</h1>
  </article>)

export default function Home() {
  return (<>
    <header>
      <nav className="p-4 justify-between">
        <h3>salsascript.dev</h3>
      </nav>
    </header>
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <ThemifiedBanner>
        Comming Soon!
      </ThemifiedBanner>
      <ThemifiedBanner theme="theme-alternate">
        Comming Soon Themified!
      </ThemifiedBanner>
      <ThemifiedBanner theme="theme-yellow">
        Comming Soon Themified!
      </ThemifiedBanner>
      <ThemifiedBanner theme="theme-purple">
        Comming Soon Themified!
      </ThemifiedBanner>
    </main>
  </>)
}
