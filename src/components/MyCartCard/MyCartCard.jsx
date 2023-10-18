import Swal from 'sweetalert2'

const MyCartCard = ({prod,newData,setNewData}) => {

    const {_id,product_name,brand_name,product_price,product_des,product_type,product_img,product_rating} = prod;

    const handleDelete = id =>{
        
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:3000/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.deletedCount>0){
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remain = newData.filter(da => da._id !== id);
              setNewData(remain);
        }
        
        
      });


          
        }
      })
    }


    return (
        <div>
           
           <div className="relative flex flex-col text-white bg-hero-pattern  shadow-md rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-white bg-hero-pattern  h-96 rounded-xl bg-clip-border">
    <img
      src={product_img}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        {product_name}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        {product_price}
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-white opacity-75">
      {product_des}
    </p>
  </div>
  <div className="p-6 pt-0">
   
    <button onClick={()=>handleDelete(_id)}
      className="block mt-3  text-white bg-red-900 w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      X
    </button>
  </div>
</div>
        </div>
    );
};

export default MyCartCard;