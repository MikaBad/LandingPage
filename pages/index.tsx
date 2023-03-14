import Navbar from "@/src/components/shared-components/navbar";
import Footer from "@/src/components/shared-components/footer";
import HeaderClient from "@/src/components/client-components/headerclient";
import Welcome from "@/src/components/client-components/welcome";
import Cardwelcome from "@/src/components/client-components/cardwelcome";
import Videoclient from "@/src/components/client-components/videoclient";
import Carou from "@/src/components/client-components/caroussel";
import Crypto from "@/src/components/client-components/crypto";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Client = () => {
  // const router = useRouter();
  // useEffect(() => {
  //   if (router.asPath === "/") {
  //     router.push("/client");
  //   }
  // }, []);
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
