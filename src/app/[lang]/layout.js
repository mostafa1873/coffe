import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/dictionary";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: "Coffee Store | Premium Roasted Beans",
    description: "Premium fresh roasted coffee beans delivered to your door.",
  };
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-beige-50 text-coffee-900 flex flex-col min-h-screen`}
      >
        <CartProvider>
          <Navbar lang={lang} dict={dict.nav} />
          <main className="flex-grow">{children}</main>
          <Footer lang={lang} dict={dict} />
        </CartProvider>
      </body>
    </html>
  );
}
