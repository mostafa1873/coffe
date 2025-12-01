"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Minus, Plus, ShoppingBag, Truck, ShieldCheck, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

export default function ProductDetailsPage({ params }) {
    const { id } = use(params);
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        notFound();
    }

    const relatedProducts = products
        .filter((p) => p.id !== product.id && p.roast === product.roast)
        .slice(0, 3);

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <div className="text-sm text-coffee-600 mb-8">
                    <Link href="/" className="hover:text-gold-600">Home</Link> / <Link href="/products" className="hover:text-gold-600">Shop</Link> / <span className="font-semibold text-coffee-900">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-12 lg:mb-20">
                    {/* Image Gallery */}
                    <div className="relative h-[300px] sm:h-[400px] md:h-[600px] bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-coffee-900 shadow-sm">
                            {product.roast} Roast
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-coffee-900 mb-4">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex text-gold-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>
                            <span className="text-coffee-600 text-sm">(128 reviews)</span>
                        </div>

                        <p className="text-2xl font-bold text-coffee-900 mb-6">
                            ${product.price.toFixed(2)}
                        </p>

                        <p className="text-coffee-700 text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>

                        <div className="space-y-6 border-t border-gray-200 pt-8">
                            <div className="flex items-center gap-4">
                                <span className="font-bold text-coffee-900">Quantity:</span>
                                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-2 py-1">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-2 rounded-full hover:bg-gray-100 text-coffee-600 transition-colors"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="w-8 text-center font-medium text-coffee-900">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="p-2 rounded-full hover:bg-gray-100 text-coffee-600 transition-colors"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    className="flex-grow gap-2"
                                    onClick={() => addToCart(product, quantity)}
                                >
                                    <ShoppingBag size={20} />
                                    Add to Cart
                                </Button>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-3 text-sm text-coffee-700">
                                    <Truck size={20} className="text-gold-600" />
                                    <span>Free shipping over $50</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-coffee-700">
                                    <ShieldCheck size={20} className="text-gold-600" />
                                    <span>Freshness guaranteed</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <h3 className="font-bold text-coffee-900 mb-2">Product Details</h3>
                            <ul className="grid grid-cols-2 gap-y-2 text-sm text-coffee-700">
                                <li><span className="font-semibold">Region:</span> {product.region}</li>
                                <li><span className="font-semibold">Weight:</span> {product.weight}</li>
                                <li><span className="font-semibold">Roast Level:</span> {product.roast}</li>
                                <li><span className="font-semibold">Process:</span> Washed</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="border-t border-gray-200 pt-16">
                        <h2 className="font-serif text-3xl font-bold text-coffee-900 mb-8">
                            You Might Also Like
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
