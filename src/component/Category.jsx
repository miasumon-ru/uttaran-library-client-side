import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

import axios from "axios";



const Category = () => {

    // const [categories, setCategories] = useState([])

    // useEffect(()=>{

    //     fetch('categories.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         // console.log(data)

    //         setCategories(data)
    //     })

    // },[])

    // console.log(categories)

    const {data : categories = [] , isLoading } =  useQuery({
        queryFn :  () => getData(),
        queryKey : ["sumon"]
    })

    console.log(categories)

    const getData = async () => {
        const data = await axios.get('categories.json')
        return data.data
    }

    if(isLoading) {
        return <div className="text-center flex flex-col justify-center items-center min-h-screen">
           <span className="loading loading-spinner loading-lg"></span>
             
             </div>
    }

   


    return (
        <div>

            <div className=" max-w-2xl mx-auto my-10">
                <h1 className=" text-3xl text-center md:text-5xl font-bold"> Choose Category </h1>
                <p className=" my-5 font-semibold text-center">
                    Explore Travel, Fiction, Lifestyle, and Finance ! Diverse reads for every interest, from adventures abroad to personal growth and financial savings.
                 </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mb-10 gap-4" >
                {

                    categories.map((category, index) => <div className="mt-8 rounded-2xl shadow-md flex flex-col items-center p-5" key={index} >
           
                         <img className="max-w-xs rounded-3xl" src={ category.img } alt="" />           

                        <h2 className="text-3xl font-bold mt-4">  { category.category} </h2>

     

                    </div>)

                }
            </div>



        </div>
    );
};

export default Category;