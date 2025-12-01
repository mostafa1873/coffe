import Link from "next/link";
import { Facebook, Instagram, Twitter, Coffee } from "lucide-react";

export default function Footer({ lang }) {
    return (
        <footer className="bg-coffee-900 text-beige-100 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link href={`/${lang}`} className="flex items-center gap-2">
                            <div className="bg-gold-500 text-coffee-900 p-2 rounded-full">
                                <Coffee size={20} />
                            </div>
                            <span className="text-xl font-serif font-bold text-white tracking-tight">
                                Coffee<span className="text-gold-500">Store</span>
                            </span>
                        </Link>
                        <p className="text-beige-100/70 text-sm leading-relaxed">
                            {lang === "ar"
                                ? "حبوب قهوة طازجة محمصة يتم توصيلها مباشرة إلى باب منزلك. استمتع بالكوب المثالي كل صباح."
                                : "Premium fresh roasted coffee beans delivered straight to your door. Experience the perfect cup every morning."}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif font-bold text-lg mb-4 text-white">
                            {lang === "ar" ? "المتجر" : "Shop"}
                        </h3>
                        <ul className="space-y-2 text-sm text-beige-100/70">
                            <li>
                                <Link
                                    href={`/${lang}/products`}
                                    className="hover:text-gold-500 transition-colors"
                                >
                                    {lang === "ar" ? "جميع القهوة" : "All Coffee"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${lang}/products?roast=light`}
                                    className="hover:text-gold-500 transition-colors"
                                >
                                    {lang === "ar" ? "تحميص فاتح" : "Light Roast"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${lang}/products?roast=medium`}
                                    className="hover:text-gold-500 transition-colors"
                                >
                                    {lang === "ar" ? "تحميص متوسط" : "Medium Roast"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${lang}/products?roast=dark`}
                                    className="hover:text-gold-500 transition-colors"
                                >
                                    {lang === "ar" ? "تحميص داكن" : "Dark Roast"}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif font-bold text-lg mb-4 text-white">
                            {lang === "ar" ? "الشركة" : "Company"}
                        </h3>
                        <ul className="space-y-2 text-sm text-beige-100/70">
                            <li>
                                <Link
                                    href={`/${lang}#about`}
                                    className="hover:text-gold-500 transition-colors"
                                >
                                    {lang === "ar" ? "من نحن" : "About Us"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${lang}/contact`}
                                    className="hover:text-gold-500 transition-colors"
                                >
                                    {lang === "ar" ? "تواصل معنا" : "Contact"}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif font-bold text-lg mb-4 text-white">
                            {lang === "ar" ? "ابق على اتصال" : "Stay Connected"}
                        </h3>
                        <p className="text-sm text-beige-100/70 mb-4">
                            {lang === "ar"
                                ? "اشترك في نشرتنا الإخبارية للحصول على نصائح التحضير والعروض الحصرية."
                                : "Subscribe to our newsletter for brewing tips and exclusive offers."}
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="text-beige-100/70 hover:text-gold-500 transition-colors"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-beige-100/70 hover:text-gold-500 transition-colors"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-beige-100/70 hover:text-gold-500 transition-colors"
                            >
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-coffee-800 pt-8 text-center text-sm text-beige-100/50">
                    <p>
                        &copy; {new Date().getFullYear()} Coffee Store.{" "}
                        {lang === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
                    </p>
                </div>
            </div>
        </footer>
    );
}
