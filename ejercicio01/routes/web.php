<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return "hello fanny";
});

Route::get('/providers','ProvidersController@getProviders');
Route::post('/providers','ProvidersController@postProviders');
Route::put('/providers','ProvidersController@putProviders');
Route::delete('/providers','ProvidersController@deleteProviders');

Route::get('/products','ProductsController@getProducts');
Route::post('/products','ProductsController@postProduct');
Route::put('/products','ProductsController@putProdruct');
Route::delete('/products','ProductsController@deleteProduct');


Route::get('/categories','CategoriesController@getCategories');
Route::post('/categories','CategoriesController@postCategory');
Route::put('/categories','CategoriesController@putCategory');
Route::delete('/categories','CategoriesController@deleteCategrory');
