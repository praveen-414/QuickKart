import Hero from "../components/Hero";
import CategoriesTab from '../components/CategoriesTab'
import Products from "./Products";
import Services from "./Services";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoriesTab/>
      <Products />
      <Services />
     
      <ContactUs />
    </>
  );
};

export default Home;
