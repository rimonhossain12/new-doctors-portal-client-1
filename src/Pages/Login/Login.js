import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    if (user) {
        console.log(user);
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
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: true,
                                    message: 'Email is required'
                                },
                                    {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                )}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <p className='text-red-500' role="alert">{error.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p className='text-red-500' role="alert">{error.email.message}</p>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: true,
                                    message: 'Password is required'
                                },
                                    {
                                        minLength: 6,
                                        message: 'Must be 6 char or longer'
                                    }
                                )}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <p className='text-red-500' role="alert">{error.email.message}</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500' role="alert">{error.email.message}</p>}
                            </label>
                        </div>

                        <input type="submit" className='btn w-full max-w-xs' />
                    </form>

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