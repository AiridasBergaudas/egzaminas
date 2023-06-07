

import NewLayout from "@/Layouts/NewLayout";
import {Link, router} from "@inertiajs/react";



export default function Index({menius, auth}){

    const meniusName=[];
    menius.forEach((meniu)=>{
    meniusName.push(
        <tr key={meniu.id}>
            <td>{meniu.restoran.name}</td>
        </tr>)
    });
    const meniusList=[];

    menius.forEach((meniu)=>{

        meniusList.push(
            <tr key={meniu.id}>


                <td>{meniu.image && <img width="100px" src={"/storage/menius/"+meniu.image } />}</td>
                <td>{meniu.dish}</td>
                <td>{meniu.price}</td>
                {/*<td>{meniu.restoran_id}</td>*/}

                <td>
                    { (auth.user!=null && auth.user.type==1) ?
                        <div>

                            <Link className="btn btn-warning "  href={ route("menius.edit",meniu.id)} >Redaguoti</Link> &nbsp;
                            <button className="btn btn-danger "  onClick={ ()=>{ router.delete(route("menius.destroy",meniu.id)); } }  >Ištrinti</button> &nbsp;

                        </div>
                        :
                        <div>
                            {/*<Link className="btn btn-warning "  href={ route("menius.index",restoran.id)} >Meniu</Link> &nbsp;*/}

                        </div>
                    }
                </td>
            </tr>)
    });


    return (
         <NewLayout>
            <div className="col-md-12 mt-5">
                <div className="card">
                    <div className="card-header">Restorano {meniusName} Meniu</div>

                    <div className="card-body">

                        { auth.user!=null && auth.user.type==1?
                         <Link className="btn btn-success float-end" href={ route("menius.create") } >Pridėti naują patiekalą</Link>
                            :
                            <div>
                            </div>
                    }
                        <table className="table ">
                            <thead>
                            <tr>
                                <th>
                                     Nuotrauka
                                    {/*<span onClick={ ()=>{setOrder({field:"name", dir:1} )} }>  Vardas </span>*/}
                                </th>
                                <th>
                                    Patiekalas
                                    {/*<span onClick={ ()=>{setOrder({field:"name", dir:1} )} }>  Pavardė </span>*/}
                                </th>
                                <th>Kaina</th>

                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {meniusList}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
             <Link className="btn btn-success mt-2 col-md-1 float-end" href={ route("restorans.index") } >Atgal</Link>
         </NewLayout>


    )

}
