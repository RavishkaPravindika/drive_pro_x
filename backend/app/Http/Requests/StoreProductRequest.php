<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    // public function rules(): array
    // {
    //     return [
    //         //
    //     ];
    // }

    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'original_price' => 'required|numeric|min:0',
            'final_price' => 'required|numeric|min:0',
            'discount_percentage' => 'nullable|integer|between:0,100',
            'images.*' => 'nullable|image|max:5120', // each file max 5MB
            'rating' => 'nullable|numeric|min:0|max:5',
            'reviews_count' => 'nullable|integer|min:0',
            'sku' => 'nullable|string|max:100|unique:products,sku',
            'stock' => 'required|integer|min:0',
        ];
    }

}
