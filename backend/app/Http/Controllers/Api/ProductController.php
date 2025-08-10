<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource; // create resource below
use App\Models\Product;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        // pagination, sorting, optional search
        $query = Product::query();
        if ($request->has('q')) {
            $q = $request->query('q');
            $query->where('name','like',"%{$q}%");
        }
        $products = $query->orderBy('created_at','desc')->paginate(12);
        return ProductResource::collection($products);
    }

    public function store(StoreProductRequest $request)
    {
        $data = $request->validated();
        $images = [];

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $file) {
                $path = $file->store('products','public');
                $images[] = $path;
            }
        }

        $data['images'] = $images;
        $product = Product::create($data);
        return new ProductResource($product);
    }

    public function show(Product $product)
    {
        return new ProductResource($product);
    }

    public function update(UpdateProductRequest $request, Product $product)
    {
        $data = $request->validated();

        if ($request->hasFile('images')) {
            // optional: delete old images if you want
            $images = [];
            foreach ($request->file('images') as $file) {
                $path = $file->store('products','public');
                $images[] = $path;
            }
            $data['images'] = $images;
        }

        $product->update($data);
        return new ProductResource($product);
    }

    public function destroy(Product $product)
    {
        // optional: delete images from storage
        $product->delete();
        return response()->json(['message'=>'Deleted'], 200);
    }
}
