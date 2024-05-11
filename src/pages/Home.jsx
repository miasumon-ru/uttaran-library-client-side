import About from "../component/About";
import Category from "../component/Category";
import HowWorks from "../component/HowWorks";
import Slider from "../component/Slider/Slider";



const Home = () => {
    return (
        <div>

            <Slider></Slider>

            <Category></Category>

            <About></About>

            <HowWorks> </HowWorks>
           
        </div>
    );
};

export default Home;