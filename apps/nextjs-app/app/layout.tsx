
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../../packages/ui/src/styles/shadcn/shadcn-green.css"
import "../../../packages/ui/src/styles/custom/scroll.css"
import "../../../packages/ui/src/styles/custom/heroBackgroundAnimation.css"
import RootClientLayout from "./_components/RootClientLayout";
import { description, title } from "../lib/constants/appDetails";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} >
      <body className="px-4" >
        <RootClientLayout>{children}</RootClientLayout>
      </body>
    </html>
  );
}
