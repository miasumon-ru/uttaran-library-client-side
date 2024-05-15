import { Link, useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import axios from "axios";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useState } from "react";
import { Helmet } from "react-helmet";


const SpecificCategories = () => {

    const [state, setState] = useState({
        review: '',
        rating: 0 // Initial value
    })

    console.log(state)

    function handleChange(selectedValue) {
        // 1. Logs the selected rating (1, 2, 3...)
        console.log(selectedValue)

        // 2. Do something with or without the value...

        // 3. Update Rating UI
        setState((prevState) => ({
            ...prevState,
            rating: selectedValue
        }))
    }



    const { category } = useParams()

    console.log(category)

    const { data: categories = [], isLoading } = useQuery({
        queryFn: () => getSpecificCategories(),
        queryKey: ["specificCategories"]
    })

    console.log(categories)

    const getSpecificCategories = async () => {
        const data = await axios.get(`https://assignment-eleven-server-iota.vercel.app/specificCategories/${category}`)
        return data.data
    }

    if (isLoading) {
        return <div className="text-center flex flex-col justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>

        </div>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <Helmet>

                    <title> SpecificCategories || Uttaran Library</title>

                </Helmet>

            {
                categories.map((category, index) => <div key={index} className="card bg-base-100 shadow-sm border p-4">
                    <figure><img src={category.image} alt="Shoes" /></figure>
                    <div className="card-body space-y-4">

                        <h2 className="card-title text-3xl"> {category.bookName} </h2>

                        <p className='text-xl font-medium'> Author :  {category.authorName} </p>

                        <div className='flex flex-row justify-between'>
                            <p className='text-[16px]'> Category : <span className=" p-2 rounded-2xl font-bold text-xl"> {category.category} </span> </p>

                            <p className='text-[16px] flex flex-row gap-3 items-center justify-center'> Ratings :   <Rating halfFillMode="box" style={{ maxWidth: 100 }} onChange={handleChange} readOnly value={category.ratings}></Rating>

                            </p>
                        </div>

                        {/* {category.ratings} */}



                        <div className="card-actions">

                            <Link to={`/details/${category._id}`} className="btn w-full btn-primary"> Details </Link>

                        </div>

                    </div>
                </div>)
            }





        </div>
    );
};

export default SpecificCategories;