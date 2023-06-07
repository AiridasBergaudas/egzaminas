import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import NewLayout from "@/Layouts/NewLayout";
import {Link, router, useForm} from "@inertiajs/react";


//dar netaisytas
export default function Edit(props){

    const {data, setData, post, errors}=useForm(props.meniu);

    //handleChange funkcija reikalinga ir nuotraukom , o html aprasiau nuotraukai ikelti koda
    const handleChange=(event)=>{
      setData({
          ...data,
          [event.target.id]:event.target.value
      });
    };

    const handleSubmit=(event)=>{
        event.preventDefault();

        router.post(route("menius.update", data.id),{
            ...data,
            _method:'put'
        });
    }
    return (
         <NewLayout>
            <div className="col-md-12 mt-5">
                <div className="card">
                    <div className="card-header">Meniu redagavimas</div>
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

                          <button type={"submit"} className={"btn btn-success"}>Išsaugoti</button>
                      </form>

                    </div>
                </div>
            </div>

         </NewLayout>


    )

}
