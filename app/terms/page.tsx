//import Header from "@/components/header";
import Header from "@/components/header";
import Footer from "@/components/footer";
import TermsAndServices from "./components/terms and services";







export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

        <Header/>
        <main className="flex-grow">
          <TermsAndServices/>
        </main>
        <Footer/>
    </div>
    

  );
}
