import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user, gUser, from, navigate])



    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
        console.log(data)
    };

    if (loading || gLoading) {
        return <Loading />
    }

    if (gError || error) {
        signInError = <p className='text-red-500 text-thin'><small>{error?.message || gError?.message}</small></p>;
    }



    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    {/* react hooks from */}
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Email is required!'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    }
                                )}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <p className='text-red-500 text-thin' role="alert">{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p className='text-red-500 text-thin' role="alert">{errors.email.message}</p>}
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password",
                                    {
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 character or Longer!'
                                        }
                                    }
                                )}
                                aria-invalid={errors.password ? "true" : "false"}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <p className='text-red-500 text-thin' role="alert">{errors.password.message}</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500 text-thin' role="alert">{errors.password.message}</p>}
                            </label>
                        </div>
                        {signInError}
                        <input type="submit" className='btn text-white w-full max-w-xs' value='Login' />
                    </form>

                    <p className='text-center'><small>New to Doctors Portal <Link className='text-primary' to="/signup">Create New Account</Link></small></p>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;