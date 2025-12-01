import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
    return (
        <div className="pt-24 pb-20">
            {/* Header */}
            <div className="bg-coffee-900 text-white py-16 mb-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-beige-100/80 max-w-2xl mx-auto text-lg">
                        Have questions about our beans, brewing methods, or your order? We&apos;re
                        here to help.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Contact Info */}
                    <div className="space-y-8 lg:space-y-12 order-2 lg:order-1">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-coffee-900 mb-6">
                                Visit Our Roastery
                            </h2>
                            <p className="text-coffee-600 mb-8 leading-relaxed">
                                Come smell the coffee! Our flagship roastery and cafe is open
                                daily. We offer tastings, brewing workshops, and of course, fresh
                                beans to take home.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-gold-500/10 p-3 rounded-full text-gold-600">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-coffee-900 mb-1">Address</h3>
                                        <p className="text-coffee-600">
                                            123 Coffee Bean Lane
                                            <br />
                                            Seattle, WA 98101
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-gold-500/10 p-3 rounded-full text-gold-600">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-coffee-900 mb-1">Phone</h3>
                                        <p className="text-coffee-600">(555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-gold-500/10 p-3 rounded-full text-gold-600">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-coffee-900 mb-1">Email</h3>
                                        <p className="text-coffee-600">hello@coffeestore.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-gold-500/10 p-3 rounded-full text-gold-600">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-coffee-900 mb-1">Hours</h3>
                                        <p className="text-coffee-600">
                                            Mon-Fri: 7am - 7pm
                                            <br />
                                            Sat-Sun: 8am - 6pm
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gray-200 h-64 rounded-2xl w-full flex items-center justify-center text-coffee-500">
                            <span className="font-medium">Map Integration Placeholder</span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 order-1 lg:order-2">
                        <h2 className="font-serif text-3xl font-bold text-coffee-900 mb-6">
                            Send us a Message
                        </h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-bold text-coffee-900"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-bold text-coffee-900"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="subject"
                                    className="text-sm font-bold text-coffee-900"
                                >
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all bg-white"
                                >
                                    <option>General Inquiry</option>
                                    <option>Order Support</option>
                                    <option>Wholesale</option>
                                    <option>Feedback</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-bold text-coffee-900"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <Button className="w-full" size="lg">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
