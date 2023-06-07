<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('menius', function (Blueprint $table) {
            $table->id();
            $table->string('dish',62);
            $table->decimal('price')->default(0);
            $table->string('image',128)->nullable()->default(null);
            $table->foreignId('restorans_id')->cascadeOnDelete()->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menius');
    }
};
