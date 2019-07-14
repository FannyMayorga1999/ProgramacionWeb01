<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Provider;

class ProvidersController extends Controller
{
    public function getProviders(){
        $provider = Provider::get();
        return response()->json($provider, 200);
    }
    public function postProviders(Request $request){
        $data = $request->json()->all();
        $provider = Provider::create([
            'phone'=> $data['phone'],
            'email' =>$data['email'],
        ]);
        return response()->json($provider, 201);
    }
    public function putProviders(Request $request){
        $data = $request->json()->all();
        $provider = Provider::findOrFail($data['id']);
        $response = $provider->update([
            'phone'=> $data['phone'],
            'email' =>$data['email'],
        ]);
        return response()->json($response, 201);
    }
    public function deleteProviders(Request $request){
        $data = $request->json()->all();
        $provider = Provider::findOrFail($data['id']);
        $response = $provider->delete();
        return response()->json($response, 201);
    }
}
