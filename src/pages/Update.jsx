import { useForm } from "react-hook-form"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import updateImg from '../assets/update.jpg'
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";


const Update = () => {

    const navigate = useNavigate()

    const queryClient = useQueryClient()

    const {
        register,
        handleSubmit
    } = useForm()

    //   handle submit for update 

    const handleUpdate = async (data) => {
        console.log(data)

        const imageURL = data.imageURL
        const bookName = data.bookName
        const authorName = data.authorName
        const category = data.category
        const ratings = data.ratings

        console.log(bookName, ratings)


        const updatedBook = {

            imageURL,
            bookName,
            authorName,
            category,
            ratings,
            id
        }

        console.log(updatedBook)

        // update using tanstack query

        await mutateAsync(updatedBook)





        // update using axios


        //     axios.put("https://assignment-eleven-server-iota.vercel.app/booksUpdate", updatedBook)
        //         .then(res => {
        //             if (res.data.modifiedCount > 0) {

        //                 console.log(res.data)
        //                 toast.success(" Book is updated successfully ")

        //                 setTimeout(()=> {

        //                     navigate("/allBooks")

        //                 }, 2500)
        //             }
        //         })


    }




    const { id } = useParams()
    console.log(id)


    const { data: book = {}, isLoading, refetch } = useQuery({
        queryFn: () => getUpdateData(),
        queryKey: ["updatedData"]
    })

    console.log(book)

    // updating data 

    const { mutateAsync } = useMutation({
        mutationFn: async (updatedBook) => {

            console.log(updatedBook)

            const { data } = await axios.put("https://assignment-eleven-server-iota.vercel.app/booksUpdate", updatedBook)

            console.log(data)

        },

        onSuccess: () => {
            console.log("data updated")

            // ui refresh

            refetch()

            queryClient.invalidateQueries({ queryKey: ["booksData", "customizedData"] })

            toast.success(" Book is updated successfully ")

            setTimeout(() => {

                navigate("/allBooks")

            }, 2500)
        }
    })


    const getUpdateData = async () => {
        const data = await axios.get(`https://assignment-eleven-server-iota.vercel.app/books/${id}`)
        return data.data
    }

    if (isLoading) {
        return <div className="text-center flex flex-col justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>

        </div>
    }







    return (
        <div className="flex flex-col lg:flex-row-reverse gap-8 my-10">

            <div>
                <Helmet>

                    <title> Update || Uttaran Library</title>

                </Helmet>
            </div>

            <div className="flex flex-col items-center" >

                <img className="" src={updateImg} alt="" />

            </div>

            <div className="shadow-md bg-base-100">
                <form onSubmit={handleSubmit(handleUpdate)} className="card-body">

                    <h1 className="text-5xl text-center mb-10">Update The Book</h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" defaultValue={book.image}  {...register("imageURL")} placeholder="Image URL" className="input input-bordered" required />
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">




                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={book.bookName}  {...register("bookName")} placeholder="Name" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">





                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Author</span>
                            </label>
                            <input type="text" defaultValue={book.authorName}  {...register("authorName")} placeholder="Author Name" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>

                            <select className="border p-4 rounded-md" defaultValue={book.category} {...register("category")}>
                                <option value="Travel">Travel</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Life Style and Hobbies">Life Style and Hobbies</option>
                                <option value="Business and Finance">Business and Finance</option>
                            </select>

                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>


                            <input type="text" defaultValue={book.ratings}  {...register("ratings")} placeholder="Give ratings between 1 to 5" className="input input-bordered" required />
                        </div>


                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>

                </form>

                <ToastContainer
                    position='top-center'></ToastContainer>
            </div>
        </div>

    );
};

export default Update;