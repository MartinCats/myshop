
import { BsFire } from "react-icons/bs";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 max-xl:mt-8 mb-16">
      <div
        className="mx-auto max-w-[1440px] px-6 lg:px-12 bg-gray-300/50 h-[736px] 
        w-full rounded-tl-3xl rounded-tr-3xl mt-6 bg-[url('/bg.png')] bg-cover bg-center"
      >
        <div className="relative max-w-[777px] top-48">
          <h5 className="flex items-baseline gap-x-2 uppercase text-blue-500">
            MODERN COLLECTION <BsFire />
          </h5>
          <h1 className="h1 capitalize max-w-[611px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum
            vel eveniet!
          </h1>
          <p className="pl-2 max-w-lg mt-6 mb-8 border-l-5 border-l-blue-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
            explicabo soluta repellendus quidem nostrum consectetur molestias
            numquam fugiat aut assumenda.
          </p>
          <div className="flex gap-2 sm:gap-6 mt-14">
            <Link className="btn-dark max-sm:!p-3">Latest Products</Link>
            <Link className="btn-blue max-sm:!p-3">Popular Products</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero