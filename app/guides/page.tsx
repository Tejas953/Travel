//import Header from "@/components/header";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GuidePage from "./components/guides";







export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

        <Header/>
        <main className="flex-grow">

        <GuidePage/>
        
        </main>
        <Footer/>
    </div>

  );
}
