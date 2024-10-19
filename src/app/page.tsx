import About from "@/components/About";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LastBelag from "@/components/LastBelag";
import NavBar from "@/components/NavBar";
import Package from "@/components/Package";
import Plans from "@/components/Plans";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <NavBar />
      <Banner />
      <Services />
      <Package />
      <Plans />
      <About />
      <LastBelag />
      <Footer />
    </div>
  );
}
