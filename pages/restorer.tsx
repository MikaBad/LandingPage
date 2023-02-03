import Navbar from "@/src/components/shared-components/navbar";
import Footer from "@/src/components/shared-components/footer";
import HeaderRest from "@/src/components/restorer-components/headerrest";
import PresentationRest from "@/src/components/restorer-components/presentationrest";
import CardVideoRest from "@/src/components/restorer-components/cardvideorest";

const Restorer = () => {
  return (
    <div>
      <Navbar />
      <HeaderRest />
      <PresentationRest />
      <CardVideoRest />
      <Footer />
    </div>
  );
};

export default Restorer;
