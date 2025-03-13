import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function CartTotal() {
  const { currency, getCartAmount, delivery_charges } = useContext(ShopContext);

  return (
    <div className="w-full">
      <h3 className="font-bold mb-5 text-[20px]">Cart Total</h3>
      <div className="flex-between pt-3">
        <h4 className="h4">SubTotal:</h4>
        <p className="font-bold text-[16px]">
          {getCartAmount()}.00
          {currency}
        </p>
      </div>
      <hr className="mx-auto h-[1px] w-full text-gray-900/10 my-1"/>
      <div className="flex-between pt-3">
        <h4 className="h4">Shipping Fee:</h4>
        <p className="font-bold text-[16px]">{getCartAmount() === 0 ? "0.00" : `${delivery_charges}.00${currency}`}</p>
      </div>
      <hr className="mx-auto h-[1px] w-full text-gray-900/10 my-1"/>
      <div className="flex-between pt-3">
        <h4 className="h4">Total:</h4>
        <p className="font-bold text-[16px]">{getCartAmount() === 0 ? 0.00 : getCartAmount() + delivery_charges}.00 {currency}</p>
      </div>
      <hr className="mx-auto h-[1px] w-full text-gray-900/10 my-1"/>
    </div>
  );
}

export default CartTotal;
