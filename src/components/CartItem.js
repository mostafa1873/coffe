"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartItem({ item }) {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className="flex flex-row items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 80px, 96px"
                />
            </div>

            <div className="flex-grow text-left">
                <h3 className="font-serif font-bold text-base sm:text-lg text-coffee-900 line-clamp-1">
                    {item.name}
                </h3>
                <p className="text-coffee-600 text-xs sm:text-sm">{item.weight} • {item.roast}</p>

                {/* Mobile Price & Quantity */}
                <div className="flex sm:hidden items-center justify-between mt-2">
                    <div className="flex items-center gap-2 bg-gray-50 rounded-full px-2 py-1">
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-0.5 rounded-full hover:bg-gray-200 text-coffee-600"
                            disabled={item.quantity <= 1}
                        >
                            <Minus size={14} />
                        </button>
                        <span className="w-4 text-center font-medium text-sm text-coffee-900">
                            {item.quantity}
                        </span>
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-0.5 rounded-full hover:bg-gray-200 text-coffee-600"
                        >
                            <Plus size={14} />
                        </button>
                    </div>
                    <p className="font-bold text-sm text-coffee-900">
                        ${(item.price * item.quantity).toFixed(2)}
                    </p>
                </div>
            </div>

            {/* Desktop Quantity & Price */}
            <div className="hidden sm:flex items-center gap-3">
                <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 rounded-full hover:bg-gray-100 text-coffee-600 transition-colors"
                    disabled={item.quantity <= 1}
                >
                    <Minus size={16} />
                </button>
                <span className="w-8 text-center font-medium text-coffee-900">
                    {item.quantity}
                </span>
                <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-gray-100 text-coffee-600 transition-colors"
                >
                    <Plus size={16} />
                </button>
            </div>

            <div className="hidden sm:block text-right min-w-[80px]">
                <p className="font-bold text-lg text-coffee-900">
                    ${(item.price * item.quantity).toFixed(2)}
                </p>
            </div>

            <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors self-start sm:self-center -mt-2 sm:mt-0 -mr-2 sm:mr-0"
                title="Remove item"
            >
                <Trash2 size={18} />
            </button>
        </div>
    );
}
