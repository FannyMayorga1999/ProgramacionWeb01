<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Category;

class ProductsController extends Controller
{
    public function getProducts(){
        $products = Product::get();
        return response()->json(["products"=> $products], 200);
    }
    public function postProduct(Request $request){
        $data = $request ->json()->all();
        $dataProduct = $data["product"];
        $dataCategory = $data["category"];
        $category = Category::findOrFail($dataCategory["id"]);
        $response = $category->products()->create($data["product"]);
        return response()->json(["product"=> $response], 201);
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