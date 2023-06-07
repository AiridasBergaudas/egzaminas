<?php

namespace App\Http\Controllers;

use App\Models\Restoran;
use App\Models\Seler;
use Illuminate\Http\Request;

class RestoranController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $restorans=Restoran::with("menius")->get();
        return inertia('Restorans/Index', [
            "restorans"=>$restorans
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Restorans/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $restoran=new Restoran();
        if ($request->file("image")!=null){
            $request->file("image")->store("/public/restorans");
            $restoran->image=$request->file("image")->hashName();
        }
        $restoran->name=$request->name;
        $restoran->phone=$request->phone;
        $restoran->address=$request->address;
        $restoran->category=$request->category;
        $restoran->save();
//        Restoran::create($request->all());
        return to_route('restorans.index');
    }


    /**
     * Display the specified resource.
     */
    public function show(Restoran $restoran)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Restoran $restoran)
    {
        return inertia('Restorans/Edit',[
            "restoran"=>$restoran
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Restoran $restoran)
    {


        if($request->file("image")!=null){
            if($restoran->image!=null){
                unlink(storage_path()."/app/public/restorans/".$restoran->image);
            }
            $request->file("image")->store("/public/restorans");
            $restoran->fill($request->all());
            $restoran->image=$request->file("image")->hashName();
        }else{
            $restoran->fill($request->all());
        }

//        $restoran->name=$request->name;toran->phone=$request-
////        $res>phone;
//        $restoran->address=$request->address;
//        $restoran->category=$request->category;
        $restoran->save();
        return to_route('restorans.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Restoran $restoran)
    {
        $restoran->delete();
        return to_route('restorans.index');
    }
}
