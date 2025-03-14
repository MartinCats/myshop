import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div className="ring-1 ring-slate-900/5 rounded-xl bg-white overflow-hidden">
      <Link to={`/product/${product._id}`} className="flex-center relative">
        <img src={product.image[0]} alt="productImg" />
      </Link>
      <div className="p-3">
        <h4 className="h4 line-clamp-1 !my-0">{product.name}</h4>
        <div className="flex-between pt-1">
          <p className="font-bold">{product.category}</p>
          <h5 className="h5 text-blue-500 pr-2">B{product.price}.00</h5>
        </div>
        <p className="line-clamp-2 py-1 ">{product.description}</p>
      </div>
    </div>
  );
}

export default Item;
