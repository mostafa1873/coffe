"use client";

import { usePathname, useRouter } from "next/navigation";
import { Languages } from "lucide-react";
import { useState } from "react";

export default function LanguageSwitcher({ currentLang }) {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: "en", name: "English", flag: "🇺🇸" },
        { code: "ar", name: "العربية", flag: "🇸🇦" },
    ];

    const switchLanguage = (newLang) => {
        // Remove current language from pathname and add new one
        const segments = pathname.split("/").filter(Boolean);
        segments[0] = newLang; // Replace first segment (lang) with new language
        const newPath = `/${segments.join("/")}`;

        router.push(newPath);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-2 text-coffee-900 hover:text-gold-600 transition-colors rounded-lg hover:bg-beige-100"
                aria-label="Switch language"
            >
                <Languages size={20} />
                <span className="text-sm font-medium hidden sm:inline">
                    {currentLang.toUpperCase()}
                </span>
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 min-w-[160px]">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => switchLanguage(lang.code)}
                                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-beige-50 transition-colors ${currentLang === lang.code ? "bg-gold-50 text-gold-700" : "text-coffee-900"
                                    }`}
                            >
                                <span className="text-xl">{lang.flag}</span>
                                <span className="font-medium">{lang.name}</span>
                                {currentLang === lang.code && (
                                    <span className="ms-auto text-gold-600">✓</span>
                                )}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
