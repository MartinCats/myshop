import { useContext, useEffect, useState } from "react"
import Title from "./Title"
import { ShopContext } from "../context/ShopContext"
import Item from "./Item"

function NewArrivals() {

  const {products} = useContext(ShopContext) 
  const [newArrivals, setNewArrivals] = useState([])

  useEffect (()=> {
    const data = products.slice(0,10)
    setNewArrivals(data)
  },[products])

  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16"> 
        <Title title={'New Arrivals'} titleStyles={'text-center'}/>
        {/* container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {newArrivals.map((product)=>(
            <div key={product.id}>
              <Item product = {product}/>
            </div>
          ))}
        </div>
    </section>
  )
}

export default NewArrivals