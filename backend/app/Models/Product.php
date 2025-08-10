<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name','original_price','final_price','discount_percentage',
        'images','rating','reviews_count','sku','stock'
    ];

    protected $casts = [
        'images' => 'array',
        'rating' => 'float',
        'reviews_count' => 'integer',
        'discount_percentage' => 'integer',
    ];

    public function getImagesAttribute($value)
    {
        // $value is the JSON array stored in DB
        $images = json_decode($value, true) ?? [];

        // Convert each to full URL
        return array_map(function($image) {
            return Storage::url($image); // gives /storage/products/...
        }, $images);
    }
}
