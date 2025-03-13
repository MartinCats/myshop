import Title from "./Title";
import { TbArrowBackUp, TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";

function Features() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12 ">
      <Title title={"Features"} titleStyles={"text-center"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 *:bg-gray-200/50 rounded-xl">
        <div className="p-4 rounded-3xl flex items-center gap-3">
          <TbArrowBackUp className="font-bold text-[40px] text-orange-400" />
          <div>
            <h4 className="h4 capitalize">Easy Return</h4>
            <p>Hassle-free returns for your convenience.</p>
          </div>
        </div>
        <div className="p-4 rounded-3xl flex items-center gap-3">
          <TbTruckDelivery className="font-bold text-[40px] text-amber-400" />
          <div>
            <h4 className="h4 capitalize">Free delivery</h4>
            <p>Fast and reliable shipping at no extra cost.</p>
          </div>
        </div>
        <div className="p-4 rounded-3xl flex items-center gap-3">
          <RiSecurePaymentLine className="font-bold text-[40px] text-blue-400" />
          <div>
            <h4 className="h4 capitalize">secure payment</h4>
            <p>Safe and secure payments you can trust.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
