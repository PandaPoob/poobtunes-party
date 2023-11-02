import { Agbalumo, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "./_components/Navigation";

const agbalumo = Agbalumo({
  subsets: ["latin"],
  weight: "400",
  variable: "--display-font",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--body-font",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${agbalumo.variable} ${poppins.variable}`}>
      <body className="font-body bg-black">
        <Navigation />
        <main className="px-4 text-white">{children}</main>
      </body>
    </html>
  );
}
