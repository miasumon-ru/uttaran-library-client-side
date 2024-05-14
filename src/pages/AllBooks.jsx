import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useEffect, useState } from "react";
import BookCard from "../component/BookCard";
import useAuth from "../hooks/useAuth";



const AllBooks = () => {

    const {user} = useAuth()

    // const [books, setBooks] = useState([])

    // useEffect(() => {

    //     axios.get('http://localhost:5000/books')
    //         .then(res => {
    //             console.log(res.data)
    //         })

    // }, [])

    const { data: books = [], isLoading } = useQuery({
        queryFn: () => getBooksData(),
        queryKey: ["booksData"]
    })

    console.log(books)

    const getBooksData = async () => {
        const data = await axios.get(`http://localhost:5000/books?email=${user?.email}` , {withCredentials : true})
        return data.data
    }

    if (isLoading) {
        return <div className="text-center flex flex-col justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>

        </div>
    }


    return (
        <div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {

                    books.map((book, index) => <BookCard book={book} key={index}></BookCard>)

                }
            </div>


        </div>
    );
};

export default AllBooks;