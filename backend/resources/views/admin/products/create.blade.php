@extends('layouts.admin')

@section('content')
<div class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
    <h1 class="text-2xl font-bold mb-6 text-gray-800">Create Product</h1>

    <form action="{{ route('admin.products.store') }}" method="POST" enctype="multipart/form-data" class="space-y-5">
        @csrf

        <!-- Name -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                Name <span class="text-red-500">*</span>
            </label>
            <input type="text" name="name" value="{{ old('name') }}" 
                   class="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300" required>
        </div>

        <!-- SKU -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                SKU
            </label>
            <input type="text" name="sku" value="{{ old('sku') }}" 
                   class="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300">
        </div>

        <!-- Original Price -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                Original Price (LKR) <span class="text-red-500">*</span>
            </label>
            <input type="number" step="0.01" name="original_price" value="{{ old('original_price') }}" 
                   class="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300" required>
        </div>

        <!-- Final Price -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                Final Price (LKR) <span class="text-red-500">*</span>
            </label>
            <input type="number" step="0.01" name="final_price" value="{{ old('final_price') }}" 
                   class="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300" required>
        </div>

        <!-- Discount -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                Discount % <span class="text-red-500">*</span>
            </label>
            <input type="number" step="0.01" name="discount_percentage" value="{{ old('discount_percentage') }}" 
                   class="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300" required>
        </div>

        <!-- Rating -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                Rating (0 - 5) <span class="text-red-500">*</span>
            </label>
            <input type="number" step="0.1" name="rating" value="{{ old('rating') }}" min="0" max="5" 
                   class="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300" required>
        </div>

        <!-- Reviews -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                Reviews Count <span class="text-red-500">*</span>
            </label>
            <input type="number" name="reviews_count" value="{{ old('reviews_count') }}" min="0" 
                   class="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300" required>
        </div>

        <!-- Stock -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                Stock <span class="text-red-500">*</span>
            </label>
            <input type="number" name="stock" value="{{ old('stock', 0) }}" 
                   class="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300" required>
        </div>

        <!-- Images -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                Images (Multiple)
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
                Save
            </button>
        </div>
    </form>
</div>


@endsection
