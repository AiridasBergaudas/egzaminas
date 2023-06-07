import Button from "bootstrap/js/src/button";

import NewLayout from "@/Layouts/NewLayout";
import {Link, router} from "@inertiajs/react";



export default function Index({restorans, auth}){

    const restoransList=[];

    restorans.forEach((restoran)=>{

        restoransList.push(
            <tr key={restoran.id}>


                <td>{restoran.image && <img width="100px" src={"/storage/restorans/"+restoran.image } />}</td>
                <td>{restoran.name}</td>
                <td>{restoran.phone}</td>
                <td>{restoran.address}</td>
                <td>{restoran.category}</td>
                <td>
                    { (auth.user!=null && auth.user.type==1) ?
                        <div>
                            <Link className="btn btn-warning "  href={ route("restorans.edit",restoran.id)} >Redaguoti</Link> &nbsp;
                            <button className="btn btn-danger "  onClick={ ()=>{ router.delete(route("restorans.destroy",restoran.id)); } }  >Ištrinti</button> &nbsp;
                            <Link className="btn btn-warning "  href={ route("restorans.meniu",restoran.id)} >Meniu</Link> &nbsp;
                        </div>
                        :
                        <div>
                            <Link className="btn btn-warning "  href={ route("menius.index",restoran.id)} >Meniu</Link> &nbsp;

                        </div>
                    }
                </td>
            </tr>)
    });


    return (
         <NewLayout>
            <div className="col-md-12 mt-5">
                <div className="card">
                    <div className="card-header">Restoranų sarašas</div>

                    <div className="card-body">

                        { auth.user!=null && auth.user.type==1?
                         <Link className="btn btn-success float-end" href={ route("restorans.create") } >Pridėti naują restoraną</Link>
                            :
                            <div>
                            </div>
                    }
                        <table className="table">
                            <thead>
                            <tr>
                                <th>
                                     Nuotrauka
                                    {/*<span onClick={ ()=>{setOrder({field:"name", dir:1} )} }>  Vardas </span>*/}
                                </th>
                                <th>
                                    Pavadinimas
                                    {/*<span onClick={ ()=>{setOrder({field:"name", dir:1} )} }>  Pavardė </span>*/}
                                </th>
                                <th>Telefono Nr.</th>
                                <th>Adresas</th>
                                <th>Kategorija</th>
                                <th colSpan={2} className="text-center">Veiksmai</th>
                            </tr>
                            </thead>
                            <tbody>
                            {restoransList}
                            </tbody>
                            <Link className="btn btn-success mt-2 float-end" href={ ("/") } >Atgal</Link>
                        </table>
                    </div>
                </div>
            </div>

         </NewLayout>


    )

}
