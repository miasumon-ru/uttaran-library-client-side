import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";






const Details = () => {

    const queryClient = useQueryClient()


    const {
        register,
        handleSubmit,
    } = useForm()


    const { user } = useAuth()


    const { id } = useParams()
    console.log(id)

    // get book data for details

    const { data: book = {}, isLoading, refetch } = useQuery({
        queryFn: () => getBookForDetails(),
        queryKey: ["bookForDetails"]
    })

    // for checking borrow more than one

    const { data: borrowedBooks = {}, } = useQuery({
        queryFn: () => getBorrowedBooks(),
        queryKey: ["borrow"]
    })

    console.log("borrowedBooks are ", borrowedBooks)


    // updating data 

    const { mutateAsync } = useMutation({
        mutationFn: async ({ quantity, id }) => {

            console.log(quantity, id)



            const { data } = await axios.patch(`https://assignment-eleven-server-iota.vercel.app/borrowedBooks/${id}`, { quantity })


            console.log(data)

        },

        onSuccess: () => {
            console.log("data updated")

            // ui refresh

            refetch()
            queryClient.invalidateQueries({ queryKey: ['borrow'] })
        }
    })


    console.log(book)



    const getBookForDetails = async () => {
        const data = await axios.get(`https://assignment-eleven-server-iota.vercel.app/books/${id}`)
        return data.data
    }

    // for borrowed books

    const getBorrowedBooks = async () => {
        const data = await axios.get(`https://assignment-eleven-server-iota.vercel.app/borrowedBooks/?email=${user?.email}`)
        return data.data
    }

    // loading

    if (isLoading) {
        return <div className="text-center flex flex-col justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>

        </div>
    }


    // const borrow = (name) => {

    //     console.log( "name is : ",  name)

    //    const isAvailable = borrowedBooks.find(book => book.bookName === name)

    //    console.log( "available is ",  isAvailable)

    //    if(isAvailable){
    //     return alert("You have already borrowed this book")
    //    }

    // }


    //   handle Borrow the book

    const handleBorrow = async (data) => {

        if (book.quantity < 0) {
            return toast("Book is not Available")
        }



        const isAvailable = borrowedBooks.find(borrowedBook => borrowedBook.bookName === book.bookName)

        if (isAvailable) {
            return toast.warn("You have already borrowed this book")
        }






        const name = data.name
        const email = data.email
        const dateOfBorrow = data.dateOfBorrow
        const dateOfReturn = data.dateOfReturn

        console.log({ name, email, dateOfBorrow, dateOfReturn })

        const borrowedBooksInfo = {

            bookName: book.bookName,
            email,
            image: book.image,
            category: book.category,
            dateOfBorrow,
            dateOfReturn

        }


        axios.post("https://assignment-eleven-server-iota.vercel.app/borrowedBooks", borrowedBooksInfo)
            .then(res => {
                console.log(res.data)

                if (res.data.insertedId) {


                    toast.success(" The book is borrowed successfully ")


                }
            })


        await mutateAsync({
            quantity: book.quantity,
            id: book._id
        })



    }




    return (
        <div className="flex flex-col md:flex-row gap-4 my-10">

            <div>
                <Helmet>

                    <title> Details || Uttaran Library</title>

                </Helmet>
            </div>

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
                <button disabled={book.quantity <= 0} className={"btn  w-full mt-6"} onClick={() => document.getElementById('my_modal_5').showModal()}> Borrow </button>
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
                                    <input type="date" {...register("dateOfBorrow")} placeholder="" className="input input-bordered " required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date of Return</span>
                                    </label>
                                    <input type="date" {...register("dateOfReturn")} placeholder="" className="input input-bordered" required />
                                </div>

                                <div className="form-control  mt-6">
                                    <button disabled={book.quantity <= 0} className="btn btn-primary">Submit</button>
                                </div>

                            </form>

                            <form method="dialog">

                                <button className="btn w-full mt-6"> Close </button>
                            </form>


                        </div>
                    </div>
                </dialog>



            </div>

            <ToastContainer

                position="top-left"


            ></ToastContainer>

        </div>
    );
};

export default Details;