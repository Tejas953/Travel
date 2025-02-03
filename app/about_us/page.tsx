//import Header from "@/components/header";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AboutUs from "@/app/about_us/Components/aboutus";








export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

        <Header/>
        <main className="flex-grow">

         <AboutUs/>
        
        </main>
        <Footer/>
    </div>

  );
}
