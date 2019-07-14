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

    public function Category(){
        return $this -> hasOne('App\Category');
    }

    public function Providers(){
        return $this->belongsToMany('App\Provider');
    }
}
