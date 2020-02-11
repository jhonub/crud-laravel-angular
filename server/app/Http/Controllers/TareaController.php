<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tarea;

class TareaController extends Controller
{
    public function index(){
        return response(Tarea::all())
        ->header('Content-Type','application/json');   
    }
    public function showLista($id){
        return response(Tarea::find($id)) 
        ->header('Content-Type', 'application/json');
    }
    public function createLista(Request $request){
        return response(Tarea::create($request->all()))
        ->header('Content-Type', 'application/json');
    }

    public function updateLista(Request $request, $id){
        $tarea = Tarea::findOrFail($id);
        $tarea->update($request->all());

        return response($tarea);
    }

    public function deleteLista(Request $request, $id){
        $tarea = Tarea::findOrFail($id);
        $tarea->delete();

        return 204;
    }
}
