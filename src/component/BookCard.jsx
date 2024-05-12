import PropTypes from 'prop-types';


const BookCard = ({ book }) => {

    const { image, authorName, bookName, category, ratings } = book

    console.log(authorName, bookName)


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
                    <button className="btn w-full btn-primary ">Update</button>
                </div>

            </div>
        </div>
    );
};


BookCard.propTypes = {

    book: PropTypes.object.isRequired

}


export default BookCard;