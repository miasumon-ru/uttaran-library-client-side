import About from "../component/About";
import Category from "../component/Category";
import HowWorks from "../component/HowWorks";
import Slider from "../component/Slider/Slider";

import { Helmet } from "react-helmet";



const Home = () => {
    return (
        <div>
            <div>
                <Helmet>

                    <title> Home || Uttaran Library</title>

                </Helmet>
            </div>

            <Slider></Slider>

            <Category></Category>

            <About></About>

            <HowWorks> </HowWorks>

        </div>
    );
};

export default Home;