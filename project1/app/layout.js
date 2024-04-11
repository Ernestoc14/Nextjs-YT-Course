import Navbar from "@/components/Navbar";
import {Aclonica} from "next/font/google"
import "./globals.css"

const aclonica = Aclonica({
  weight: "400",
  styles: "latin",
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`flex flex-col ${aclonica.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
