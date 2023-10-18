import { Link } from "react-router-dom";


const BrandCard = ({brand}) => {
    console.log(brand);

    const {id,brand_name,brand_image} =brand;
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000">
            <Link to={`/brand/${id}`}>
            <div className="relative grid h-[50vh]  w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-[#F39F5A]">
  <div style={{backgroundImage: `url(${brand_image})`}} className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative p-6 px-6 py-14 md:px-12">
    
    <h5 className="block mb-4  text-xl antialiased font-bold leading-snug tracking-normal text-white ">
      {brand_name}
    </h5>
    
  </div>
</div>
            </Link>
         
        </div>
    );
};

export default BrandCard;