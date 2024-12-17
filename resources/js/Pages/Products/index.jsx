import { Link } from '@inertiajs/react';
export default function Index({ products }) {
    return (
        <>
            <div className='container mx-auto py-6'>
                <h1 className="text-center text-2xl font-bold">Product Index</h1>
                <div className='p-4'>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                        {products.map((product) => (
                            <li key={product.id}
                                className='border rounded-lg p-4 hover:shadow-lg transition-shadow'
                            >
                                <Link href={`/products/${product.id}`}>
                                    <div className="text-lg font-semibold mb-2 text-center">
                                        {product.name}
                                    </div>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-56 object-cover rounded-md py-4"
                                    >
                                    </img>
                                    <div className="text-gray-500">
                                        price: {product.price}$
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
