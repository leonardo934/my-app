import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Build dos Poros",
  description: "Site para Ciração de build do Leagua of legends",
  icon: "",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <head>
        <link rel="icon" href="../../img/icon-poro.jpg" />
      </head>

      <body className={inter.className}><div className="bg-sky-900">{children}</div></body>
    
    </html>

    </>
  );
}

