import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const UpdateProduct = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    console.log(data);
    const {_id,product_name,brand_name,product_price,product_des,product_type,product_img,product_rating} =data;
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const product_name = form.name.value; 
        const brand_name = form.brand.value; 
        const product_price = form.price.value; 
        const product_des = form.short_des.value; 
        const product_type = form.type.value; 
        const product_img = form.url.value; 
        const product_rating = form.rating.value;
        
        
        
        const updatedDetails = {product_name,brand_name,product_price,product_des,product_type,product_img,product_rating};
        console.log(updatedDetails);

        fetch(`https://server-gnlpgh0dw-jahidkhan12xx.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount>0){
            let timerInterval
Swal.fire({
  title: 'Updating in Database!',
  html: 'I will take just <b></b> milliseconds.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
navigate(-1)
    
        }
      });

    }
    return (
        <div className=" min-h-screen container mx-auto text-center">
            <h2 className=" text-4xl font-bold text-[#F39F5A] underline text-center my-10">Update details for {data.product_name}</h2>
            <form onSubmit={handleSubmit}>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
            <input defaultValue={product_name} type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="product name .." required/>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Name</label>
            <select defaultValue={brand_name} name="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            
    <option value="intel">Intel</option>
    <option value="amd">AMD</option>
    <option value="asus">ASUS</option>
    <option value="nvidia">NVIDIA</option>
    <option value="microsoft">MICROSOFT</option>
    <option value="apple">APPLE</option>
  </select>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <input defaultValue={product_price} type="number" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="price"  required/>
        </div>  
        <div>
            <label defaultValue={product_des}  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</label>
            <input type="text" name="short_des" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required/>
        </div>
       
        
    </div>
    <div className="mb-6">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
        <select  name="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option value="desktop">Desktop Components</option>
    <option value="laptop">Laptop</option>
    <option value="headphone">Headphone</option>
    <option value="phone">Smart Phones</option>
    <option value="processor">Processor</option>
    <option value="graphics">Graphics Card</option>
  </select>
    </div> 
    <div className="mb-6">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
        <input defaultValue={product_img} type="url" name="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="http://www.absd.com" required/>
    </div> 
    <div className="mb-6">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
        <input defaultValue={product_rating} type="number" name="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
    </div> 
    
    <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    value ="Update Product"></input>
</form>

        </div>
    );
};

export default UpdateProduct;