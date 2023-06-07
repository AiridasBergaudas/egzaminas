
import 'bootstrap/dist/css/bootstrap.css';
import NewLayout from "@/Layouts/NewLayout";
import {Link} from "@inertiajs/react";

export default function Title() {
    return (
        <NewLayout>

            <div className="container bg-success p-2 text-dark bg-opacity-25">
                <div className="row text-center">
                    <div className="col-md-12 mt-5">
                        <h1>Sveiki atvykę <br/>į Airido restoranų šeimą</h1>
                        {/*<img src={"/storage/app/restorans/luKfiaVlQki8WP1STyQbrtBuvzj8KplE7lZ0aD94.png"}></image>*/}
                        <div className="btn btn-success">
                            <Link href={ route("restorans.index")} className="nav-link active">Prašom užeiti</Link>
                        </div>
                        <div>

                            <img src="/storage/titles/zvaigzde.png" alt="Image" width="400"  />
                        </div>

                    </div>
                </div>
            </div>

        </NewLayout>

    );
}
