import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import DashboarWrapper from "./dashboardWrapper";

const inter = Inter({subsets:["latin"]});
export const metadata: Metadata = {
  title: "ProMixed",
  description: "Project management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
        <DashboarWrapper>
          {children}
        </DashboarWrapper>
      </body>
    </html>
  );
}
