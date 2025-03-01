import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


function Selling() {
    return (
        <div className="">
            <div className="flex-col justify-center items-center">
                <h1 className="text-center font-roboto font-medium text-6xl text-green-800 pb-9">Best selling</h1>
                <h2 className="text-center font-poppins font-medium text-2xl text-green-800">Get in on the trend with our curated selection of best-selling styles.</h2>
            </div>

            <div className="flex justify-center items-center pt-20 gap-11 pb-20">
                <div className="bg-w w-[430px] h-[566px] rounded-3xl">
                    <a href="#">
                        <img src="./src/assets/clothes-1.png " alt="" />
                    </a>
                    <h1 className="text-center font-poppins font-semibold text-xl text-black pt-12">Regular Fit Long Sleeve Top</h1>
                    <div className="flex items-center gap-2">
                        <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-30">$38.99</span>
                        <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-20">5.0</span>
                        <FaStar size={24} className="pt-1 text-yellow-400" />
                    </div>
                </div>


                <div className="bg-w w-[430px] h-[566px] rounded-3xl">
                    <a href="#">
                        <img src="./src/assets/clothes-2.png " alt="" />
                    </a>
                    <h1 className="text-center font-poppins font-semibold text-xl text-black pt-12">Black Crop Tailored Jacket</h1>
                    <div className="flex items-center gap-2">
                        <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-30">$62.99</span>
                        <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-20">4.9</span>
                        <FaStar size={24} className="pt-1 text-yellow-400" />
                    </div>
                </div>

                <div className="bg-w w-[430px] h-[566px] rounded-3xl">
                    <a href="#">
                        <img src="./src/assets/clothes-3.png " alt="" />
                    </a>
                    <h1 className="text-center font-poppins font-semibold text-xl text-black pt-12">Textured Sunset Shirt</h1>
                    <div className="flex items-center gap-2">
                        <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-30">$49.99</span>
                        <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-20">5.0</span>
                        <FaStar size={24} className="pt-1 text-yellow-400" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center pt-32">
               <a href="#">
                <button className="pl-14 pr-20 py-3 font-poppins font-medium text-xl text-green-800 outline-2 outline-offset-2 outline-green-800">See all</button>
                <FaArrowRightLong className="relative left-35 bottom-8.5 text-green-800"/>
               </a>
            </div>
        </div>
    )
}

export default Selling