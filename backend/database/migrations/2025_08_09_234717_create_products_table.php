<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('original_price', 12, 2);
            $table->decimal('final_price', 12, 2);
            $table->unsignedTinyInteger('discount_percentage')->default(0);
            $table->json('images')->nullable();            // store array of image paths
            $table->float('rating')->nullable();
            $table->unsignedInteger('reviews_count')->default(0);
            $table->string('sku')->nullable()->unique();
            $table->integer('stock')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
