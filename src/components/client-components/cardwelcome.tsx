import Image from "next/image";
import P1 from "../../../public/assets/P1.png";
import P2 from "../../../public/assets/P2.png";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import styles from "../../../styles/welcomeClient.module.css";

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
    <div
      className="align-content-around z-1"
      style={{ marginTop: "-300px" }}
      id="cardclient"
    >
      <div className="lg:flex">
        <h1
          id="titleLiv"
          className="xl:text-6xl lg:text-5xl text-white lg:hidden ml-8"
        >
          On te livre sans te ruiner c’est Nojyk bébé
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
            On te livre sans te ruiner c’est Nojyk bébé
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
          <p className="sm:text-2xl text-xl line-height-1">
            {" "}
            On livre les meilleurs plats de nos restos préférés directement chez
            toi,
          </p>
          <p className="sm:text-2xl text-xl line-height-1">
            qui livre les plats de tes restos préférés chez toi !
          </p>
          <p className="sm:text-2xl text-xl line-height-1">
            Pourquoi payer plus cher alors que tu peux manger à Marseille moins
            cher ?
          </p>
          <p className="sm:text-2xl text-xl line-height-1">
            Ou que tu soit qui que tu soit on te livre , plage , bureau ,
          </p>
          <p className="sm:text-2xl text-xl line-height-1">
            maison bibliothèque , stade , chez toi, avec ta gadji ou ton gadjo.
          </p>
          <p className="sm:text-2xl text-xl line-height-1">
            Tous les restaurants sont valider et tester par la team NOJYK
          </p>
          <p className="sm:text-2xl text-xl line-height-1" style={{color:"#0a1639"}}>
            <br></br>
            On te fais manger ce qu’on mange et on ne te fera jamais manger 
          </p>
          <p className="sm:text-2xl text-xl line-height-1" style={{color:"#0a1639"}}>
          quelque chose qu’on ne mange pas
          </p>
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
            Avec le Clic & Collect Commande en ligne et récupère la en vip
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
          <p className="text-right text-2xl hidden lg:block line-height-1">
            {" "}
            Avec notre option de click and collect, tu peux commander en ligne
            et récupérer
          </p>
          <p className="text-right text-2xl hidden lg:block line-height-1">
            ta commande en quelques minutes seulement et sans file d’attente.
          </p>
          <p className="text-right text-2xl hidden lg:block line-height-1">
            Tu gagnes du temps et de l'argent car chez Nojyk on pense à toi et
            ton porte-monnaie !
          </p>
          <p className="text-right text-2xl hidden lg:block line-height-1">
            Avec notre système de commande en ligne, tu évites les files
            d'attente
          </p>
          <p className="text-right text-2xl hidden lg:block line-height-1">
            et les temps d'attente interminables. Et si tu choisis le click &
            collect,
          </p>
          <p className="text-right text-2xl hidden lg:block line-height-1">
            tu économises même les frais de livraison."
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
      <div>
             <div className={styles.contentW}>
        <p className="flex align-items-center sm:text-4xl xl:text-6xl" style={{ color: "#0a1639" }}>
        Notre demarche pour vous servir
          <span className="sm:mt-2 ml-3 ">
            {" "}
            
          </span>
        </p>
        {/* <p className="align-item-center justify-content-center m-auto text-lg"> Votre nouveau service pour consommer les repas de votre choix </p> */}
      </div>
    
      <span
        style={{
          width: "200px",
          backgroundColor: "#D71023",
          height: "10px",
          borderRadius: "20px",
          margin: "auto",
          display: "flex",
        }}
        className="justify-content-center relative"
      ></span>
      </div>
      <div className="align-content-around z-1" style={{ marginTop: "100px" }}>
        <div className="lg:flex">
          <h1
            id="titleLiv"
            className="xl:text-6xl lg:text-5xl text-white lg:hidden ml-8"
          >
            On te livre sans te ruiner c’est Nojyk bébé
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
            <h1
              className="xl:text-6xl lg:text-5xl hidden lg:block -mt-2"
              style={{ color: "#0A1639" }}
            >
              Révélations choc : pourquoi Nojyk est votre solution économique
              pour commander en ligne"
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
            <div style={{ color: "#0A1639" }}>
              <p className="sm:text-2xl text-xl line-height-1 ">
                {" "}
                Saviez-vous que lorsque vous commandez sur une plateforme de
                livraison,
              </p>
              <p className="sm:text-2xl text-xl line-height-1">
                vous payez en moyenne plus de 30 % de plus que le prix affiché
                chez le restaurateur,
              </p>
              <p className="sm:text-2xl text-xl line-height-1">
                sans même compter les frais de service et de livraison ? Et le
                pire,c'est que cet argent
              </p>
              <p className="sm:text-2xl text-xl line-height-1">
                ne va ni dans la poche du restaurateur, ni dans celle du
                livreur.
              </p>
              <p className="sm:text-2xl text-xl line-height-1" style={{ color: "white" }}>
                <br></br>  <br></br>  <br></br>  <br></br>
                Avec Nojyk, nous avons décidé de changer cela en proposant des
                frais de commission équitables
              </p>
              <p className="sm:text-2xl text-xl line-height-1" style={{ color: "white" }}>
                pour les restaurants et une rémunération juste pour les
                livreurs. Ainsi, vous pouvez
              </p>
              <p className="sm:text-2xl text-xl line-height-1" style={{ color: "white" }}>
                soutenir votre restaurant préféré tout en économisant de
                l'argent sur votre commande.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardwelcome;
