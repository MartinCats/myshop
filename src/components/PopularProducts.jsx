// import { products } from "../assets/data";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { useContext, useEffect, useState } from "react";
import Item from "./Item"
function PopularProducts() {

    const {products} = useContext(ShopContext)
    const [popularProducts, setPopularProducts] = useState([]) 

    useEffect(()=>{
      const data = products.filter(item => item.popular)
      setPopularProducts(data.slice(0,5))
    },[products])

    return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16">
      <Title title={"Popular Products"} titleStyles={"text-center"} />
      {/* container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">{
        popularProducts.map((product => (
          <div key = {product._id}>
            <Item product={product}/>
          </div>
        )))
      }</div>
    </section>
  );
}

export default PopularProducts;
