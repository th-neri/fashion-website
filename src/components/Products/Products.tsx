function Products () {
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
        </div>
    )
}

export default Products