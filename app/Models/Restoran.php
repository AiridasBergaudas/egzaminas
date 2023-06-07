<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restoran extends Model
{
    use HasFactory;
    protected $fillable = ["image","name","phone","address","category"];
    public function menius(){
        return $this->hasMany(Meniu::class);
    }
}
//belongsToMany = daud su daus rysys
