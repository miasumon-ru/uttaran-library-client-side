import { useForm } from "react-hook-form"

import formImg from '../assets/form.jpg'
import axios from "axios";
import useAuth from "../hooks/useAuth";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useState } from "react";
import { Helmet } from "react-helmet";




const AddBook = () => {

    const [state, setState] = useState({
        review: '',
        rating: 0 // Initial value
    })

    // console.log(state)

    function handleChange(selectedValue) {
        // 1. Logs the selected rating (1, 2, 3...)
        // console.log(selectedValue)

        // 2. Do something with or without the value...

        // 3. Update Rating UI
        setState((prevState) => ({
            ...prevState,
            rating: selectedValue
        }))
    }

    const { user } = useAuth()

    const navigate = useNavigate()


    const {
        register,
        handleSubmit
    } = useForm()

    //   handle AddBook 

    const handleAddBook = (data, e) => {

        const image = data.imageURL
        const bookName = data.bookName
        const authorName = data.authorName
        const category = data.category
        const ratings = state.rating
        const quantity = parseInt(data.quantity)
        const shortDescription = data.shortDescription



        const newBook = {
            image,
            bookName,
            authorName,
            category,
            ratings,
            quantity: quantity,
            shortDescription
        }


        axios.post(`https://assignment-eleven-server-iota.vercel.app/books?email=${user?.email}`, newBook, { withCredentials: true })
            .then(res => {
                // console.log(res.data)

                if (res.data.insertedId) {
                    toast.success("The book is added successfully")

                    e.target.reset()

                    setTimeout(() => {

                        navigate("/allBooks")

                    }, 2500)
                }

            })


    }


    return (

        <div className="flex flex-col lg:flex-row-reverse gap-8 my-10">

            
                <Helmet>

                    <title> AddBook || Uttaran Library</title>

                </Helmet>
            


            <div className="flex flex-col items-center" >

                <img className="" src={formImg} alt="" />

            </div>

            <div className="shadow-md bg-base-100">
                <form onSubmit={handleSubmit(handleAddBook)} className="card-body">

                    <h1 className="text-5xl text-center mb-10">Add Book</h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text"  {...register("imageURL")} placeholder="Image URL" className="input input-bordered" required />
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text"  {...register("shortDescription")} placeholder="Short Description" className="input input-bordered" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("bookName")} placeholder="Name" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number"  {...register("quantity")} placeholder="Quantity Of Book" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Author</span>
                            </label>
                            <input type="text"  {...register("authorName")} placeholder="Author Name" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>

                            <select className="border p-4 rounded-md" {...register("category")}>
                                <option value="Travel">Travel</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Life Style and Hobbies">Life Style and Hobbies</option>
                                <option value="Business and Finance">Business and Finance</option>
                            </select>

                        </div>


                        <div className="form-control w-full">



                            <label className="label mb-2">
                                <span className="label-text">Ratings</span>
                            </label>
                            {/* <input type="number"  {...register("ratings")} placeholder="Ratings" className="input input-bordered" required /> */}

                            <Rating style={{ maxWidth: 150 }} onChange={handleChange} value={state.rating}></Rating>

                        </div>


                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Book</button>
                    </div>

                </form>

                <ToastContainer>

                </ToastContainer>
            </div>
        </div>



    );
};

export default AddBook;