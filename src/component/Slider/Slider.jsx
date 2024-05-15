
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// [
//     {
//         "img": "https://i.postimg.cc/Hx2dhWY6/Pride-and-Prejudice.jpg"     
//     },
//     {
//         "img": "https://i.postimg.cc/zDyqjNmF/To-Kill-a-Mockingbird.jpg"      
//     },
//     {
//         "img": "https://i.postimg.cc/VLM1xFkS/The-Lord-of-the-Rings.jpg"       
//     },
//     {
//         "img": "https://i.postimg.cc/XYkWJ7F4/The-Catcher-in-the-Rye.jpg"      
//     }
// ]



const Slider = () => {

    const {data : sliders = [], isLoading} = useQuery({
        queryFn : () => getSliders(),
        queryKey : ['slider']
    })



     const getSliders = async() => {
        const data = await axios.get('https://assignment-eleven-server-iota.vercel.app/slides')

        return data.data
     }
      

     if(isLoading) {
        return <div className="text-center flex flex-col justify-center items-center min-h-screen">
           <span className="loading loading-spinner loading-lg"></span>
             
             </div>
    }



    // console.log(sliders)


    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */}

                {
                    sliders.map((slider, index) => <SwiperSlide className='mt-10 border rounded-2xl p-4  flex md:flex-row flex-col gap-4' key={index}>

                        <div className='md:w-1/2'>
                            <h1 className=" text-2xl md:text-5xl font-bold"> 
                             Knowledge Doors <br />
                             Open to All </h1>
                        </div>

                        <div className='md:w-1/2'>
                            <img className='rounded-3xl' src={slider.img} alt="" />
                        </div>




                    </SwiperSlide>)
                }


            </Swiper>
        </>
    );
};

export default Slider;