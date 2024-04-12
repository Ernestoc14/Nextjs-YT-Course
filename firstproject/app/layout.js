import "./globals.css";


export const metadata = {
  title: "Motorcycle Website",
  description: "Search data about your favorite motorcycles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Head or Navbar */}
      <body className="container mx-auto h-screen flex justify-center items-center">
        {children}
      </body>
    </html>
  );
}
