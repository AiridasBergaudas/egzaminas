import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import NewLayout from "@/Layouts/NewLayout";
import {Link, router, useForm} from "@inertiajs/react";



export default function Create({}){

    const {data, setData, post, errors}=useForm({
        image:null,
        dish:null,
        price:"",
        restoran_id:""

    });

    //handleChange funkcija reikalinga ir nuotraukom , o html aprasiau nuotraukai ikelti koda
    const handleChange=(event)=>{
      setData({
          ...data,
          [event.target.id]:event.target.value
      });
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        post(route("menius.store"));
    }
    return (
         <NewLayout>
            <div className="col-md-12 mt-5">
                <div className="card">
                    <div className="card-header">Pridėti naują patiekalą</div>
                    <div className="card-body">
                      <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                              <label className="form-label">Nuotrauka</label>
                              <input type="file" className="form-control" id="image"  onChange={(event)=>{
                                  setData({
                                      ...data,
                                      image:event.target.files[0]
                                  });
                              }} />
                          </div>
                          <div className="mb-3">
                              <label className="form-label">Patiekalas</label>
                              <input type="text" className="form-control" id="dish" onChange={handleChange} value={data.dish}/>
                          </div>
                          <div className="mb-3">
                              <label className="form-label">Kaina</label>
                              <input type="text" className="form-control" id="price" onChange={handleChange} value={data.price}/>
                          </div>
                          <div className="mb-3">
                              <label className="form-label">Restoranas</label>
                              <input type="text" className="form-control" id="restoran_id" onChange={handleChange} value={data.restoran_id}/>
                          </div>

                          <button type={"submit"} className={"btn btn-success"}>Pridėti</button>
                      </form>

                    </div>
                </div>
            </div>

         </NewLayout>


    )

}
