import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Truck, ShieldCheck, Leaf } from "lucide-react";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const featuredProducts = products.slice(0, 3);

  const features = [
    {
      icon: Truck,
      title: dict.home.features.shipping,
      desc: dict.home.features.shippingDesc,
    },
    {
      icon: ShieldCheck,
      title: dict.home.features.quality,
      desc: dict.home.features.qualityDesc,
    },
    {
      icon: Leaf,
      title: dict.home.features.ethical,
      desc: dict.home.features.ethicalDesc,
    },
  ];

  const aboutItems = lang === "ar"
    ? [
      "تحميص دفعات صغيرة من أجل الاتساق",
      "مصادر مستدامة من المزارع العائلية",
      "محمص طازج حسب الطلب",
      "خلطات منسقة بخبرة",
    ]
    : [
      "Small batch roasting for consistency",
      "Sustainably sourced from family farms",
      "Roasted fresh to order",
      "Expertly curated blends",
    ];

  const testimonials = lang === "ar"
    ? [
      {
        quote: "أفضل قهوة تذوقتها على الإطلاق. كان التسليم سريعًا والحبوب طازجة بشكل لا يصدق.",
        author: "سارة ج.",
        role: "باريستا منزلي",
      },
      {
        quote: "أحب خدمة الاشتراك. لا أنفد أبدًا من تحميصي المفضل وأحصل على فرصة لتجربة أنواع جديدة أيضًا.",
        author: "مايكل ت.",
        role: "عاشق القهوة",
      },
      {
        quote: "أخيرًا، قهوة بطعم ما أحصل عليه في مقهاي المفضل. أوصي بشدة!",
        author: "إميلي ر.",
        role: "شارب يومي",
      },
    ]
    : [
      {
        quote: "The best coffee I've ever tasted. The delivery was fast and the beans were incredibly fresh.",
        author: "Sarah J.",
        role: "Home Barista",
      },
      {
        quote: "I love the subscription service. I never run out of my favorite roast and I get to try new ones too.",
        author: "Michael T.",
        role: "Coffee Enthusiast",
      },
      {
        quote: "Finally, a coffee that tastes like what I get at my favorite cafe. Highly recommended!",
        author: "Emily R.",
        role: "Daily Drinker",
      },
    ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop"
            alt="Coffee Beans Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-6 md:space-y-8 max-w-4xl pt-16 md:pt-0">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {dict.home.hero.title} <br />
            <span className="text-gold-500">{dict.home.hero.subtitle}</span>
          </h1>
          <p className="text-lg md:text-2xl text-beige-100/90 font-light max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 px-4">
            {dict.home.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button href={`/${lang}/products`} size="lg" variant="secondary">
              {dict.home.hero.shopNow}
            </Button>
            <Button
              href={`/${lang}#about`}
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              {dict.home.hero.learnMore}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-beige-100 p-4 rounded-full text-coffee-900 mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="font-serif font-bold text-xl text-coffee-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-coffee-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-serif text-4xl font-bold text-coffee-900 mb-4">
              {dict.home.featured.title}
            </h2>
            <p className="text-coffee-600 max-w-xl">
              {dict.home.featured.subtitle}
            </p>
          </div>
          <Link
            href={`/${lang}/products`}
            className="hidden md:flex items-center gap-2 text-gold-600 font-bold hover:text-gold-700 transition-colors"
          >
            {dict.home.featured.viewAll} <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} lang={lang} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href={`/${lang}/products`}
            className="inline-flex items-center gap-2 text-gold-600 font-bold hover:text-gold-700 transition-colors"
          >
            {dict.home.featured.viewAll} <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section id="about" className="bg-coffee-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop"
                alt="Coffee Roasting"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 md:space-y-8">
              <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
                {dict.home.about.title} <br />
                <span className="text-gold-500">{dict.home.about.highlight}</span>
              </h2>
              <p className="text-beige-100/80 text-base md:text-lg leading-relaxed">
                {dict.home.about.description}
              </p>
              <ul className="space-y-4">
                {aboutItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-gold-500 rounded-full" />
                    <span className="text-beige-100/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href={`/${lang}#about`} variant="secondary" className="mt-4">
                {dict.home.about.readStory}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="font-serif text-4xl font-bold text-coffee-900 mb-16">
          {dict.home.testimonials.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <div className={`text-gold-500 text-6xl font-serif absolute -top-6 ${lang === "ar" ? "end-8" : "start-8"} opacity-20`}>
                &quot;
              </div>
              <p className="text-coffee-700 mb-6 relative z-10 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <div className="font-bold text-coffee-900">
                  {testimonial.author}
                </div>
                <div className="text-xs text-gold-600 uppercase tracking-wider font-bold">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-gold-500 rounded-3xl p-8 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-coffee-900">
              {dict.home.newsletter.title}
            </h2>
            <p className="text-coffee-800 text-lg">
              {dict.home.newsletter.description}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={dict.home.newsletter.placeholder}
                className="flex-grow px-6 py-3 rounded-full border-none focus:ring-2 focus:ring-coffee-900 focus:outline-none"
              />
              <Button className="bg-coffee-900 text-white hover:bg-coffee-800">
                {dict.home.newsletter.subscribe}
              </Button>
            </form>
          </div>
          {/* Decorative circles */}
          <div className={`absolute top-0 ${lang === "ar" ? "end-0" : "start-0"} w-64 h-64 bg-white/10 rounded-full ${lang === "ar" ? "translate-x-1/2" : "-translate-x-1/2"} -translate-y-1/2`} />
          <div className={`absolute bottom-0 ${lang === "ar" ? "start-0" : "end-0"} w-96 h-96 bg-white/10 rounded-full ${lang === "ar" ? "-translate-x-1/3" : "translate-x-1/3"} translate-y-1/3`} />
        </div>
      </section>
    </div>
  );
}
