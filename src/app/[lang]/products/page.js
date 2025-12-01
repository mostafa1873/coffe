"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { clsx } from "clsx";

function ProductsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const params = useParams();
    const lang = params.lang;
    const currentRoast = searchParams.get("roast");

    const [filter, setFilter] = useState(currentRoast || "All");

    const filteredProducts = useMemo(() => {
        if (filter === "All") return products;
        return products.filter(
            (p) => p.roast.toLowerCase() === filter.toLowerCase()
        );
    }, [filter]);

    const handleFilterChange = (roast) => {
        setFilter(roast);
        if (roast === "All") {
            router.push(`/${lang}/products`);
        } else {
            router.push(`/${lang}/products?roast=${roast.toLowerCase()}`);
        }
    };

    const roasts = lang === "ar"
        ? ["الكل", "فاتح", "متوسط", "داكن"]
        : ["All", "Light", "Medium", "Dark"];

    const roastMapping = {
        "الكل": "All",
        "فاتح": "Light",
        "متوسط": "Medium",
        "داكن": "Dark",
        "All": "All",
        "Light": "Light",
        "Medium": "Medium",
        "Dark": "Dark"
    };

    return (
        <div className="container mx-auto px-4 py-12 pt-24 min-h-screen">
            <div className="text-center mb-12 space-y-4">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-coffee-900">
                    {lang === "ar" ? "مجموعتنا" : "Our Collection"}
                </h1>
                <p className="text-coffee-600 max-w-2xl mx-auto">
                    {lang === "ar"
                        ? "استكشف مجموعتنا المختارة بعناية من حبوب القهوة الفاخرة من جميع أنحاء العالم."
                        : "Explore our carefully curated selection of premium coffee beans from around the world."}
                </p>
            </div>

            {/* Filters */}
            <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap justify-start md:justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4 md:px-0 no-scrollbar snap-x">
                {roasts.map((roastLabel, idx) => {
                    const roastValue = roastMapping[roastLabel];
                    return (
                        <button
                            key={idx}
                            onClick={() => handleFilterChange(roastValue)}
                            className={clsx(
                                "whitespace-nowrap px-6 py-2 rounded-full font-medium transition-all duration-300 snap-center flex-shrink-0",
                                filter === roastValue
                                    ? "bg-coffee-900 text-white shadow-md scale-105"
                                    : "bg-white text-coffee-900 hover:bg-beige-100 border border-gray-200"
                            )}
                        >
                            {roastLabel}
                        </button>
                    );
                })}
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} lang={lang} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-xl text-coffee-600">
                        {lang === "ar"
                            ? "لم يتم العثور على منتجات في هذه الفئة."
                            : "No products found for this category."}
                    </p>
                    <button
                        onClick={() => setFilter("All")}
                        className="mt-4 text-gold-600 font-bold hover:underline"
                    >
                        {lang === "ar" ? "عرض جميع المنتجات" : "View all products"}
                    </button>
                </div>
            )}
        </div>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
            <div className="text-coffee-900">Loading...</div>
        </div>}>
            <ProductsContent />
        </Suspense>
    );
}
