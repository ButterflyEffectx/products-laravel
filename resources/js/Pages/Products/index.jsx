import { Link } from '@inertiajs/react';

export default function Index({ products }) {
    return (
        <>
            <div className="bg-orange-500 text-white py-2 text-center font-bold">
                ⚡ Super Sale! ลดราคาสินค้าสูงสุด 70% วันนี้เท่านั้น! ⚡
            </div>

            <div className='container mx-auto py-6 px-4'>
                <h1 className="text-center text-3xl font-bold text-orange-500 mb-6">
                    🛒 Product Index 🛒
                </h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className='border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 bg-white'
                        >
                            <Link href={`/products/${product.id}`}>
                                <div className="relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                                        ลด {Math.floor(Math.random() * 50) + 10}%
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                                        {product.name}
                                    </h2>
                                    <p className="text-orange-500 text-xl font-bold">
                                        ${product.price}
                                    </p>
                                    <p className="text-gray-500 text-sm line-through">
                                        ${product.price * 1.2}
                                    </p>
                                </div>

                                <div className="p-4 pt-0 flex justify-between items-center">
                                    <button
                                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                                    >
                                        Buy Now
                                    </button>
                                    <button
                                        className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                                    >
                                        Add to Cart 🛒
                                    </button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
