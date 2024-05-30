import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useEffect, useState } from "react";
import BookCard from "../component/BookCard";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";
import { useState } from "react";
// import { useState } from "react";



// const Rating = require('react-rating');



const AllBooks = () => {


    const [search, setSearch] = useState('')



    const { user } = useAuth()

    // const [books, setBooks] = useState([])

    // useEffect(() => {

    //     axios.get('https://assignment-eleven-server-iota.vercel.app/books')
    //         .then(res => {
    //             console.log(res.data)
    //         })

    // }, [])



    const { data: books = [], isLoading } = useQuery({
        queryFn: () => getBooksData(),
        queryKey: ["booksData"]
    })

    // const { data: filteredData = [] } = useQuery({
    //     queryFn: () => getCustomizedData(),
    //     queryKey: ["customizedData"]
    // })


    // console.log(books)

    // console.log("filtered data is ", filteredData)

    // display book

    // const [displayBooks, setDisplayBooks] = useState(books)


    const getBooksData = async () => {

        const data = await axios.get(`https://assignment-eleven-server-iota.vercel.app/books?email=${user?.email}`, { withCredentials: true })
        return data.data

    }

    // const getCustomizedData = async () => {
    //     const data = await axios.get(`https://assignment-eleven-server-iota.vercel.app/filteredData?email=${user?.email}`, { withCredentials: true })
    //     return data.data
    // }

    if (isLoading) {
        return <div className="text-center flex flex-col justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>

        </div>
    }

    // handle Available Books


    // const handleAvailableBooks = () => {

    //     setDisplayBooks(filteredData)

    // }

    // const handleAvailableBooksWithNot = () => {
    //     setDisplayBooks(books)
    // }


    // handle Search 
    const handleSearch = event => {

        setSearch(event.target.value)

    }

    console.log(search)


    return (
        <div>


            <div>
                <div className="form-control">
                    <input onChange={handleSearch} type="text" placeholder="Search by Book Name" className="input input-bordered w-24 md:w-auto" />
                </div>
            </div>




            {/* <div className="max-w-52 mx-auto">

                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn max-w-52 m-1"> Show Available Books</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={handleAvailableBooks} className="btn" >Available Books</li>
                        <li onClick={handleAvailableBooksWithNot} className="btn mt-2">With Not Available Books</li>
                    </ul>
                </div>
            </div> */}

            <div>
                <Helmet>

                    <title> AllBooks || Uttaran Library</title>

                </Helmet>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {

                    books.filter((book)=> {
                        return search.toLowerCase() == '' ? book : book.bookName.toLowerCase().includes(search) 
                    }).map((book, index) => <BookCard book={book} key={index}></BookCard>)

                }
            </div>


        </div>
    );
};

export default AllBooks;