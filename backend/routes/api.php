<?php

use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\AuthController;

Route::get('products', [ProductController::class,'index']);
Route::get('products/{product}', [ProductController::class,'show']);

// auth for API clients (create tokens)
Route::post('auth/login', [AuthController::class,'login']);
Route::post('auth/logout', [AuthController::class,'logout'])->middleware('auth:sanctum');

// protected product routes (for admin token users)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('products', [ProductController::class,'store']);
    Route::put('products/{product}', [ProductController::class,'update']);
    Route::delete('products/{product}', [ProductController::class,'destroy']);
});
