import { Link } from '@inertiajs/react';

export default function Show({ product }) {
    return (
        <>
            <div className="py-6">
                <div className="container mx-auto">
                    <div className="text-2xl text-center font-bold">
                        <h1>{product.name}</h1>
                    </div>
                    <div className="">
                        <img src={product.image} alt={product.name}
                            className='w-1/2 h-1/2 flex justify-center items-center mx-auto py-6'
                        />
                    </div>
                    <div className="text-center">
                        <p>{product.description}</p>
                    </div>
                    <div className="flex justify-center items-center mx-auto text-center border w-fit p-2 m-4 rounded-sm bg-green-400">
                        <p>Price: ${product.price}</p>

                    </div>
                    <Link href="/products" className=' flex justify-center md:justify-start items-center md:items-start w-fit mx-auto md:mx-0 border rounded-lg p-4 bg-red-600 text-white'>Back to All Products</Link>
                </div>
            </div>
        </>
    )
}
