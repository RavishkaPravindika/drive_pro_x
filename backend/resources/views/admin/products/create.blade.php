@extends('layouts.app')

@section('content')
    <h2>Create Product</h2>
    <form action="{{ route('admin.products.store') }}" method="POST">
        @csrf
        <div>
            <label>Name</label>
            <input type="text" name="name" value="{{ old('name') }}">
            @error('name') <span>{{ $message }}</span> @enderror
        </div>
        <div>
            <label>Description</label>
            <textarea name="description">{{ old('description') }}</textarea>
        </div>
        <div>
            <label>Price</label>
            <input type="number" name="price" step="0.01" value="{{ old('price') }}">
            @error('price') <span>{{ $message }}</span> @enderror
        </div>
        <div>
            <label>Stock</label>
            <input type="number" name="stock" value="{{ old('stock') }}">
            @error('stock') <span>{{ $message }}</span> @enderror
        </div>
        <button type="submit">Create</button>
    </form>
@endsection