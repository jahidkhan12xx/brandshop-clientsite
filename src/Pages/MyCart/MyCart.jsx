import { useLoaderData } from "react-router-dom";
import MyCartCard from "../../components/MyCartCard/MyCartCard";
import { useState } from "react";



const MyCart = () => {

  const data = useLoaderData();
  const [newData,setNewData] = useState(data);
  console.log(data);

  
    return (
        <div className="min-h-screen">
           <h2 className=" text-5xl text-center font-bold text-[#F39F5A] underline  my-20">My Cart</h2>
          <div className=" grid grid-cols-1 md:grid-cols-3 container mx-auto gap-6 p-2">
          {
            newData.map((prod,idx) => <MyCartCard key={idx} prod={prod} newData={newData} setNewData={setNewData}></MyCartCard>)
          }
          </div>
           
        </div>
    );
};

export default MyCart;