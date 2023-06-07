

import NewLayout from "@/Layouts/NewLayout";
import {Link, router, useForm} from "@inertiajs/react";



export default function Edit(props){

   const {data, setData}=useForm(props.restoran);

    const handleChange=(event)=>{
      setData({
          ...data,
          [event.target.id]:event.target.value
      });
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        router.post(route("restorans.update", data.id),{
            ...data,
            _method:'put'
        });
       // put(route("restorans.update", restoran.id));
    }
    return (
         <NewLayout>
            <div className="col-md-12 mt-5">
                <div className="card">
                    <div className="card-header">Restorano redagavimas</div>
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
                              <label className="form-label">Pavadinimas</label>
                              <input type="text" className="form-control" id="name" onChange={handleChange} value={data.name}/>
                          </div>
                          <div className="mb-3">
                              <label className="form-label">Telefonas</label>
                              <input type="text" className="form-control" id="phone" onChange={handleChange} value={data.phone}/>
                          </div>
                          <div className="mb-3">
                              <label className="form-label">Adresas</label>
                              <input type="text" className="form-control" id="address" onChange={handleChange} value={data.address}/>
                          </div>
                          <div className="mb-3">
                              <label className="form-label">Kategorija</label>
                              <input type="text" className="form-control" id="category" onChange={handleChange} value={data.category}/>
                          </div>
                          <button type={"submit"} className={"btn btn-success"}>Išsaugoti</button>
                      </form>

                    </div>
                </div>
            </div>

         </NewLayout>


    )

}
