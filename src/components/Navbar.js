"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Coffee } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { clsx } from "clsx";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ lang, dict }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: dict.home, href: `/${lang}` },
        { name: dict.shop, href: `/${lang}/products` },
        { name: dict.about, href: `/${lang}#about` },
        { name: dict.contact, href: `/${lang}/contact` },
    ];

    return (
        <header
            className={clsx(
                "fixed bg-white/90 top-0 start-0 end-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href={`/${lang}`} className="flex items-center gap-2 group">
                    <div className="bg-coffee-900 text-gold-500 p-2 rounded-full group-hover:scale-110 transition-transform">
                        <Coffee size={24} />
                    </div>
                    <span className="text-xl md:text-2xl font-serif font-bold text-coffee-900 tracking-tight">
                        Coffee<span className="text-gold-600">Store</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-coffee-900 font-medium hover:text-gold-600 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2 md:gap-4">
                    <LanguageSwitcher currentLang={lang} />

                    <Link
                        href={`/${lang}/cart`}
                        className="relative p-2 text-coffee-900 hover:text-gold-600 transition-colors"
                    >
                        <ShoppingBag size={24} />
                        {cartCount > 0 && (
                            <span className="absolute top-0 end-0 bg-gold-500 text-coffee-900 text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-coffee-900"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full start-0 end-0 bg-white border-t border-gray-100 shadow-lg p-4 flex flex-col gap-2 animate-in slide-in-from-top-5 z-40">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-coffee-900 font-medium py-3 px-4 rounded-lg hover:bg-beige-50 hover:text-gold-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
