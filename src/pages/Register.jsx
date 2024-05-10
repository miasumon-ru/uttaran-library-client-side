import { useForm } from "react-hook-form"
import signUpPhoto from "../assets/signUpPhoto.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const Register = () => {

    const { createUser } = useAuth()

    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
    } = useForm()

    const handleRegister = (data, e) => {

        const name = data.name
        const email = data.email
        const photoURL = data.photoURL
        const password = data.password

        console.log(name, email, photoURL, password)

        // createUser

        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })

        // reset the form

        e.target.reset()

    }



    return (
        <div className="">
            <div className="hero-content flex-col lg:flex-row md:mt-10">
                <div className="text-center lg:text-left w-full flex  items-center justify-center">

                    <img className=' ' src={signUpPhoto} alt="" />


                </div>
                <div className=" shrink-0 w-full max-w-sm shadow-md ml-4  bg-base-100">
                    <form onSubmit={handleSubmit(handleRegister)} className="card-body ">
                        <h1 className=" text-2xl md:text-5xl font-bold mb-10 text-center"> Register now</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name")} placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="Email" {...register("email")} placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photoURL")} placeholder="Photo URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} {...register("password")} placeholder="Password" className="input input-bordered" required />

                            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-12 "> {showPassword ? <FaEyeSlash className="text-2xl" /> : <FaEye className="text-2xl" />}  </span>


                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <div className='text-center mt-4 space-y-2'>
                            <p className='text-gray-600 font-medium '>Already have an Account ?</p>
                            <p className='text-gray-600 font-medium '> Please <span className='text-xl text-blue-500 text-bold ml-2 underline'> <Link to={'/login'}> Login </Link> </span> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;