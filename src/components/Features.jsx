import Title from './Title'
import {TbArrowBackUp , TbTruckDelivery} from "react-icons/tb"
import { RiSecurePaymentLine} from "react-icons/ri"

function Features() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12 ">
        <Title title={"Features"} titleStyles={"text-center"}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 *:bg-gray-200/50 rounded-xl">
            <div className="p-4 rounded-3xl">  
                <TbArrowBackUp className="font-bold text-[32px] text-orange-400"/>
                <h4 className="h4 capitalize">Easy Return</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius possimus ea cupiditate!</p>
            </div>
            <div className="p-4 rounded-3xl">  
                <TbTruckDelivery className="font-bold text-[32px] text-amber-400"/>
                <h4 className="h4 capitalize">Fast Delivery</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius possimus ea cupiditate!</p>
            </div>
            <div className="p-4 rounded-3xl">  
                <RiSecurePaymentLine className="font-bold text-[32px] text-blue-400"/>
                <h4 className="h4 capitalize">Secure Payment</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius possimus ea cupiditate!</p>
            </div>
        </div>
        
    </section>
  )
}

export default Features