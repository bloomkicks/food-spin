import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>FoodSpin - healthy meal for any moment</title>
        <meta
          name="description"
          content="Enjoy our wide variety of healthy food where every meal will be your favorite"
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
