<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{

    private $products = [
        [
            'id' => 1,
            'name' => 'Laptop',
            'description' => 'High-performance laptop for professionals',
            'price' => 1500,
            'image' => 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        [
            'id' => 2,
            'name' => 'Smartphone',
            'description' => 'Latest smartphone with great features',
            'price' => 800,
            'image' => 'https://images.unsplash.com/photo-1603184017968-953f59cd2e37?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        [
            'id' => 3,
            'name' => 'Tablet',
            'description' => 'Lightweight tablet for everyday use',
            'price' => 500,
            'image' => 'https://images.unsplash.com/photo-1464380573004-8ca85a08751a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        [
            'id' => 4,
            'name' => 'Monitor',
            'description' => 'Crystal-clear 4K display monitor',
            'price' => 1200,
            'image' => 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        [
            'id' => 5,
            'name' => 'Headphones',
            'description' => 'Noise-cancelling wireless headphones',
            'price' => 300,
            'image' => 'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        [
            'id' => 6,
            'name' => 'Smartwatch',
            'description' => 'Stylish smartwatch with fitness tracking',
            'price' => 250,
            'image' => 'https://images.unsplash.com/photo-1523395243481-163f8f6155ab?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        [
            'id' => 7,
            'name' => 'Keyboard',
            'description' => 'Mechanical keyboard with RGB lighting',
            'price' => 150,
            'image' => 'https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        [
            'id' => 8,
            'name' => 'Mouse',
            'description' => 'Wireless mouse with high precision',
            'price' => 80,
            'image' => 'https://plus.unsplash.com/premium_photo-1671611822374-4719df5c89bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        [
            'id' => 9,
            'name' => 'Speaker',
            'description' => 'Portable Bluetooth speaker with great sound',
            'price' => 120,
            'image' => 'https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        [
            'id' => 10,
            'name' => 'Camera',
            'description' => 'High-resolution digital camera',
            'price' => 2000,
            'image' => 'https://images.unsplash.com/photo-1520549233664-03f65c1d1327?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ]
    ];

    public function index()
    {
        return Inertia::render('Products/index', ['products' => $this->products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = collect($this->products)->firstWhere('id',$id);
        if (!$product) {
            abort(404, 'Product not found');
        }
        return Inertia::render('Products/Show', ['product' => $product]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
