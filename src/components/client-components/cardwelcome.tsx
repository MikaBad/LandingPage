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
        <h1
          id="titleLiv"
          className="xl:text-6xl lg:text-5xl text-white lg:hidden ml-8"
        >
          Livraison
        </h1>
        <span
          id="underblue1"
          style={{
            width: "110px",
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
          id="card"
          src={P1}
          className="sm:ml-8 mt-4 
          lg:mt-0 ml-2"
          alt=""
        />
        {/* lg:h-30rem md:w-max sm:w-30rem sm:h-25rem w-19rem h-18rem */}
        <div id="txtLiv" className=" lg:text-white sm:ml-8 ml-2">
          <h1 className="xl:text-6xl lg:text-5xl hidden lg:block -mt-2">
            Livraison
          </h1>
          <span
            id="bluelineL"
            style={{
              width: "200px",
              backgroundColor: "#3C7BF9",
              height: "8px",
              borderRadius: "20px",
              display: "flex",
              // marginLeft: "0px",
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
      <div
        id="containerCli"
        className="lg:flex justify-content-end "
        style={{ marginTop: "125px" }}
      >
        <div style={{ color: "#0a1639" }}>
          <h1
            id="titleCli"
            className="lg:text-right xl:text-6xl lg:text-5xl ml-8 lg:ml-0 -mt-2 "
          >
            Click & Collect
          </h1>

          <span
            id="bluelineR"
            style={{
              // width: "200px",
              backgroundColor: "#3C7BF9",
              height: "8px",
              borderRadius: "20px",
              // margin: "auto",
              display: "flex",
              marginTop: "-15px",
            }}
            className="justify-content-center"
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
          id="card"
          src={P2}
          className="sm:ml-8 ml-2  mt-4 
          lg:mt-0"
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
