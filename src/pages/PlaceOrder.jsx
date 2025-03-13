import { useState, useContext } from "react";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";

function PlaceOrder() {
  const { navigate } = useContext(ShopContext);
  const [method, setMethod] = useState("cod");

  return (
    <section>
      {/* Container */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-10 rounded-2xl my-6 max-xl:mt-8">
          <form className="flex flex-col xl:flex-row gap-20 xl:gap-28">
            <div className="flex flex-1 flex-col gap-3 text-[95%]">
              {/* Delivery information */}
              <h3 className="h3">Delivery information</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm outline-none w-1/2"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm outline-none w-1/2"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm outline-none "
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm outline-none "
              />
              <input
                type="text"
                name="street"
                placeholder="Street"
                required
                className="ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm outline-none "
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  className="ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm outline-none w-1/2"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  required
                  className="ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm outline-none w-1/2"
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  name="zipcode"
                  placeholder="Zip Code"
                  required
                  className="ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm outline-none w-1/2"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  required
                  className="ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm outline-none w-1/2"
                />
              </div>
            </div>

            {/* Cart Total */}
            <div className="flex flex-1 flex-col">
              <CartTotal />
              {/* Payment Method */}
              <div className="my-6">
                <h3 className="font-bold text-[20px] mb-5">Payment Method</h3>
                <div className="flex gap-3">
                  <button
                    className={`${
                      method === "stripe" ? "text-blue-600 !font-bold" : ""
                    } py-1 border border-slate-900/5 px-7 rounded-lg hover:bg-gray-800 hover:text-white
                    transition-all duration-300 bg-gray-200 cursor-pointer`}
                    onClick={() => setMethod("stripe")}
                  >
                    Stripe
                  </button>
                  <button
                    className={`${
                      method === "cod" ? "text-blue-600 !font-bold" : ""
                    } py-1 border border-slate-900/5 px-7 rounded-lg hover:bg-gray-800 hover:text-white
                    transition-all duration-300 bg-gray-200 cursor-pointer`}
                    onClick={() => setMethod("cod")}
                  >
                    Cash on Delivery
                  </button>
                </div>
              </div>
              <div>
                <button
                  className="text-[14px] font-medium bg-gray-800 text-white px-7 py-3 rounded-lg 
                transition-all cursor-pointer"
                  onClick={() => navigate("/order")}
                >
                  Place Order
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PlaceOrder;
