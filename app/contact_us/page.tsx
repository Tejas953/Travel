//import Header from "@/components/header";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactUs from "./Components/contactus";



export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">

        <Header/>
        <main className="flex-grow">
         
         <ContactUs/>

        </main>
        <Footer/>
    </div>

  );
}
