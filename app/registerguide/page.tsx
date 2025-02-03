//import Header from "@/components/header";
import Header from "@/components/header";
import Footer from "@/components/footer";
import RegisterGuide from "./components/registerguide";






export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

        <Header/>
        <main className="flex-grow">
          <RegisterGuide/>
        </main>
        <Footer/>
    </div>
    
  );
}


