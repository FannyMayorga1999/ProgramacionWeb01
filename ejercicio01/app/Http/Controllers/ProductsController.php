<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductsController extends Controller
{
    public function getProducts(){
        $products = Product::get();
        return response()->json(["products"=> $products], 200);
    }
    public function postProduct(Request $request){
        $product = Product::create([
            $request ->json()->all()
        ]);
        return response()->json(["products"=> $products], 201);
    }
    public function putProdruct(Request $request){
        $data = $request->json()->all();
        $products = Product::findOrFail($data['id']);
        $response = $products->update([]);
        return response()->json(["products"=> $products], 201);
    }
    public function deleteProduct(Request $request){
        $data = $request->json()->all();
        $products = Product::findOrFail($data['id']);
        $response = $products->delete();
        return response()->json(["products"=> $products], 201);
    }
}
