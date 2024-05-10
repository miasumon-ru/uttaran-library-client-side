import { Link } from 'react-router-dom';
import signInPhoto from '../assets/securityPhoto.jpg'
import { useForm } from "react-hook-form"


const Login = () => {

    const {
        register,
        handleSubmit,
      } = useForm()

    //   handleLogin

    const handleLogin = (data) => {

        console.log(data)

    }

    return (
        <div className="">
            <div className="hero-content flex-col lg:flex-row md:mt-10">
                <div className="text-center lg:text-left w-full flex items-center justify-center">

                    <img className='md:max-w-2xl ' src={signInPhoto} alt="" />


                </div>
                <div className=" shrink-0 w-full max-w-sm shadow-md ml-4  bg-base-100">
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body ">
                        <h1 className=" text-2xl md:text-5xl font-bold mb-10 text-center"> Login now</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="Email" {...register("email")} placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password")} placeholder="Password" className="input input-bordered" required />


                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <div className='text-center mt-4 space-y-2'>
                            <p className='text-gray-600 font-medium '>Do not have an Account ?</p>
                            <p className='text-gray-600 font-medium '> Please <span className='text-xl text-blue-500 text-bold ml-2 underline'> <Link to={'/register'}> Register </Link> </span> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;