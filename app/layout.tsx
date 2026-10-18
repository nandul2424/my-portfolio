import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nandul Lokitha | Software Engineer / DevOps / Infrastructure Engineer",
  description:
    "Portfolio of Nandul Lokitha, showcasing backend engineering, DevOps, cloud infrastructure, and production-ready projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Nandul Lokitha | Software Engineer / DevOps / Infrastructure Engineer</title>
        <meta
          name="description"
          content="Portfolio of Nandul Lokitha, showcasing backend engineering, DevOps, cloud infrastructure, and production-ready projects."
        />
        <link rel="icon" href="/profile.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
