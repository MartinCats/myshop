import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import CartTotal from "../components/CartTotal";
import { FaRegWindowClose, FaMinus, FaPlus } from "react-icons/fa";

function Cart() {
  const {
    getCartCount,
    products,
    cartItems,
    currency,
    updateQuantity,
    navigate,
  } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const tempData = [];
    const initialQuantities = {};
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
          initialQuantities[`${items}-${item}`] = cartItems[items][item];
        }
      }
    }
    setCartData(tempData);
    setQuantities(initialQuantities);
  }, [cartItems]);

  const increment = (id, size) => {
    const key = `${id}-${size}`;
    const newValue = quantities[key] + 1;
    setQuantities((prev) => ({ ...prev, [key]: newValue }));
    updateQuantity(id, size, newValue);
  };

  const decrement = (id, size) => {
    const key = `${id}-${size}`;
    if (quantities[key] > 1) {
      const newValue = quantities[key] - 1;
      setQuantities((prev) => ({ ...prev, [key]: newValue }));
      updateQuantity(id, size, newValue);
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-10 rounded-2xl my-6 max-xl:mt-8">
          {/* Title */}
          <div className="flex items-baseline gap-x-4">
            <h3 className="h3">
              Cart <span className="text-blue-500">List</span>
            </h3>
            <p className="font-bold text-[18px]">{getCartCount()} items</p>
          </div>
          {/* Container */}
          <div className="mt-6">
            {cartData.map((item, i) => {
              const productData = products.find(
                (product) => product._id === item._id
              );
              const key = `${item._id}-${item.size}`;

              return (
                <div key={i} className="p-1 rounded-lg">
                  <div className="flex items-center gap-x-3">
                    <div className="flex items-start gap-6">
                      <img
                        src={productData.image[0]}
                        alt=""
                        className="w-16 sm:w-18 rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flex-between">
                        <h5 className="h5 !my-0 line-clamp-1">
                          {productData.name}
                        </h5>
                        <FaRegWindowClose
                          onClick={() => updateQuantity(item._id, item.size, 0)}
                          className="text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
                        />
                      </div>
                      <p className="font-bold text-[14px] my-0.5">
                        Size: {item.size}
                      </p>
                      <div className="flex-between">
                        <div className="flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden bg-gray-900/5">
                          <button
                            onClick={() => decrement(item._id, item.size)}
                            className="p-1.5 bg-white text-blue-500 rounded-full shadow-md  hover:bg-blue-500 hover:text-white cursor-pointer"
                          >
                            <FaMinus className="text-xs " />
                          </button>
                          <p className="px-2.5">{quantities[key]}</p>
                          <button
                            onClick={() => increment(item._id, item.size)}
                            className="p-1.5 bg-white text-blue-500 rounded-full shadow-md  hover:bg-blue-500 hover:text-white cursor-pointer"
                          >
                            <FaPlus className="text-xs " />
                          </button>
                        </div>
                        <h4 className="h4">
                          {productData.price}
                          {currency}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <hr className="mx-auto h-[1px] w-4/5 text-gray-900/10 mt-2.5" />
                </div>
              );
            })}
          </div>
          <div className="flex my-10 justify-end">
            <div className="w-full sm:w-[550px]">
              <CartTotal />
              <div className="flex justify-end">
                <button
                  className="text-white px-7 py-3 mt-7 rounded-lg transition-all bg-gray-800 font-medium 
              capitalize cursor-pointer hover:bg-blue-600"
                  onClick={() => navigate("/place-order")}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
