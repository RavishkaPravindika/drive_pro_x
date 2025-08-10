<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProductResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'originalPrice' => (float) $this->original_price,
            'finalPrice' => (float) $this->final_price,
            'discountPercentage' => (int) $this->discount_percentage,
            'images' => collect($this->images ?? [])->map(function ($img) {
                if (empty($img)) return null;

                // 1) If it's already an absolute URL, return it unchanged
                if (Str::startsWith($img, ['http://', 'https://'])) {
                    return $img;
                }

                // 2) Collapse repeated "/storage" occurrences (handles bad DB values)
                $img = preg_replace('#(/storage)+#', '/storage', $img);

                // 3) If it starts with "/storage", it's already Storage::url result -> make absolute
                if (Str::startsWith($img, '/storage')) {
                    // ensure single leading slash
                    $img = '/' . ltrim($img, '/');
                    return url($img);
                }

                // 4) Otherwise assume it's a storage path like "products/abc.jpg"
                return url(Storage::url($img)); // Storage::url -> /storage/..., url() -> absolute
            })->filter()->values()->toArray(),
            'rating' => $this->rating,
            'reviewsCount' => $this->reviews_count,
            'sku' => $this->sku,
            'stock' => $this->stock,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
