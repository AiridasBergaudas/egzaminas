<?php

namespace App\Http\Controllers;

use App\Models\Meniu;
use Illuminate\Http\Request;



class MeniuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Menius/Index',[
            "menius"=>Meniu::with("restoran")->get()
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
//       return inertia('Menius/Create'[
//
//           ]);
        return inertia("Menius/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'dish'=>'required',
            'price'=>'required',
        ],
        [
            'dish'=>'Patiekalas yra privalomas',
            'price'=>'Kaina yra privaloma',
        ]);


        $meniu=new Meniu();
        $meniu->dish=$request->dish;
        $meniu->price=$request->price;
        $meniu->restoran_id=$request->restoran_id;
        if ($request->file("image")!=null){
            $request->file("image")->store("/public/menius");
            $meniu->image=$request->file("image")->hashName();
        }
        $meniu->save();
        Meniu::create($request->all());
        return to_route("menius.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Meniu $meniu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Meniu $meniu)
    {
        return inertia('Menius/Edit',[
            "meniu"=>$meniu
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Meniu $meniu)
    {


        if($request->file("image")!=null){
            if($meniu->image!=null){
                unlink(storage_path()."/app/public/menius/".$meniu->image);
            }
            $request->file("image")->store("/public/menius");
            $meniu->fill($request->all());
            $meniu->image=$request->file("image")->hashName();
        }else{
            $meniu->fill($request->all());
        }
        $meniu->save();
        return to_route("menius.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Meniu $meniu)
    {
        $meniu->delete();
        return to_route("menius.index");
    }

    public function  meniu($id){
        return inertia('Menius/Index',[
            "menius"=>Meniu::where('restoran_id',$id)->with("restoran")->get()
        ]);
    }
}
