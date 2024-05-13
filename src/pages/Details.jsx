import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";




const Details = () => {

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

                <button className="btn w-full mt-8"> Borrow </button>



            </div>

        </div>
    );
};

export default Details;