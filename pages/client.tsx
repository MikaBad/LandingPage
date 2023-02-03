import Navbar from "@/src/components/shared-components/navbar";
import Footer from "@/src/components/shared-components/footer";
import HeaderClient from "@/src/components/client-components/headerclient";
import Welcome from "@/src/components/client-components/welcome";
import Cardwelcome from "@/src/components/client-components/cardwelcome";
import Videoclient from "@/src/components/client-components/videoclient";
import Carou from "@/src/components/client-components/caroussel";
import Crypto from "@/src/components/client-components/crypto";

const Client = () => {
  return (
    <div>
      <Navbar />
      <HeaderClient />
      <Welcome />
      <Cardwelcome />
      <Videoclient />
      <Carou />
      <Crypto />
      <Footer />
    </div>
  );
};

export default Client;
