import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Zap-Sendify: Email Sending Made Simple",
  description: "Seamless Email Sending Made Simple",
  icons: {
    icon: [
      { url: '/images/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/images/favicons/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
