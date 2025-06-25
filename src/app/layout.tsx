import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add weights you want
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "My Portofolio",
  description: "This is my webpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <nav className="sticky flex justify-center h-18 w-screen z-50 bg-white/30 backdrop-blur-md shadow-md">
          <ul className="list-none flex flex-row gap-4 my-auto">
            <li>
              <Link href={"/"} className={`hover:text-[#355d90]`}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"#about"} className={`hover:text-[#355d90]`}>
                About
              </Link>
            </li>
            <li>
              <Link href={"#portofolio"} className={`hover:text-[#355d90]`}>
                Projects
              </Link>
            </li>
            <li>
              <Link href={"#contact"} className={`hover:text-[#355d90]`}>
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1cPQMZk3tI5yR033vQ4GA5iIXR4VpJn3G/view"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-[#355d90]`}
              >
                CV
              </a>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
