import { BiShoppingBag } from "react-icons/bi";
import Selling from "./components/Selling/Selling";

function App() {
  return (
    <div>
      <header className="bg-green-200 pt-14 px-44 justify-between flex">
        <div className="">
          <h1 className="flex items-center font-playfair font-bold text-4xl text-green-800">Rivo</h1>
        </div>

        <div className="font-poppins font-medium text-xl gap-14 text-green-800 mr-44 flex items-center">
          <nav>
            <ul>
              <a href="#">
                <li>HOME</li>
              </a>
            </ul>
          </nav>

          <nav>
            <ul>
              <a href="#">
                <li>SHOP</li>
              </a>
            </ul>
          </nav>

          <nav>
            <ul>
              <a href="#">
                <li>FEATURES</li>
              </a>
            </ul>
          </nav>

          <nav>
            <ul>
              <a href="#">
                <li>CONTACT</li>
              </a>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-14">
          <a href="#">
            <BiShoppingBag size={32} className="text-green-800" />
          </a>

          <a href="#">
            <button className="py-3 px-10 outline-2 outline-offset-2 outline-green-800 rounded-xs font-poppins font-medium text-xl text-green-800">LOGIN</button>
          </a>
        </div>
      </header>

      <section className="bg-green-200 flex justify-between pt-36 px-44 pb-40">
        <div className="pb-[251px]">
          <div className="pb-16">
            <h1 className="font-rufina font-bold text-8xl text-green-800 w-[649px] pb-7">Discover and Find Your Own Fashion!</h1>
            <span className="font-poppins font-medium text-2xl text-green-900/50">Explore our curated collection of stylish <br></br> clothing and accessories tailored to your <br></br> unique taste.</span>
          </div>
          <a className="" href="#">
            <button className="bg-green-800 px-14 py-5 font-poppins font-medium text-xl text-white">EXPLORE NOW</button>
          </a>
        </div>
        <div className="bg-w min-w-[570px] min-h-[717px] rounded-tl-[150px] rounded-tr-[70px] rounded-bl-[70px] rounded-br-[150px]">
          <img src="./src/assets/woman.png" alt="" />
        </div>
      </section>

      <section className="pt-28 flex justify-center">
        <Selling />
      </section>
    </div>
  )
}

export default App
