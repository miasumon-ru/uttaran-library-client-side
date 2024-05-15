import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useState } from "react";



const BookCard = ({ book }) => {

    const [state, setState] = useState({
        review: '',
        rating: 0 // Initial value
      })

      console.log(state)

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


    const { image, authorName, bookName, category, ratings, _id } = book


    return (
        <div className="card bg-base-100 shadow-sm border p-4">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body space-y-4">

                <h2 className="card-title text-3xl"> {bookName} </h2>

                <p className='text-xl font-medium'> Author :  {authorName} </p>

                <div className='flex flex-col '>
                    <p className='text-[16px] '> Category : {category} </p>

                    <p className='text-[16px] flex flex-row gap-2 mt-4'> <span> Ratings</span> :
                    <Rating halfFillMode="box" style={{ maxWidth: 100 }} onChange={handleChange} readOnly value={ratings}></Rating>
                   
                     </p>
                </div>

                {/* {ratings}  */}



                <div className="card-actions">

                    <Link to={`/update/${_id}`}  className="btn w-full btn-primary"> Update </Link>
                    
                </div>

            </div>
        </div>
    );
};


BookCard.propTypes = {

    book: PropTypes.object.isRequired

}


export default BookCard;