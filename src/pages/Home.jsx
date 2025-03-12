import Hero from "../components/Hero";
import Footer from "../components/Footer";
import NewArrivals from "../components/NewArrivals";
import PopularProduct from "../components/PopularProducts";
import Features from "../components/Features";
function Home() {
  return (
    <>
      <Hero />
      <NewArrivals/>
      <PopularProduct/>
      <Features/>
      <Footer />
    </>
  );
}

export default Home;
