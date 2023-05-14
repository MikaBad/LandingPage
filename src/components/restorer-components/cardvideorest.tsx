import Image from "next/image";
import PLiv2 from "../../../public/assets/PLiv2.png";
import P2 from "../../../public/assets/P2.png";
import resto from "../../../public/assets/RestoM.png";
import And from "../../../public/assets/AndB.png";
import styles from "../../../styles/cardVideoRest.module.css";
import LogoContacts from "../client-components/logocontacts";

const CardVideoRest = () => {
  return (
    <div>
      <div className="align-content-around z-1">
        <div className="lg:flex" id="restcard">
          <h1
            id="titleRest"
            className="xl:text-6xl lg:text-5xl 
             lg:hidden text-2xl ml-6 sm:ml-8"
            // style={{ color: "#0a1639" }}
          >
            Rejoignez NOJYK et participez à la révolution de la livraison de
            repas à Marseille
          </h1>
          <span
            id="bluelineCL"
            style={{
              width: "110px",
              backgroundColor: "#3C7BF9",
              height: "8px",
              borderRadius: "20px",
              display: "flex",
              // marginLeft: "0px",
              marginTop: "-15px",
            }}
            className="justify-content-center relative lg:hidden sm:ml-8"
          ></span>

          <Image
            id="card"
            src={PLiv2}
            className="sm:ml-8  lg:ml-8 mt-4 
          lg:mt-0  ml-2"
            alt=""
          />
          {/* <div className={styles.diagonalbox}>
            <div className={styles.contento}></div>
          </div> */}
          <div className=" lg: sm:ml-8 ml-2" style={{ color: "#0a1639" }}>
            <h1 className="xl:text-6xl lg:text-4xl hidden lg:block -mt-2">
              Pourquoi rejoindre NOJYK pour votre livraison ?
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
            <div style={{ color: "#0a1639" }}>
              <p className="sm:text-2xl text-xl">
                {" "}
                " Nous comprenons les défis que vous rencontrez au quotidien
                pour gérer votre
              </p>
              <p className="sm:text-2xl text-xl ">
                entreprise, surtout lorsque cela implique la livraison de vos
                repas.
              </p>
              <p className="sm:text-2xl text-xl">
                Chez NOJYK, nous croyons qu'il est temps de changer cela et de
                créer une réelle
              </p>
              <p className="sm:text-2xl text-xl">
                alternative aux applications de livraison de repas
                traditionnelles.
              </p>
              <p className="sm:text-2xl text-xl">
                Nous croyons en une relation équitable avec nos restaurateurs
                partenaires. Et nous
              </p>
              <p className="sm:text-2xl text-xl">
                savons que chaque vente est importante pour vous, c'est pourquoi
                nous avons
              </p>
              <p className="sm:text-2xl text-xl">
                la commission la plus basse du marché.
              </p>
              <p className="sm:text-2xl text-xl">
                On ne cache aucun coût ni ne facturons de frais supplémentaires.
              </p>
              <p className="sm:text-2xl text-xl">
                Car notre objectif est de vous aider à augmenter vos ventes tout
                en maximisant
              </p>
              <p className="sm:text-2xl text-xl">
                vos bénéfices. Nous voulons que nos partenaires se sentent à
                l'aise en travaillant
              </p>
              <p className="sm:text-2xl text-xl">
                avec nous, sachant qu'ils obtiennent le meilleur service
                possible et qu'ils peuvent
              </p>
              <p className="sm:text-2xl text-xl">compter sur notre soutien."</p>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-content-end mt-8  ">
          <div id="AlltxtFr" style={{ marginTop: "100px" }}>
            <div
              id="txtFr"
              className=" hidden lg:block w-12 relative"
              // style={{ marginLeft: "90px" }}
            >
              <h1 className="text-center mt-8 ml-8 ">
                <span
                  id="txtchx1"
                  className="p-2 w-5
            sm:text-3xl md:4xl lg:text-3xl 
            xl:text-5xl text-xl border-round"
                  style={{
                    backgroundColor: "white",
                    color: "#3C7BF9",
                    // marginLeft: "200px",
                    textShadow: "3px 2px #D3D3D3	",
                  }}
                >
                  Faites le choix d'une app
                </span>
              </h1>
              <h1 className="text-center -mt-4 sm:-mt-3 md:-mt-3 mr-8">
                <span
                  id="txtchx1"
                  className=" p-2 w-5 
                  sm:text-3xl md:4xl lg:text-3xl xl:text-5xl text-xl border-round"
                  style={{
                    backgroundColor: "white",
                    color: "#3C7BF9",
                    // marginLeft: "150px",
                    textShadow: "3px 2px #D3D3D3	",
                  }}
                >
                  100% made in France,
                </span>
              </h1>
              <h1
                id="And2"
                className="text-center sm:-mt-3 -mt-4  "
                // style={{ marginLeft: "200px" }}
              >
                <Image
                  id="txtchx1"
                  src={And}
                  alt=""
                  className="sm:w-3rem sm:h-4rem ml-3 md:h-3rem 
                  sm:-my-4 md:-my-3 w-2rem h-2rem -my-2"
                ></Image>
                <span
                  id="txtchx1"
                  className="p-2 w-5 text-white 
                  sm:text-3xl md:4xl lg:text-3xl xl:text-5xl text-xl border-round"
                  style={{
                    backgroundColor: "#3C7BF9",
                    textShadow: "2px 2px #778899",
                  }}
                >
                  développé à Marseille !
                </span>
              </h1>
            </div>
          </div>
          <div>
            <Image
              id="card"
              src={resto}
              className="lg:mr-8 sm:ml-8 ml-2 mt-4 
          lg:mt-0 "
              alt="..."
            />
          </div>

          <div className="sm:ml-8 ml-2 lg:hidden ">
            <h1 className="text-center mt-8">
              <span
                className="p-2 w-5
            sm:text-4xl  lg:text-6xl text-xl border-round text-sha"
                style={{
                  backgroundColor: "white",
                  color: "#3C7BF9",
                  textShadow: "3px 2px #D3D3D3	",
                }}
              >
                Faites le choix d'une app
              </span>
            </h1>
            <h1 className="text-center -mt-4 sm:-mt-3 md:-mt-3 mr-8">
              <span
                className=" p-2 w-5
            sm:text-4xl  lg:text-6xl text-xl border-round"
                style={{
                  backgroundColor: "white",
                  color: "#3C7BF9",
                  textShadow: "3px 2px #D3D3D3	",
                }}
              >
                100% made in France,
              </span>
            </h1>
            <h1 className="text-center sm:-mt-3 -mt-4">
              <Image
                src={And}
                alt=""
                className="sm:w-3rem sm:h-3rem lg:h-4rem ml-3
                 sm:-my-3 md:-my-3 lg:-my-4 w-2rem h-2rem -my-2"
              ></Image>
              <span
                className="p-2 w-5 text-white 
            sm:text-4xl  lg:text-6xl text-xl border-round"
                style={{
                  backgroundColor: "#3C7BF9",
                  textShadow: "2px 2px #778899",
                }}
              >
                développé à Marseille
              </span>
            </h1>
          </div>
          <div className={styles.diagonalbox}>
            <div className={styles.contento}></div>
          </div>
        </div>

        <div className="lg:flex mt-8">
          <h1
            className=" text-white
           lg:hidden text-2xl ml-6 sm:ml-8"
            style={{ color: "#0a1639" }}
          >
            Respect des restaurateurs
          </h1>
          <span
            id="bluelineCL"
            style={{
              width: "110px",
              backgroundColor: "#3C7BF9",
              height: "8px",
              borderRadius: "20px",
              display: "flex",
              // marginLeft: "0px",
              marginTop: "-15px",
            }}
            className="justify-content-center relative lg:hidden sm:ml-8"
          ></span>

          <Image
            id="card"
            src={PLiv2}
            className="sm:ml-8 lg:ml-8 mt-4 
          lg:mt-0 ml-2"
            alt=""
          />

          <div className=" lg:text-white sm:ml-8 ml-2">
            <h1 className="xl:text-6xl lg:text-4xl text-2xl hidden lg:block -mt-2">
              Respect des restaurateurs
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
            <div id="colortxt" style={{ color: "#0a1639" }}>
              <p className="sm:text-2xl text-lg ">
                {" "}
                " Nous savons que votre restaurant est plus qu'un simple lieu de
                restauration
              </p>
              <p className="sm:text-2xl text-lg">
                c'est un lieu de passion, d'innovation et de communauté.
              </p>
              <p className="sm:text-2xl text-lg">
                Chez NOJYK, nous partageons cette même passion pour la
                nourriture et la culture
              </p>
              <p className="sm:text-2xl text-lg">marseillaise.</p>
              <p className="sm:text-2xl text-lg">
                C'est pourquoi nous avons créé la meilleure solution de
                livraison
              </p>
              <p className="sm:text-2xl text-lg">
                pour les restaurants marseillais. "
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-content-end mt-8">
          <div style={{ color: "#0a1639" }}>
            <h1
              id="titleRest0"
              className="lg:text-right xl:text-6xl 
              lg:text-4xl text-2xl ml-6 sm:ml-8  lg:ml-0 -mt-2"
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
              " En rejoignant la Révolution Nojyk, vous rejoignez une
              communauté.
            </p>
            <p className="text-right text-2xl hidden lg:block">
              Commandez en Click & Collect ! de restaurateurs et de clients
              engagés
            </p>
            <p className="text-right text-2xl hidden lg:block">
              pour une livraison plus responsable, plus juste et plus locale.
            </p>
            <p className="text-right text-2xl hidden lg:block">
              Alors, rejoignez-nous dès maintenant et faites partie de la
              révolution
            </p>
            <p className="text-right text-2xl hidden lg:block">
              de la livraison à Marseille. Des dizaines de restaurants
              marseillais font
            </p>
            <p className="text-right text-2xl hidden lg:block">
              déjà confiance à NOJYK pour la livraison et le click & collect.
            </p>

            <p className="text-right text-2xl hidden lg:block">
              Rejoignez-nous pour faire partie de cette communauté florissante
            </p>
            <p className="text-right text-2xl hidden lg:block">
              et voir votre entreprise prospérer et vos clients se régaler."
            </p>
          </div>
          <Image
            id="card"
            src={resto}
            className="sm:ml-8 ml-2  mt-4 
          lg:mt-0"
            alt=""
          />
          <div className="sm:ml-8 ml-2" style={{ color: "#0a1639" }}>
            <p className="text-left sm:text-2xl text-lg  lg:hidden">
              {" "}
              Commandez en Click & Collect !
            </p>
            <p className="text-left sm:text-2xl text-lg lg:hidden">
              " En rejoignant la Révolution Nojyk, vous rejoignez une
              communauté.
            </p>
            <p className="text-left sm:text-2xl text-lg lg:hidden">
              Commandez en Click & Collect ! de restaurateurs et de clients
              engagés
            </p>
            <p className="text-left sm:text-2xl text-lg lg:hidden">
              pour une livraison plus responsable, plus juste et plus locale.
            </p>
            <p className="text-left sm:text-2xl text-lg lg:hidden">
              Alors, rejoignez-nous dès maintenant et faites partie de la
              révolution
            </p>
            <p className="text-left sm:text-2xl text-lg lg:hidden">
              de la livraison à Marseille. Des dizaines de restaurants
              marseillais font
            </p>
            <p className="text-left sm:text-2xl text-lg lg:hidden">
              déjà confiance à NOJYK pour la livraison et le click & collect.
            </p>
            <p className="text-left sm:text-2xl text-lg lg:hidden">
              Rejoignez-nous pour faire partie de cette communauté florissante
            </p>
            <p className="text-left sm:text-2xl text-lg lg:hidden">
              et voir votre entreprise prospérer et vos clients se régaler."
            </p>
          </div>
        </div>
        <div className={styles.diagonal}>
          <div className={styles.content}>
            <div>
              <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white">
                On vous en dit plus en vidéo
              </p>
              <iframe
                id="video"
                src="https://www.youtube.com/embed/lHBixyYqt8Y"
                width="960"
                height="540"
                title="Nojyk3.0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                className={styles.video}
              ></iframe>
              <h2 className="text-white lg:text-xl md:text-sm sm:text-sm text-sm">
                <span> Vous aimez nos talents d'acteurs ? </span>
                <br></br>
                <span className="">
                  {" "}
                  Retrouvez nous sur les réseaux sociaux:{" "}
                </span>
              </h2>
              <div className="flex md:justify-content-end md:-mt-6 md:ml-8 sm: ">
                <LogoContacts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVideoRest;
