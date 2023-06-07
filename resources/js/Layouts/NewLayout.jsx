import 'bootstrap/dist/css/bootstrap.css';
import '../../../resources/css/app.css';
import {Link, usePage} from "@inertiajs/react";
export default function NewLayout({children}) {

    const {auth}=usePage().props;
    const user=auth.user;

    return (
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Restoranai</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link href={ route("restorans.index")} className="nav-link active">Restoranų sarašas</Link>

                                </li>
                            {/*    <li className="nav-item">*/}
                            {/*        <Link href={ route("pictures.index")} className="nav-link active">Kūrinių sarašas</Link>*/}
                            {/*    </li>*/}
                            </ul>
                        </div>
                        {user == null ?
                            <div className=" float-end">

                                <Link href={ route("login")} className="btn btn-outline-secondary">Prisijungti</Link>
                                &nbsp;

                                <Link href={ route("register")} className="btn btn-outline-secondary ">Registruotis</Link>
                            </div>
                            :
                            <div className="float-end">
                                <span>Prisijungęs kaip: <b>{user.name} ({user.type==1?"administratorius":"klientas"})</b></span> &nbsp;
                                <Link className="btn btn-outline-secondary" href={route('logout')} method="post" as="button">Atsijungti</Link>
                            </div>

                        }
                    </div>
                </nav>
                {children}
            </div>
        </div>
    )
}
