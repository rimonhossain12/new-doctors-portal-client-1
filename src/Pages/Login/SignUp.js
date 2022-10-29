import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    let signInError;

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password, data.name);
        await updateProfile({ displayName: data.name });
        console.log(data.name, data.password, data.email);
        console.log('update done!');
        navigate('/appointment')
    };

    if (loading || gLoading || updating) {
        return <Loading />
    }

    if (gError || error || updateError) {
        signInError = <p className='text-red-500 text-thin'><small>{error?.message || gError?.message || updateError.message}</small></p>;
    }

    if (user || gUser) {
        console.log(user || gUser);
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>

                    {/* react hooks from */}

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Name is required!'
                                        }
                                    }
                                )}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <p className='text-red-500 text-thin' role="alert">{errors.name.message}</p>}

                            </label>
                        </div>

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
                        <input type="submit" className='btn text-white w-full max-w-xs' value="Sign Up" />
                    </form>

                    <p className='text-center'><small>Already have an account <Link className='text-primary' to="/login">Please Login!</Link></small></p>

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

export default SignUp;