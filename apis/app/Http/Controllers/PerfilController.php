<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Perfil;
use App\Http\Resources\PerfilResource;

class PerfilController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $perfil = Perfil::all();
        return PerfilResource::collection($perfil);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $perfil= new Perfil();
        $perfil->cedula=$request->cedula;
        $perfil->direccion=$request->direccion;
        $perfil->telefono=$request->telefono;
        $perfil->rol=$request->rol;
        $perfil->user_id=$request->user_id;

        if($perfil->save()){
            return new PerfilResource($perfil);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $perfil=Perfil::where("perfils.user_id", "=", $id)
        ->select("users.name", "users.email", "perfils.cedula", "perfils.direccion", "perfils.telefono")
        ->join("users", "users.id", "=", "perfils.user_id")
        ->get();
        return $perfil;
    }

    public function rol()
    {
        $perfil = Perfil::select("users.id", "users.name", "users.email", "perfils.cedula", "perfils.direccion", "detalles.user_id","detalles.status")
        ->join("users", "users.id", "=", "perfils.user_id")
        ->join("detalles", "detalles.user_id", "=", "users.id")
        ->get();
        return $perfil;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $perfil= Perfil::findOrFail($id);
        $perfil->cedula=$request->cedula;
        $perfil->direccion=$request->direccion;
        $perfil->telefono=$request->telefono;
        $perfil->rol=$request->rol;
        if($perfil->save()){
            return new PerfilResource($perfil);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $perfil=Perfil::findOrFail($id);

        if($perfil->delete()){
            return new PerfilResource($perfil);
        }
    }
}
