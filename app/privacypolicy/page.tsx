//import Header from "@/components/header";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PrivacyPolicy from "@/app/privacypolicy/Components/privacypolicy";







export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

        <Header/>
        <main className="flex-grow">
        <PrivacyPolicy/>
        </main>
        <Footer/>
    </div>
    

  );
}
