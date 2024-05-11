


const HowWorks = () => {
    return (
        <div className="max-w-xl mx-auto my-10">

            <div className=" my-10 ">
                <h1 className=" text-3xl text-center md:text-5xl font-bold"> How it Works ? </h1>

            </div>

            <div className=" my-16  text-center ">
                <ul className="steps steps-vertical">
                    <li className="step step-primary"> <span className="ml-4 text-xl font-medium ">Register</span> </li>
                    <li className="step step-primary" > <span className="ml-4 text-xl font-medium"> Choose plan </span> </li>
                    <li className="step step-primary"> <span className="ml-4 text-xl font-medium"> Receive The Books </span> </li>
                    <li className="step step-primary"> <span className="ml-4 text-xl font-medium"> Return The Books </span> </li>
                </ul>
            </div>

        </div>
    );
};

export default HowWorks;