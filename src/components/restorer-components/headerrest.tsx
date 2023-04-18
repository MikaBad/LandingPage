import Image from "next/image";
import { Button } from "primereact/button";
import PhC from "../../../public/assets/PhClient.png";
import Link from "next/link";

const HeaderRest = () => {
  return (
    <div>
      <div className="relative">
        <div className=" mt-8 sm:ml-8 ml-4 absolute">
          <h1 id="rotate5">
            <span
              className="p-2 w-5 text-white 
            sm:text-4xl md:text-5xl lg:text-6xl text-2xl border-round "
              style={{ backgroundColor: "#D71023" }}
            >
              Qu'est ce qu'on mange
            </span>
          </h1>
          <h1 id="rotate6">
            <span
              className=" p-2 w-5 text-white sm:text-4xl
               md:text-5xl lg:text-6xl text-2xl border-round -rotate-15"
              style={{ backgroundColor: "#D71023" }}
            >
              ce soir ?
            </span>
          </h1>
        </div>
      </div>

      <div>
        <Image
          src={PhC}
          className="w-full"
          alt="..."
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="flex justify-content-end -mt-8 mr-8">
        {/* <Link href="/restorer"></Link> */}
        <Button
          id="button"
          label="Je m'inscris"
          className="sm:text-4xl text-white  border-round 
            md:w-5 justify-content-center"
        >
          {/* Je m'inscris */}
        </Button>
      </div>
    </div>
  );
};

export default HeaderRest;
