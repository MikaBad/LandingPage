import Image from "next/image";
import rest1 from "../../../public/assets/restau1.png";
import rest2 from "../../../public/assets/restau2.png";
import rest3 from "../../../public/assets/restau3.png";
import rest4 from "../../../public/assets/restau4.png";
import rest5 from "../../../public/assets/restau5.png";

const PresentationRest = () => {
  return (
    <div>
      <div className="mt-8 sm:ml-8 ml-5 xl:text-xl">
        <h1 style={{ color: "#0A1639" }}>Ils nous font déjà confiance :</h1>
      </div>
      <div className="hidden xl:block">
        <div className="flex justify-content-between p-7 ">
          <Image src={rest1} className="w-2 h-13rem" alt="..." />
          <Image src={rest2} className="w-2 h-13rem" alt="..." />
          <Image src={rest3} className="w-2 h-13rem" alt="..." />
          <Image src={rest4} className="w-2 h-13rem" alt="..." />
          <Image src={rest5} className="w-2 h-13rem" alt="..." />
        </div>
        <div className="flex justify-content-between p-7">
          <Image src={rest1} className="w-2 h-13rem" alt="..." />
          <Image src={rest2} className="w-2 h-13rem" alt="..." />
          <Image src={rest3} className="w-2 h-13rem" alt="..." />
          <Image src={rest4} className="w-2 h-13rem" alt="..." />
          <Image src={rest5} className="w-2 h-13rem" alt="..." />
        </div>
      </div>

      <div className="mt- xl:hidden md:block hidden w- sm:w- justify-content-between px-3">
        <span className="flex py-5 justify-content-between">
          <Image src={rest1} className="" alt="..." />
          <Image src={rest2} className="" alt="..." />
          <Image src={rest3} className="" alt="..." />
        </span>

        <span className="flex py-5 justify-content-between">
          <Image src={rest4} className="" alt="..." />
          <Image src={rest5} className="" alt="..." />
          <Image src={rest1} className="" alt="..." />
        </span>

        <span className="flex py-5 justify-content-between">
          <Image src={rest2} className="" alt="..." />
          <Image src={rest3} className="" alt="..." />
          <Image src={rest4} className="" alt="..." />
        </span>
      </div>
      <div className="mt- md:hidden p-1 w- sm:w- justify-content-between ">
        <span className="flex py-5 justify-content-between ">
          <Image src={rest1} className="w-6 p-1 sm:w-auto " alt="..." />
          <Image src={rest2} className="w-6 p-1  sm:w-auto " alt="..." />
        </span>

        <span className="flex py-5 justify-content-between">
          <Image src={rest3} className="w-6 p-1  sm:w-auto" alt="..." />
          <Image src={rest4} className="w-6 p-1  sm:w-auto" alt="..." />
        </span>

        <span className="flex py-5 justify-content-between">
          <Image src={rest5} className="w-6 p-1  sm:w-auto" alt="..." />
          <Image src={rest5} className="w-6 p-1  sm:w-auto" alt="..." />
        </span>
      </div>
    </div>
  );
};

export default PresentationRest;
