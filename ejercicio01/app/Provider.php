<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Provider extends Model
{
    protected $fillable = [
        'phone', 'email'
    ];

    public function products (){
        return $this -> belongsToMany('App\Product');
    }
}
