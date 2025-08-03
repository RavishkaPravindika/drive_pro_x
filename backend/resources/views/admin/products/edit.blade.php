@extends('layouts.app')

@section('content')
    <h2>Edit Product</h2>
    <form action="{{ route('admin.products.update', $product->id) }}" method="POST">
        @csrf
        @method('PUT')
        <div>
            <label>Name</label>
            <input type="text" name="name" value="{{ old('name', $product->name) }}">
            @error('name') <span>{{ $message }}</span> @enderror
        </div>
        <div>
            <label>Description</label>
            <textarea name="description">{{ old('description', $product->description) }}</textarea>
        </div>
        <div>
            <label>Price</label>
            <input type="number" name="price" step="0.01" value="{{ old('price', $product->price) }}">
            @error('price') <span>{{ $message }}</span> @enderror
        </div>
        <div>
            <label>Stock</label>
            <input type="number" name="stock" value="{{ old('stock', $product->stock) }}">
            @error('stock') <span>{{ $message }}</span> @enderror
        </div>
        <button type="submit">Update</button>
    </form>
@endsection