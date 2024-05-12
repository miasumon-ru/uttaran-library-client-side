import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const BookCard = ({ book }) => {

    const { image, authorName, bookName, category, ratings, _id } = book


    return (
        <div className="card bg-base-100 shadow-sm border p-4">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body space-y-4">

                <h2 className="card-title text-3xl"> {bookName} </h2>

                <p className='text-xl font-medium'> Author :  {authorName} </p>

                <div className='flex flex-row justify-between'>
                    <p className='text-[16px]'> Category : {category} </p>

                    <p className='text-[16px]'> Ratings : {ratings} </p>
                </div>



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