import { Link } from '@inertiajs/react';

export default function Show({ product }) {
    return (
        <>
            <div className="bg-orange-500 text-white py-2 text-center font-bold">
                ⚡ Flash Deal! สินค้าพิเศษลดราคาวันนี้เท่านั้น! ⚡
            </div>

            <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-[450px] object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded text-sm font-semibold">
                            ลด {Math.floor(Math.random() * 50) + 10}% 🔥
                        </div>
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                        <p className="text-gray-600 mb-4">{product.description}</p>

                        <div className="flex items-center mb-6">
                            <span className="text-2xl font-bold text-orange-500">
                                ${product.price}
                            </span>
                            <span className="ml-4 text-gray-400 text-lg line-through">
                                ${product.price * 1.2}
                            </span>
                            <span className="ml-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                                ลดพิเศษ!
                            </span>
                        </div>

                        <div className="flex space-x-4 mb-8">
                            <button
                                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition shadow-md"
                            >
                                🛒 Add to Cart
                            </button>
                            <button
                                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition shadow-md"
                            >
                                🚀 Buy Now
                            </button>
                        </div>

                        <Link
                            href="/products"
                            className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                        >
                            ⬅ Back to All Products
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
