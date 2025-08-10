<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\ProductResource;

class ProductCmsController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::orderBy('created_at','desc')->paginate(12);

        // If request expects JSON (API / AJAX), return resource collection
        if ($request->wantsJson() || $request->ajax()) {
            return ProductResource::collection($products);
        }

        // Otherwise render the Blade admin view
        return view('admin.products.index', compact('products'));
    }

    public function create()
    {
        return view('admin.products.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name'=>'required|string|max:255',
            'original_price'=>'required|numeric|min:0',
            'final_price'=>'required|numeric|min:0',
            'discount_percentage'=>'nullable|integer|between:0,100',
            'images.*'=>'nullable|image|max:5120',
            'rating'=>'nullable|numeric|min:0|max:5',
            'reviews_count'=>'nullable|integer|min:0',
            'sku'=>'nullable|string|max:100|unique:products,sku',
            'stock'=>'required|integer|min:0',
        ]);

        $images = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $file) {
                // Save relative storage path (good practice)
                $images[] = $file->store('products', 'public'); // storage/app/public/products/...
            }
        }
        $data['images'] = $images;

        Product::create($data);

        return redirect()->route('admin.products.index')->with('success','Product created.');
    }

    public function edit(Product $product)
    {
        return view('admin.products.edit', compact('product'));
    }

    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'name'=>'required|string|max:255',
            'original_price'=>'required|numeric|min:0',
            'final_price'=>'required|numeric|min:0',
            'discount_percentage'=>'nullable|integer|between:0,100',
            'images.*'=>'nullable|image|max:5120',
            'rating'=>'nullable|numeric|min:0|max:5',
            'reviews_count'=>'nullable|integer|min:0',
            'sku'=>'nullable|string|max:100|unique:products,sku,'.$product->id,
            'stock'=>'required|integer|min:0',
        ]);

        if ($request->hasFile('images')) {
            // Optionally delete old images if you want to
            // foreach ($product->images ?? [] as $old) { Storage::disk('public')->delete($old); }

            $images = [];
            foreach ($request->file('images') as $file) {
                $images[] = $file->store('products', 'public');
            }
            $data['images'] = $images;
        } else {
            // keep existing images
            $data['images'] = $product->images;
        }

        $product->update($data);

        return redirect()->route('admin.products.index')->with('success','Product updated.');
    }

    public function destroy(Product $product)
    {
        // optionally delete images from disk:
        // foreach ($product->images ?? [] as $pimg) { Storage::disk('public')->delete($pimg); }

        $product->delete();
        return redirect()->route('admin.products.index')->with('success','Product deleted.');
    }
}
