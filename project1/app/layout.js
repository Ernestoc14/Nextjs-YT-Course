import Navbar from "@/components/Navbar";
import {Aclonica} from "next/font/google"


const aclonica = Aclonica({
  weight: "400",
  styles: "latin",
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={aclonica.className}>
        <h2>Renta tu Carro</h2>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
