import Image from "next/image";
import P1 from "../../../public/assets/P1.png";
import P2 from "../../../public/assets/P2.png";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const Cardwelcome = () => {
  // const header = (
    // <img
    //   alt="Card"
    //   src="images/usercard.png"
    //   onError={(e) => (e.target.src = "../../../public/assets/P1.png")}
    // />
  // )
  // const footer = (
  //     <span>
  //         <Button label="Save" icon="pi pi-check" />
  //         <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
  //     </span>
  // );
  return (
    <div className="align-content-around z-1" style={{ marginTop: "-300px" }}>
      <div className="lg:flex">
        <h1 className="xl:text-6xl lg:text-5xl text-white lg:hidden ml-8">
          Livraison
        </h1>
        <span
          style={{
            width: "200px",
            backgroundColor: "#3C7BF9",
            height: "8px",
            borderRadius: "20px",
            display: "flex",
            marginLeft: "0px",
            marginTop: "-15px",
          }}
          className="justify-content-center relative lg:hidden ml-8"
        ></span>

        <Image
          src={P1}
          className="sm:ml-8 xl:w-max lg:h-30rem md:w-max mt-4 
          lg:mt-0 sm:w-30rem sm:h-25rem w-19rem h-18rem ml-2"
          alt=""
        />
        <div className=" lg:text-white sm:ml-8 ml-2">
          <h1 className="xl:text-6xl lg:text-5xl hidden lg:block">Livraiso</h1>
          <span
            style={{
              width: "200px",
              backgroundColor: "#3C7BF9",
              height: "8px",
              borderRadius: "20px",
              display: "flex",
              marginLeft: "0px",
              marginTop: "-15px",
            }}
            className="justify-content-center relative hidden lg:block"
          ></span>
          <p className="sm:text-2xl text-xl">
            {" "}
            Entrez votre adresse et faites vous livrer,
          </p>
          <p className="sm:text-2xl text-xl">
            à domicile, sur votre lieu de travail, ...
          </p>
          <p className="sm:text-2xl text-xl">ou vous le souhaitez !</p>
        </div>
      </div>
      <div className="lg:flex justify-content-end mt-8">
        <div className="mr-" style={{ color: "#0a1639" }}>
          <h1 className="lg:text-right xl:text-6xl lg:text-5xl ml-8 lg:ml-0 ">
            Click & Collect
          </h1>
          <span
            style={{
              width: "200px",
              backgroundColor: "#3C7BF9",
              height: "8px",
              borderRadius: "20px",
              margin: "auto",
              display: "flex",
              marginTop: "-15px",
            }}
            className="justify-content-center relative lg:ml-8 ml-8"
          ></span>
          <p className="text-right text-2xl hidden lg:block">
            {" "}
            Commandez en Click & Collect !
          </p>
          <p className="text-right text-2xl hidden lg:block">
            Sélectionnez votre repas et choisissez
          </p>
          <p className="text-right text-2xl hidden lg:block">
            l'heure de retrait.
          </p>
        </div>
        <Image
          src={P2}
          className="lg:mr- sm:ml-8 ml-2 xl:w-max lg:h-30rem md:w-max mt-4 
          lg:mt-0 sm:w-30rem sm:h-25rem w-19rem h-18rem"
          alt=""
        />
        <div className="sm:ml-8 ml-2">
          <p className="text-left sm:text-2xl text-xl  lg:hidden">
            {" "}
            Commandez en Click & Collect !
          </p>
          <p className="text-left sm:text-2xl text-xl lg:hidden">
            Sélectionnez votre repas et choisissez
          </p>
          <p className="text-left sm:text-2xl text-xl lg:hidden">
            l'heure de retrait.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cardwelcome;
