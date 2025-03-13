import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

// Components
import Footer from "../components/Footer";
import RelatedProducts from "../components/RelatedProducts";

// Icons
import { FaStar, FaHeart } from "react-icons/fa";
import { FaStarHalfStroke, FaTruckFast } from "react-icons/fa6";
import { TbShoppingBagPlus } from "react-icons/tb";

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    const selectedProduct = products.find((item) => item._id === productId);
    if (selectedProduct) {
      setProduct(selectedProduct);
      setImage(selectedProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!product) {
    return <div>...Loading</div>;
  }

  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 mt-8 xl:mt-6">
        {/* Product Data */}
        <div
          className="mx-auto max-w-[1440px] px-6 lg:px-12 flex 
                      gap-12 flex-col xl:flex-row bg-white py-16 rounded-2xl"
        >
          {/* Product img */}
          <div className="flex flex-1 gap-x-2 xl:flex-1">
            <div className="flex-center flex-col gap-[7px] flex-wrap">
              {product.image.map((item, i) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={i}
                  alt="productImg"
                  className="max-h-[89px] rounded-lg "
                />
              ))}
            </div>
            <div className="max-h-[377px] w-auto flex">
              <img src={image} alt="" className="rounded-xl " />
            </div>
          </div>
          {/* Product Info */}
          <div className="flex-[1.5] rounded-2xl px-7">
            <h3 className="h3 !my-2.5">{product.name}</h3>
            {/* rating price */}
            <div className="flex items-baseline gap-x-5 ">
              <h3 className="h3">
                {product.price}
                {currency}
              </h3>
              <div className="flex gap-x-2 text-amber-500 text-xl">
                <div className="flex flex-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <span>(132)</span>
              </div>
            </div>
            <p>{product.description}</p>
            <div className="flex flex-col gap-4 my-4 mb-5">
              <div className="flex gap-2">
                {[...product.sizes]
                  .sort((a, b) => {
                    const order = ["S", "M", "L", "XL", "XXL"];
                    return order.indexOf(a) - order.indexOf(b);
                  })
                  .map((item, i) => (
                    <button
                      onClick={() => setSize(item)}
                      key={i}
                      className={`${
                        item === size
                          ? "bg-slate-800 text-white cursor-pointer"
                          : "border-slate-900/5"
                      } border-[1.5px] border-slate-800 h-8 w-10 rounded-lg cursor-pointer`}
                    >
                      {item}
                    </button>
                  ))}
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <button onClick={()=>addToCart(product._id, size)}
                className="text-white px-7 py-3 rounded-lg bg-gray-800 font-medium 
              w-1/2 flex-center gap-x-2 capitalize cursor-pointer"
              >
                Add to cart <TbShoppingBagPlus/>
              </button>
              <button className="font-medium border border-slate-900/5 px-7 py-3 rounded-lg hover:bg-white transition-all duration-300 cursor-pointer">
                <FaHeart />
              </button>
            </div>
            <div className="flex items-center gap-x-2 mt-2">
              <FaTruckFast className="text-lg" />
              <span className="font-medium text-[14px]">
                Free Delivery on orders over 500 THB
              </span>
            </div>
            <hr className="my-4 w-2/3"/>
            <div className="mt-2 flex flex-col gap-1 "> 
              <p>Authentity You Can Trust</p>
              <p>Enjoy Cash on Delivery for Your Convenience</p>
              <p>Easy Returns and Exchanges Within 7 Days</p>
            </div>
          </div>
        </div>
        <RelatedProducts
          category={product.category}
          subCategory={product.subCategory}
        />
      </div>
      <Footer />
    </section>
  );
}

export default Product;
