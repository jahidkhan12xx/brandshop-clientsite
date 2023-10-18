import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const ProductDetails = () => {
    
    const data = useLoaderData();
   const {product_name,brand_name,product_price,product_des,product_type,product_img,product_rating} = data;

   const product = {product_name,brand_name,product_price,product_des,product_type,product_img,product_rating};
   console.log(product);
    
    const handleAdd = (id) =>{
        console.log(id);
        fetch("http://localhost:3000/cart",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(product),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }

        })

    }
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${data.product_img})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{data.product_name}</h1>
      <p className="mb-5">{product_des}</p>
      <button onClick={()=>handleAdd(data._id)} className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetails;