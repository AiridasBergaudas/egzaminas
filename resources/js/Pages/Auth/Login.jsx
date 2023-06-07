import { useEffect } from 'react';

import { Head, Link, useForm } from '@inertiajs/react';
import NewLayout from "@/Layouts/NewLayout";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };


            return (
            <NewLayout>
                <div className="container mt-5 offset-md-3">
                    <div className="card col-md-6">
                        <div className="card-body text-center">


                            <div className="col-md-12">

                                <main className="form-signin w-100 m-auto">
                                    <form onSubmit={submit}>
                                        <h1 className="h3 mb-3 fw-normal">Prisijungti</h1>

                                        <div className="form-floating mb-3">
                                            <input id="email"
                                                   type="email"
                                                   name="email"
                                                   value={data.email}
                                                   onChange={(e) => setData('email', e.target.value)}
                                                   className="form-control"
                                                   placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">E.Paštas</label>
                                        </div>
                                        <div className="form-floating">
                                            <input  id="password"
                                                    type="password"
                                                    name="password"
                                                    value={data.password}
                                                    onChange={(e) => setData('password', e.target.value)}
                                                    className="form-control"
                                                    placeholder="Password" />
                                            <label htmlFor="floatingPassword">Slaptažodis</label>
                                        </div>

                                        <div className="checkbox mb-3">
                                            <label>
                                                <input type="checkbox" value="remember-me" /> Užmiršote slaptažodį
                                            </label>
                                        </div>
                                        <button className="w-100 btn btn-lg btn-primary" type="submit">Prisijungti</button>
                                    </form>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </NewLayout>
            );
            }

