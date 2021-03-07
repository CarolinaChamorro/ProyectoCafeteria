<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Detalle;
use App\Http\Resources\DetalleResource;

class DetalleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $detalle= Detalle::all();
        return DetalleResource::collection($detalle);
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
        $detalle= new Detalle();
        $detalle->status=$request->status;
        $detalle->cantidad=$request->cantidad;
        $detalle->producto_id=$request->producto_id;
        $detalle->user_id=$request->user_id;
        

        if($detalle->save()){
            return new DetalleResource($detalle);
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
        $detalle = Detalle::findOrFail($id);
        return new DetalleResource($detalle);
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
        $detalle=Detalle::findOrFail($id);
        $detalle->status=$request->status;
        $detalle->cantidad=$request->cantidad;
        $detalle->producto_id=$request->producto_id;
        $detalle->user_id=$request->user_id;
        

        if($detalle->save()){
            return new DetalleResource($detalle);
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
        $detalle_Detealle::findOrFail($id);
        if($detalle->delete()){
            return new DetalleResource($detalle);
        }
    }
}
