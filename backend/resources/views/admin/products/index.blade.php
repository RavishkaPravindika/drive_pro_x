@extends('layouts.admin')

@section('content')
@php
    use Illuminate\Support\Str;
    use Illuminate\Support\Facades\Storage;
@endphp

<div class="flex justify-between items-center mb-6">
    <h1 class="text-2xl font-bold text-gray-800">Products</h1>
    <a href="{{ route('admin.products.create') }}" 
       class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
        + Add Product
    </a>
</div>

@if(session('success'))
    <div class="mb-4 p-3 bg-green-100 text-green-800 rounded">
        {{ session('success') }}
    </div>
@endif

<div class="overflow-x-auto bg-white shadow rounded-lg">
    <table class="min-w-full table-auto border-collapse">
        <thead>
            <tr class="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
                <th class="px-4 py-3 text-left">Image</th>
                <th class="px-4 py-3 text-left">Name</th>
                <th class="px-4 py-3 text-left">SKU</th>
                <th class="px-4 py-3 text-left">Original Price</th>
                <th class="px-4 py-3 text-left">Final Price</th>
                <th class="px-4 py-3 text-left">Discount %</th>
                <th class="px-4 py-3 text-left">Stock</th>
                <th class="px-4 py-3 text-left">Rating</th>
                <th class="px-4 py-3 text-left">Reviews</th>
                <th class="px-4 py-3 text-left">Actions</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
            @foreach($products as $p)
                @php
                    $firstImage = is_array($p->images) ? ($p->images[0] ?? null) : $p->images;
                    $imgSrc = null;

                    if ($firstImage) {
                        // already absolute url?
                        if (Str::startsWith($firstImage, ['http://', 'https://'])) {
                            $imgSrc = $firstImage;
                        }
                        // starts with "/storage" (Laravel Storage::url output)
                        elseif (Str::startsWith($firstImage, '/storage')) {
                            $imgSrc = url($firstImage);
                        }
                        // assume it's a storage path like "products/xxx.jpg"
                        else {
                            $imgSrc = url(Storage::url($firstImage));
                        }
                    }
                @endphp

                <tr class="hover:bg-gray-50">
                    <td class="px-4 py-3">
                        @if($imgSrc)
                            <img src="{{ $imgSrc }}" alt="Product Image" class="w-16 h-16 object-cover rounded">
                        @else
                            <span class="text-gray-400 text-sm">No Image</span>
                        @endif
                    </td>
                    <td class="px-4 py-3">{{ $p->name }}</td>
                    <td class="px-4 py-3">{{ $p->sku ?? '-' }}</td>
                    <td class="px-4 py-3">LKR {{ number_format($p->original_price, 2) }}</td>
                    <td class="px-4 py-3">LKR {{ number_format($p->final_price, 2) }}</td>
                    <td class="px-4 py-3">{{ $p->discount_percentage ?? 0 }}%</td>
                    <td class="px-4 py-3">{{ $p->stock }}</td>
                    <td class="px-4 py-3">{{ $p->rating ?? '-' }}</td>
                    <td class="px-4 py-3">{{ $p->reviews_count ?? 0 }}</td>
                    <td class="px-4 py-3">
                        <div class="flex items-center gap-3">
                            <a href="{{ route('admin.products.edit', $p) }}" 
                              class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition text-sm">
                                Edit
                            </a>
                            <form action="{{ route('admin.products.destroy', $p) }}" method="POST" onsubmit="return confirm('Delete this product?')">
                                @csrf 
                                @method('DELETE')
                                <button type="submit" 
                                        class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition text-sm">
                                    Delete
                                </button>
                            </form>
                        </div>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>

<div class="mt-4">
    {{ $products->links() }}
</div>
@endsection
