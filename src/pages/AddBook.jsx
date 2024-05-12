import { useForm } from "react-hook-form"

import formImg from '../assets/form.jpg'



const AddBook = () => {


    const {
        register,
        handleSubmit
    } = useForm()

    //   handle AddBook 

    const handleAddBook = (data) => {
        console.log(data)
    }


    return (

        <div className="flex flex-col lg:flex-row-reverse gap-8 my-10">
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
                            <input type="text"  {...register("name")} placeholder="Name" className="input input-bordered" required />
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

                            <select  className="border p-4 rounded-md" {...register("category")}>
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
                            <input type="number"  {...register("rating")} placeholder="Ratings" className="input input-bordered" required />
                        </div>


                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Book</button>
                    </div>

                </form>
            </div>
        </div>



    );
};

export default AddBook;