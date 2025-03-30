import "./globals.css";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-family-sans",
});

export const metadata = {
  title: "salsascript.dev",
  description: "salsascript.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} ${publicSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
