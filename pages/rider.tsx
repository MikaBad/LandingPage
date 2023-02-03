import Navbar from "@/src/components/shared-components/navbar";
import Footer from "@/src/components/shared-components/footer";
import HeaderL from "@/src/components/rider-components/headerrider";
import CardL from "@/src/components/rider-components/cardliv";

const Rider = () => {
  return (
    <div>
      <Navbar />
      <HeaderL />
      <CardL />
      <Footer />
    </div>
  );
};

export default Rider;
