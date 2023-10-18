import { useEffect, useState } from "react";
import BrandCard from "../BrandCard/BrandCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Brands = () => {

    const [brands,setBrands] = useState([]);
    useEffect(()=>{
        fetch("brands.json")
        .then(res=>res.json())
        .then(data=>setBrands(data))
    },[])
    return (
        <div  className=" min-h-screen container mx-auto my-60 p-2">
            <h2 className=" text-5xl font-black text-center text-[#F39F5A] my-20 underline">Our Brands</h2>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-7">
                {
                    brands.map((brand,idx)=> <BrandCard key={idx} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brands;