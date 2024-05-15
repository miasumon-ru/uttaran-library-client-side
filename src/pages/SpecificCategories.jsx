import { Link, useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import axios from "axios";


const SpecificCategories = () => {


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


            {
                categories.map((category, index) => <div key={index} className="card bg-base-100 shadow-sm border p-4">
                    <figure><img src={category.image} alt="Shoes" /></figure>
                    <div className="card-body space-y-4">

                        <h2 className="card-title text-3xl"> {category.bookName} </h2>

                        <p className='text-xl font-medium'> Author :  {category.authorName} </p>

                        <div className='flex flex-row justify-between'>
                            <p className='text-[16px]'> Category : <span className=" p-2 rounded-2xl font-bold text-xl"> {category.category} </span> </p>

                            <p className='text-[16px]'> Ratings : {category.ratings} </p>
                        </div>



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