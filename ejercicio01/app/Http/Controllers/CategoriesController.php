<?php

namespace App\Http\Controllers;
use App\Category;
use Illuminate\Http\Request;


class CategoriesController extends Controller
{
    public function getCategories(){
        $category = Category::get();
        return response()->json($category, 200);
    }
    public function postCategory(Request $request){
        $data = $request->json()->all();
        $category = Category::create([
            'description'=>$data['description'],
        ]);
        return response()->json($category, 201);
    }
    public function putCategory(Request $request){
        $data = $request->json()->all();
        $category = Category::findOrFail($data['id']);
        $response = $category->update([
            'description'=> $data['description'],
        ]);
        return response()->json($response, 201);
    }
    public function deleteCategrory(Request $request){
        $data = $request->json()->all();
        $category = Category::findOrFail($data['id']);
        $response = $category->delete();
        return response()->json($response, 201);
    }
}
