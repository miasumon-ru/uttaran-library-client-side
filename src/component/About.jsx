import about_img from '../assets/about_img2.jpg'


const About = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4 my-16'>

            <div className='flex flex-col justify-center'>

                <img src={about_img} alt="" />

            </div>

            <div className=' space-y-8 p-5'>

                <h1 className="text-5xl mt-6 mb-8">About Us</h1>

                <p className='text-xl text-[#8c9192]  '>
                    The Uttaran Library is a vibrant hub of knowledge and imagination, nestled in the heart of your community. With its inviting atmosphere and diverse collection of books, it serves as a haven for avid readers and curious minds alike.

                    <br />
                    <br />
                    
                    From timeless classics to contemporary bestsellers, the library offers a treasure trove of literary adventures waiting to be explored.

                    <br />
                    <br />
                    
                     
                    Whether you seek solace in the pages of a novel or embark on a quest for newfound wisdom, Uttaran Library welcomes you to embark on a journey of discovery and enlightenment. </p>

                    <button className='btn bg-green-600 hover:bg-green-700 text-white rounded-lg'>  Know More </button>

            </div>



        </div>
    );
};

export default About;