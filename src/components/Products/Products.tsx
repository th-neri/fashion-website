import { FaStar } from "react-icons/fa";

function Products() {
    return (
        <div className="">
            <div className="">
                <h1 className="text-center font-roboto font-medium text-5xl text-green-800 pb-16">Our Products</h1>

                <div className="pb-20 flex justify-center items-center gap-24 font-poppins font-medium text-xl text-black/80">
                    <nav>
                        <ul>
                            <a href="#">
                                <li className="hover:border-b-2 hover:text-green-800">SALE</li>
                            </a>
                        </ul>
                    </nav>


                    <nav>
                        <ul>
                            <a href="#">
                                <li className="hover:border-b-2 hover:text-green-800">HOT</li>
                            </a>
                        </ul>
                    </nav>

                    <nav>
                        <ul>
                            <a href="#">
                                <li className="hover:border-b-2 hover:text-green-800">NEW ARRIVALS</li>
                            </a>
                        </ul>
                    </nav>

                    <nav>
                        <ul>
                            <a href="#">
                                <li className="hover:border-b-2 hover:text-green-800">ACCESSORIES</li>
                            </a>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="flex items-center justify-center gap-9 pt-20">
                <div className="inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                    <a href="#">
                        <img src="./src/assets/products-1.png" alt="" />
                        <h1 className="text-center font-poppins font-semibold text-xl text-black pt-12">Spread Collar Shirt</h1>
                        <div className="flex items-center justify-center gap-2">
                            <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-5">$48.99</span>
                            <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-10">5.0</span>
                            <FaStar size={24} className="pt-1 text-yellow-400" />
                        </div>
                    </a>
                </div>

                
                <div className="inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                    <a href="#">
                        <img className="bg-black" src="./src/assets/products-2.png" alt="" />
                        <h1 className="text-center font-poppins font-semibold text-xl text-black pt-12">White Solid Formal Shirt</h1>
                        <div className="flex items-center justify-center gap-2">
                            <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-5">$39.00</span>
                            <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-10">4.9</span>
                            <FaStar size={24} className="pt-1 text-yellow-400" />
                        </div>
                    </a>
                </div>

                <div className="inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                    <a href="#">
                        <img src="./src/assets/products-3.png" alt="" />
                        <h1 className="text-center font-poppins font-semibold text-xl text-black pt-12">Shine On Me Blouse</h1>
                        <div className="flex items-center justify-center gap-2">
                            <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-5">$42.99</span>
                            <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-10">4.8</span>
                            <FaStar size={24} className="pt-1 text-yellow-400" />
                        </div>
                    </a>
                </div>

                
                <div className="inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                    <a href="#">
                        <img src="./src/assets/products-4.png" alt="" />
                        <h1 className="text-center font-poppins font-semibold text-xl text-black pt-12">Gray Solid Padded Jacket</h1>
                        <div className="flex items-center justify-center gap-2">
                            <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-5">$32.99</span>
                            <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-10">4.7</span>
                            <FaStar size={24} className="pt-1 text-yellow-400" />
                        </div>
                    </a>
                </div>

                
            </div>

            <div className="flex items-center justify-center gap-9 pt-20 pb-28">
                <div className="inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                    <a href="#">
                        <img src="./src/assets/products-5.png" alt="" />
                        <h1 className="text-center font-poppins font-semibold text-xl text-black pt-12">Printed Loose T-shirt</h1>
                        <div className="flex items-center justify-center gap-2">
                            <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-5">$39.99</span>
                            <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-10">5.0</span>
                            <FaStar size={24} className="pt-1 text-yellow-400" />
                        </div>
                    </a>
                </div>

                
                <div className="inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                    <a href="#">
                        <img src="./src/assets/products-6.png" alt="" />
                        <h1 className="text-center font-poppins font-semibold text-xl text-black pt-12">Summer Wind Crop Shirt</h1>
                        <div className="flex items-center justify-center gap-2">
                            <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-5">$39.95</span>
                            <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-10">4.7</span>
                            <FaStar size={24} className="pt-1 text-yellow-400" />
                        </div>
                    </a>
                </div>

                <div className="inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                    <a href="#">
                        <img src="./src/assets/products-7.png" alt="" />
                        <h1 className="text-center font-poppins font-semibold text-xl text-black pt-12">Tailored Jacket</h1>
                        <div className="flex items-center justify-center gap-2">
                            <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-5">$46.00</span>
                            <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-10">4.9</span>
                            <FaStar size={24} className="pt-1 text-yellow-400" />
                        </div>
                    </a>
                </div>

                
                <div className="inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                    <a href="#">
                        <img src="./src/assets/products-8.png" alt="" />
                        <h1 className="text-center font-poppins font-semibold text-xl text-black pt-12">Solid Round Neck T-shirt</h1>
                        <div className="flex items-center justify-center gap-2">
                            <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-5">$36.00</span>
                            <span className="font-poppins font-medium text-x1 pt-2 gap-20 ml-10">5.0</span>
                            <FaStar size={24} className="pt-1 text-yellow-400" />
                        </div>
                    </a>
                </div>

                
            </div>
        </div>
    )
}

export default Products