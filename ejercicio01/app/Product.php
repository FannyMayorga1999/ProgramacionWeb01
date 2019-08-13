<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 
        'price', 
        'stock'

    ];

    public function category(){
        return $this -> belongsTo('App\Category');
    }

    public function Providers(){
        return $this->belongsToMany('App\Provider');
    }
}
