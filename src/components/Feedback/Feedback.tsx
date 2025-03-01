import { ImQuotesLeft } from "react-icons/im";

function Feedback() {
    return (
        <div className="">
            <div className="">
                <h1 className="text-center font-roboto font-medium text-5xl text-green-800">Feedback Corner</h1>
            </div>

            <div className="pt-28 pb-32 flex items-center justify-center gap-12">
                <div className="bg-white w-[434px] h-[253px] shadow-3xl hover:bg-green-200">
                    <ImQuotesLeft size={40} className="text-green-800 ml-5 mt-2" />
                    <h1 className="ml-5 font-roboto font-semibold text-2xl text-green-800 pt-5">Emily Wilson</h1>
                    <h3 className="ml-5 font-poppins font-medium text-base text-green-800 py-7">The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!</h3>
                </div>

                
                <div className="bg-white w-[434px] h-[253px] shadow-3xl hover:bg-green-200">
                    <ImQuotesLeft size={40} className="text-green-800 ml-5 mt-2" />
                    <h1 className="ml-5 font-roboto font-semibold text-2xl text-green-800 pt-5">Sarah Thompson</h1>
                    <h3 className="ml-5 font-poppins font-medium text-base text-green-800 py-7">I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!</h3>
                </div>

                <div className="bg-white w-[434px] h-[253px] shadow-3xl hover:bg-green-200">
                    <ImQuotesLeft size={40} className="text-green-800 ml-5 mt-2" />
                    <h1 className="ml-5 font-roboto font-semibold text-2xl text-green-800 pt-5">Olivia Martinez</h1>
                    <h3 className="ml-5 font-poppins font-medium text-base text-green-800 py-7">I had a great experience shopping on this <br></br> website. The clothes I bought are fashionable <br></br> and comfortable. Highly satisfied!</h3>
                </div>
            </div>
        </div>
    )
}

export default Feedback