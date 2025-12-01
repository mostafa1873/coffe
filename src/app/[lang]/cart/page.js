"use client";

import Link from "next/link";
import { ArrowLeft, CreditCard } from "lucide-react";
import Button from "@/components/ui/Button";
import CartItem from "@/components/CartItem";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
    const { cart, cartTotal, clearCart } = useCart();
    const shipping = cartTotal > 50 ? 0 : 5.99;
    const total = cartTotal + (cartTotal > 0 ? shipping : 0);

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center container mx-auto px-4 pt-24 pb-12 text-center">
                <h1 className="font-serif text-4xl font-bold text-coffee-900 mb-4">
                    Your Cart is Empty
                </h1>
                <p className="text-coffee-600 mb-8 max-w-md">
                    Looks like you haven&apos;t added any coffee to your cart yet. Start
                    shopping to find your perfect roast.
                </p>
                <Button href="/products" size="lg">
                    Start Shopping
                </Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 pt-24 pb-20 min-h-screen">
            <h1 className="font-serif text-4xl font-bold text-coffee-900 mb-8">
                Your Cart
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}

                    <div className="flex justify-between items-center pt-6">
                        <Link
                            href="/products"
                            className="flex items-center gap-2 text-coffee-600 hover:text-gold-600 transition-colors font-medium"
                        >
                            <ArrowLeft size={18} /> Continue Shopping
                        </Link>
                        <button
                            onClick={clearCart}
                            className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                        <h2 className="font-serif text-2xl font-bold text-coffee-900 mb-6">
                            Order Summary
                        </h2>

                        <div className="space-y-4 mb-6 text-coffee-700">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="font-medium">${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span className="font-medium">
                                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                                </span>
                            </div>
                            {shipping > 0 && (
                                <div className="text-xs text-gold-600 bg-gold-50 p-2 rounded">
                                    Add ${(50 - cartTotal).toFixed(2)} more for free shipping!
                                </div>
                            )}
                        </div>

                        <div className="border-t border-gray-200 pt-4 mb-8">
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-lg text-coffee-900">Total</span>
                                <span className="font-bold text-2xl text-coffee-900">
                                    ${total.toFixed(2)}
                                </span>
                            </div>
                        </div>

                        <Button className="w-full gap-2" size="lg">
                            <CreditCard size={20} />
                            Checkout
                        </Button>

                        <p className="text-xs text-center text-coffee-500 mt-4">
                            Secure Checkout • Money-back Guarantee
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
