import type { Metadata } from "next";
import "./globals.css";
// import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import GradualBlur from "@/components/ui/gradual-blur";
// import { Head } from "next/document";

export const metadata: Metadata = {
  title: "Aashi Chaudhary - Mobile Application Developer",
  description:
    "Portfolio of Aashi Chaudhary - A passionate mobile application developer specializing in building exceptional digital experiences with clean code and thoughtful design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/profile.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/profile.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/profile.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/profile.png" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <ErrorReporter />
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
          {children}
        </ThemeProvider>
        <GradualBlur
          preset="page-footer"
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
          strength={5}
        />
      </body>
    </html>
  );
}
