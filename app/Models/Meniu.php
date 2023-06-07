<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meniu extends Model
{
    use HasFactory;
    protected  $fillable = ["dish","price","image","restoran_id"];

    public function restoran(){
        return  $this->belongsTo(Restoran::class);
    }
    protected function price(): Attribute
    {
        return Attribute::make(
         get:fn(string $value) => $value."eur",
        );
    }
}
