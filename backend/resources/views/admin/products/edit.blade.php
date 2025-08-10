@extends('layouts.admin')

@section('content')
<div class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
    <h1 class="text-2xl font-bold mb-6 text-gray-800">Edit Product</h1>

    <!-- @if ($errors->any())
        <div class="mb-4 p-3 bg-red-100 text-red-700 rounded">
            <ul class="list-disc pl-5">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif -->

    @if ($errors->any())
    <div id="error-popup" 
         class="fixed top-6 right-6 bg-red-600 text-white p-4 rounded-lg shadow-lg z-50 w-80 animate-slide-in">
        <div class="flex justify-between items-start">
            <strong class="text-lg">Validation Error</strong>
            <button onclick="document.getElementById('error-popup').remove()" 
                    class="text-white hover:text-gray-200">
                ✕
            </button>
        </div>
        <ul class="list-disc list-inside mt-2 text-sm">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>

    <style>
        @keyframes slideIn {
            from { transform: translateX(120%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
            animation: slideIn 0.4s ease-out;
        }
    </style>

    <script>
        setTimeout(() => {
            const popup = document.getElementById('error-popup');
            if (popup) popup.remove();
        }, 5000);
    </script>
@endif


    <form action="{{ route('admin.products.update', $product) }}" method="POST" enctype="multipart/form-data" class="space-y-5">
        @csrf
        @method('PUT')

        <!-- Name -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                Name <span class="text-red-500">*</span>
            </label>
            <input type="text" name="name" value="{{ old('name', $product->name) }}" 
                   class="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300" required>
        </div>

        <!-- Original Price -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                Original Price (LKR) <span class="text-red-500">*</span>
            </label>
            <input type="number" step="0.01" name="original_price" value="{{ old('original_price', $product->original_price) }}" 
                   class="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300" required>
        </div>

        <!-- Final Price -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                Final Price (LKR) <span class="text-red-500">*</span>
            </label>
            <input type="number" step="0.01" name="final_price" value="{{ old('final_price', $product->final_price) }}" 
                   class="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300" required>
        </div>

        <!-- Discount -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                Discount % <span class="text-red-500">*</span>
            </label>
            <input type="number" step="0.01" name="discount_percentage" value="{{ old('discount_percentage', $product->discount_percentage) }}" 
                   class="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300" required>
        </div>

        <!-- Stock -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                Stock <span class="text-red-500">*</span>
            </label>
            <input type="number" name="stock" value="{{ old('stock', $product->stock) }}" 
                   class="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300" required>
        </div>

        <!-- Rating -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                Rating (0 - 5) <span class="text-red-500">*</span>
            </label>
            <input type="number" step="0.1" min="0" max="5" name="rating" value="{{ old('rating', $product->rating) }}" 
                   class="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300" required>
        </div>

        <!-- Reviews -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                Reviews Count <span class="text-red-500">*</span>
            </label>
            <input type="number" name="reviews_count" min="0" value="{{ old('reviews_count', $product->reviews_count) }}" 
                   class="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300" required>
        </div>

        <!-- SKU -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                SKU
            </label>
            <input type="text" name="sku" value="{{ old('sku', $product->sku) }}" 
                   class="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300">
        </div>

        <!-- Existing Images -->
        @if (!empty($product->images))
            <div>
                <p class="text-sm font-medium text-gray-700 mb-2">Current Images:</p>
                <div class="flex gap-2 flex-wrap">
                    @foreach ($product->images as $img)
                        <img src="{{ Storage::url($img) }}" alt="" class="w-20 h-20 object-cover rounded border">
                    @endforeach
                </div>
            </div>
        @endif

        <!-- Replace Images -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                Replace Images (optional)
            </label>
            <input type="file" name="images[]" multiple 
                   class="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300">
        </div>

        <!-- Buttons -->
        <div class="flex justify-end gap-3">
            <a href="{{ route('admin.products.index') }}" 
               class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
                Cancel
            </a>
            <button type="submit" 
                    class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Update
            </button>
        </div>
    </form>
</div>
@endsection
