import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";





const BorrowedBooks = () => {

    const { user } = useAuth()



    const { data: books = {}, isLoading, refetch } = useQuery({
        queryFn: () => getBorrowedBooks(),
        queryKey: ["borrow"]
    })

    console.log(books)

    // mutation of the data 

    const { mutateAsync } = useMutation({
        mutationFn: async ({ id }) => {

            console.log("id for delete", id)

            const { data } = await axios.delete(`https://assignment-eleven-server-iota.vercel.app/books/${id}`)

            console.log(data)

            toast.success("The book is returned successfully")


        },

        onSuccess: () => {

            refetch()

        }
    })

    const getBorrowedBooks = async () => {
        const data = await axios.get(`https://assignment-eleven-server-iota.vercel.app/borrowedBooks/?email=${user?.email}`)
        return data.data
    }

    if (isLoading) {
        return <div className="text-center flex flex-col justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>

        </div>
    }

    // handle Return

    const handleReturn = async (id, bookName) => {

        console.log(bookName)





        const { data } = await axios.patch(`https://assignment-eleven-server-iota.vercel.app/books/${bookName}`, { message: 'success' })

        console.log(data)


        await mutateAsync({ id })

    }





    return (

        <div>

            <div>
                <Helmet>

                    <title> Home || Uttaran Library</title>

                </Helmet>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">



                {
                    books.map(book => <div key={book._id} className="card border p-5 bg-base-100 shadow-md">
                        <figure><img src={book.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl mb-6"> {book.bookName} </h2>


                            <div className=" text-xl font-semibold space-y-4 text-[#888f91]">
                                <p> Category : {book.category} </p>
                                <div className="border border-dashed mt-2"> </div>
                                <p> Borrowed Date : {book.dateOfBorrow} </p>
                                <div className="border border-dashed mt-6"> </div>
                                <p> Return Date : {book.dateOfReturn} </p>


                            </div>


                            <div className="card-actions mt-8">
                                <button onClick={() => handleReturn(book._id, book.bookName)} className="btn w-full btn-primary">Return</button>
                            </div>
                        </div>
                    </div>)
                }

                <ToastContainer>

                </ToastContainer>


            </div>

        </div>




    );
};

export default BorrowedBooks;