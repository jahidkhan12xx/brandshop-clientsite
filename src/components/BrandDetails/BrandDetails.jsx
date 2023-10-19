import { useLoaderData, useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import BrandDetailsFull from "../BrandDetailsFull/BrandDetailsFull";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const BrandDetails = () => {

    const [fData,setFData] = useState([]);

    const {id} = useParams();
    const data = useLoaderData();
    

    useEffect(()=>{
        const filtered = data.filter(da => da.brand_name == id);
        setFData(filtered)
        
    },[data,id])
    return (
        <div className=" my-16">
            {
                fData.length>0 ? <div>
                    <div className="">
                    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
      {
        fData.map((ds,idx)=><SwiperSlide key={idx}><img  className=" h-[50vh]" src={ds.product_img} alt="" />
        </SwiperSlide>)
      }
      ...
    </Swiper>
                </div>
                <h2 className=" md:text-5xl text-2xl font-black  my-20 text-center underline text-[#F39F5A]"> <p className=" uppercase">{id} Products</p>  </h2>
                <div className=" grid grid-cols-1 md:grid-cols-2 p-2 container mx-auto gap-7">
                {
                fData.map((prod,idx) => <BrandDetailsFull key={idx} prod={prod} id={id}></BrandDetailsFull>)
            }
                </div></div>  : <div><h2 className=" text-7xl font-extrabold text-center h-[53.7vh] flex justify-center items-center text-white">No Product Available</h2></div>
            }
        </div>
        
    );
};

export default BrandDetails;