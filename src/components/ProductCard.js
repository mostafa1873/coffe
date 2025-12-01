"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, lang }) {
    const { addToCart } = useCart();

    return (
        <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
            <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={`absolute top-4 ${lang === "ar" ? "start-4" : "end-4"} bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-coffee-900 shadow-sm`}>
                    {product.roast} {lang === "ar" ? "تحميص" : "Roast"}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <h3 className="font-serif font-bold text-xl text-coffee-900 mb-2 group-hover:text-gold-600 transition-colors">
                        <Link href={`/${lang}/products/${product.id}`}>{product.name}</Link>
                    </h3>
                    <p className="text-coffee-600 text-sm line-clamp-2">
                        {product.description}
                    </p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                    <span className="font-bold text-lg text-coffee-900">
                        ${product.price.toFixed(2)}
                    </span>
                    <div className="flex gap-2">
                        <Link href={`/${lang}/products/${product.id}`}>
                            <Button variant="outline" size="sm" className="rounded-lg">
                                {lang === "ar" ? "التفاصيل" : "Details"}
                            </Button>
                        </Link>
                        <Button
                            size="sm"
                            className="rounded-lg gap-2"
                            onClick={() => addToCart(product)}
                        >
                            <ShoppingBag size={16} />
                            {lang === "ar" ? "أضف" : "Add"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
