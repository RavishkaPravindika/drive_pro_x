<?php

use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\AuthController;

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('products', ProductController::class);
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::post('login', [AuthController::class, 'login']);
Route::post('security-question', [AuthController::class, 'verifySecurityQuestion']);