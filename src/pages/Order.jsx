import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
function Order() {
  const { products, currency } = useContext(ShopContext);

  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-10 rounded-2xl my-6 max-xl:mt-8">
          {/* Title */}
          <div>
            <h3 className="h3">
              Orders <span className="text-blue-500">List</span>
            </h3>
          </div>
          {/* Container */}
          {products.slice(1, 5).map((item, i) => (
            <div key={i}>
              <div className="py-4 text-gray-700 flex flex-col gap-4">
                <div className="flex gap-x-3 w-full">
                  {/* image */}
                  <div className="flex gap-6">
                    <img
                      src={item.image[0]}
                      alt=""
                      className="w-[77px] rounded-lg"
                    />
                  </div>
                  {/* order info */}
                  <div className="block w-full">
                    <h5 className="h5 capitalize line-clamp-1">{item.name}</h5>
                    <div className="flex-between">
                      <div>
                        <div className="flex items-center gap-x-2 sm:gap-x-3 ">
                          <div className="flex-center gap-x-2">
                            <h5 className="font-medium text-[14px]">Price: </h5>
                            <p>
                              {item.price} {currency}
                            </p>
                          </div>
                          <div className="flex-center gap-x-2">
                            <h5 className="font-medium text-[14px]">
                              Quantity:{" "}
                            </h5>
                            <p>{item.quantity} </p>
                          </div>
                          <div className="flex-center gap-x-2">
                            <h5 className="font-medium text-[14px]">Size: </h5>
                            <p>{item.size} </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <h5 className="font-medium text-[14px]">Date: </h5>
                          <p className="text-gray-400">
                            {new Date(item.date).toDateString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <h5 className="font-medium text-[14px]">Payment</h5>
                          <p className="text-gray-400">paymentMethod</p>
                        </div>
                      </div>
                      {/* Status and Button */}
                      <div className="flex flex-col xl:flex-row gap-3">
                        <div className="flex items-center gap-2">
                          <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                          <p>status</p>
                        </div>
                        <button className="font-medium text-xs bg-gray-700/90 text-white px-4 py-2 rounded-lg transition-all">
                          Track Orders
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mx-auto h-[1px] w-4/5 text-gray-900/10 mt-2 "/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Order;
