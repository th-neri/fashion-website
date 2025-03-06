import { LiaFacebookSquare } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";


function Informations() {
    return (
        <div className="flex bg-green-800 bg-cover h-[599px]">
            <div className="pt-20 pl-44">
                <h1 className="pb-11 font-playfair font-bold text-5xl text-white">Rivo</h1>
                <h2 className="font-roboto font-medium text-2xl text-white">Social Media</h2>
                <div className="flex items-center pt-6 gap-4">
                    <a href="#">
                        <LiaFacebookSquare size={45} className="text-white" />
                    </a>

                    <a href="#">
                        <FiTwitter size={38} className="text-white" />
                    </a>

                    <a href="#">
                        <FaInstagram size={38} className="text-white" />
                    </a>
                </div>
            </div>

            <div className="flex-col pt-24 pl-56">
                <h3 className="font-roboto font-medium text-2xl text-white pb-6">SHOP</h3>
                <ul>
                    <a href="#">
                        <li className="font-poppins font-normal text-xl text-white/80 pb-6">Products</li>
                    </a>

                    <a href="#">
                        <li className="font-poppins font-normal text-xl text-white/80 pb-6">Overview</li>
                    </a>

                    <a href="#">
                        <li className="font-poppins font-normal text-xl text-white/80 pb-6">Pricing</li>
                    </a>

                    <a href="#">
                        <li className="font-poppins font-normal text-xl text-white/80">Releases</li>
                    </a>
                </ul>
            </div>

            <div className="flex-col pt-24 pl-36">
                <h3 className="font-roboto font-medium text-2xl text-white pb-6">COMPANY</h3>
                <ul>
                    <a href="#">
                        <li className="font-poppins font-normal text-xl text-white/80 pb-6">About Us</li>
                    </a>

                    <a href="#">
                        <li className="font-poppins font-normal text-xl text-white/80 pb-6">Contact</li>
                    </a>

                    <a href="#">
                        <li className="font-poppins font-normal text-xl text-white/80 pb-6">News</li>
                    </a>

                    <a href="#">
                        <li className="font-poppins font-normal text-xl text-white/80">Support</li>
                    </a>
                </ul>
            </div>

            <div className="flex-col pt-24 pl-36">
                <h3 className="font-robot font-medium text-2xl text-white pb-9">STAY UP TO DATE</h3>
            </div>
        </div>
    )
}

export default Informations