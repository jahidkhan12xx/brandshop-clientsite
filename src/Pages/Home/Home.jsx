
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import Partners from "../../components/Partners/Partners";
import ContactUs from "../../components/Contact Us/ContactUs";
import Testimonial from "../../components/Testimonial/Testimonial";
import HotProducts from "../../components/HotProducts/HotProducts";
import AboutUs from "../../components/AboutUs/AboutUs";



const Home = () => {

   
    return (
        <div>
            
           <Banner></Banner>
           <Brands></Brands>
           <HotProducts></HotProducts>
           <Partners></Partners>
           <Testimonial></Testimonial>
           <AboutUs></AboutUs>
           <ContactUs></ContactUs>
           
        </div>
    );
};

export default Home;