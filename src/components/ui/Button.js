import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    href,
    ...props
}) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary:
            "bg-coffee-900 text-white hover:bg-coffee-800 focus:ring-coffee-900",
        secondary:
            "bg-gold-500 text-coffee-900 hover:bg-gold-600 focus:ring-gold-500",
        outline:
            "border-2 border-coffee-900 text-coffee-900 hover:bg-coffee-50 focus:ring-coffee-900",
        ghost: "text-coffee-900 hover:bg-coffee-50 hover:text-coffee-900",
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
    };

    const classes = twMerge(
        baseStyles,
        variants[variant],
        sizes[size],
        className
    );

    if (href) {
        return (
            <Link href={href} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
