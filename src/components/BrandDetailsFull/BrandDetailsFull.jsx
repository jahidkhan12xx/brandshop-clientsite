import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'



const BrandDetailsFull = ({prod}) => {
    console.log(prod);
    
  return (
    <div>
        <div className="card card-side bg-base-100 shadow-xl flex h-full p-2">
  <figure className=" w-1/2"><img className=" w-full h-[37vh]" src={prod.product_img} alt="Movie"/></figure>
  <div className="card-body flex w-1/2">
    <div><h2 className="card-title">{prod.product_name}</h2>
    <p>Brand : {prod.brand_name}</p>
    <p>Description: {prod.product_des}</p>
    <p><Rating
      style={{ maxWidth: 180 }}
      value={prod.product_rating}
      readOnly
    /></p>
    <p>Price : {prod.product_price}$</p></div>
    <div className="card-actions justify-end my-8">
    <div className="btn-group btn-group-vertical lg:btn-group-horizontal flex  justify-start gap-5 w-full">
  <Link to={`/details/${prod._id}`}><button className="btn btn-primary">Details</button></Link>
  <Link to={`/update/${prod._id}`}><button className="btn btn-primary">Update</button></Link>
  
</div>
    </div>
  </div>
</div>

    </div>
  );
};

export default BrandDetailsFull;
