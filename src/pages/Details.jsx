import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth";




const Details = () => {


    const {
        register,
        handleSubmit,
    } = useForm()

    //   handle Borrow the book
    const handleBorrow = (data) => {

        const name = data.name
        const email = data.email
        const dateOfBorrow = data.dateOfBorrow
        const dateOfReturn = data.dateOfReturn

        console.log({ name, email, dateOfBorrow, dateOfReturn })


      



    }

    const { user } = useAuth()


    const { id } = useParams()
    console.log(id)

    const { data: book = {}, isLoading } = useQuery({
        queryFn: () => getBookForDetails(),
        queryKey: ["bookForDetails"]
    })

    console.log(book)

    const getBookForDetails = async () => {
        const data = await axios.get(`http://localhost:5000/books/${id}`)
        return data.data
    }

    if (isLoading) {
        return <div className="text-center flex flex-col justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>

        </div>
    }



    return (
        <div className="flex flex-col md:flex-row gap-4 my-10">

            <div className="w-full flex items-center  p-5 rounded-2xl">

                <img src={book.image} alt="" />

            </div>

            <div className="w-full">

                <h1 className="text-5xl font-bold"> {book.bookName} </h1>
                <p className="text-2xl mt-4 font-semibold"> {book.authorName} </p>

                <p className="text-xl text-[#888f91] mt-6 font-medium"> Short Description : {book.shortDescription} </p>

                <div className="border border-dashed my-6"> </div>

                <div className=" text-xl font-semibold space-y-3">
                    <p> Category : {book.category} </p>
                    <p> Ratings  : {book.ratings} </p>
                    <p> Quantity  : {book.quantity} </p>

                </div>

                {/* <button className="btn w-full mt-8"> Borrow </button> */}

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn w-full mt-8" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                    <div className="modal-box">

                        <h3 className="font-bold text-lg"> Provide necessary Information </h3>

                        <div className="border border-dashed my-4"></div>

                        <div className="modal-action w-full flex flex-col ">
                            <form className="w-full" onSubmit={handleSubmit(handleBorrow)} method="dialog">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input defaultValue={user?.displayName} type="text" {...register("name")} placeholder="Name" className="input input-bordered " required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input defaultValue={user?.email} type="Email" {...register("email")} placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date of Borrow</span>
                                    </label>
                                    <input  type="date" {...register("dateOfBorrow")} placeholder="" className="input input-bordered " required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date of Return</span>
                                    </label>
                                    <input  type="date" {...register("dateOfReturn")} placeholder="" className="input input-bordered" required />
                                </div>



                                {/* if there is a button in form, it will close the modal */}
                                {/* <button className="btn"> Close </button> */}

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                                
                            </form>

                            <form method="dialog">

                                <button className="btn w-full mt-6"> Close </button>
                            </form>

                          
                        </div>
                    </div>
                </dialog>



            </div>

        </div>
    );
};

export default Details;