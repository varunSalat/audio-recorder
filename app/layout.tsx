import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audio Recorder and Visualizer",
  description: "Audio Recorder and Visualizer with multiple canvas types",
  creator: "Varun", // your name here
  authors: [{ name: "Varun", url: "https://varun-salat.vercel.app/" }],
  keywords: ["audio recorder", "visualizer", "react", "shadcn ui"],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <TooltipProvider delayDuration={0}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header /> <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
