import './globals.css'
import { Inter, Merriweather, Merriweather_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ['latin'],
  variable: '--font-family-serif'
});

const merriweatherSans = Merriweather_Sans({
  subsets: ['latin'],
  variable: '--font-family-sans'
});

export const metadata = {
  title: 'salsascript.dev',
  description: 'salsascript.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${merriweatherSans.variable} ${merriweather.variable} `}>{children}</body>
    </html>
  )
}
