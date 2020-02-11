<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('tareas', 'TareaController@index');
Route::get('tareas/{id}', 'TareaController@showLista');
Route::post('tareas', 'TareaController@createLista');
Route::put('tareas/{id}', 'TareaController@updateLista');
Route::delete('tareas/{id}', 'TareaController@deleteLista');