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
        <div className="lg:flex mt-8">
          <h1
            id="titleRest"
            className="xl:text-6xl lg:text-5xl 
             lg:hidden text-2xl ml-6 sm:ml-8"
            // style={{ color: "#0a1639" }}
          >
            Livraison Nojyk
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
          <div className={styles.diagonalbox}>
            <div className={styles.contento}></div>
          </div>
          <div className=" lg:text-white sm:ml-8 ml-2">
            <h1 className="xl:text-6xl lg:text-4xl hidden lg:block -mt-2">
              Livraison Nojyk
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
            <p className="sm:text-2xl text-xl text-white">
              {" "}
              Entrez votre adresse et faites vous livrer,
            </p>
            <p className="sm:text-2xl text-xl  text-white">
              ?? domicile, sur votre lieu de travail, ...
            </p>
            <p className="sm:text-2xl text-xl text-white">
              ou vous le souhaitez !
            </p>
          </div>
        </div>
        <div className="lg:flex justify-content-end mt-8 ">
          <div>
            <div className=" hidden lg:block">
              <h1 className="text-center mt-8">
                <span
                  className="p-2 w-5 text-white 
            sm:text-3xl md:4xl lg:text-3xl 
            xl:text-5xl text-xl border-round"
                  style={{ backgroundColor: "#3C7BF9" }}
                >
                  Faites le choix d'une app
                </span>
              </h1>
              <h1 className="text-center -mt-4 sm:-mt-3 md:-mt-3 mr-8">
                <span
                  className=" p-2 w-5 text-white 
                  sm:text-3xl md:4xl lg:text-3xl xl:text-5xl text-xl border-round"
                  style={{ backgroundColor: "#3C7BF9" }}
                >
                  100% made in France,
                </span>
              </h1>
              <h1 className="text-center sm:-mt-3 ml-7 lg:ml-0 -mt-4">
                <Image
                  src={And}
                  alt=""
                  className="sm:w-3rem sm:h-4rem ml-3 sm:-my-4 w-2rem h-2rem -my-2"
                ></Image>
                <span
                  className="p-2 w-5 text-white 
                  sm:text-3xl md:4xl lg:text-3xl xl:text-5xl text-xl border-round"
                  style={{ backgroundColor: "#3C7BF9" }}
                >
                  d??velopp?? ?? Marseille
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

          <div className="sm:ml-8 ml-2 lg:hidden">
            <h1 className="text-center mt-8">
              <span
                className="p-2 w-5 text-white 
            sm:text-4xl md:text-5xl lg:text-6xl text-xl border-round"
                style={{ backgroundColor: "#3C7BF9" }}
              >
                Faites le choix d'une app
              </span>
            </h1>
            <h1 className="text-center -mt-4 sm:-mt-3 md:-mt-3 mr-8">
              <span
                className=" p-2 w-5 text-white 
            sm:text-4xl md:text-5xl lg:text-6xl text-xl border-round"
                style={{ backgroundColor: "#3C7BF9" }}
              >
                100% made in France,
              </span>
            </h1>
            <h1 className="text-center sm:-mt-3 -mt-4">
              <Image
                src={And}
                alt=""
                className="sm:w-3rem sm:h-4rem ml-3 sm:-my-4 w-2rem h-2rem -my-2"
              ></Image>
              <span
                className="p-2 w-5 text-white 
            sm:text-4xl md:text-5xl lg:text-6xl text-xl border-round"
                style={{ backgroundColor: "#3C7BF9" }}
              >
                d??velopp?? ?? Marseille
              </span>
            </h1>
          </div>
        </div>

        <div className="lg:flex mt-8">
          <h1
            className="
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
          <div className={styles.diagonalbox}>
            <div className={styles.contento}></div>
          </div>
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
            <p className="sm:text-2xl text-xl text-white">
              {" "}
              Entrez votre adresse et faites vous livrer,
            </p>
            <p className="sm:text-2xl text-xl  text-white">
              ?? domicile, sur votre lieu de travail, ...
            </p>
            <p className="sm:text-2xl text-xl text-white">
              ou vous le souhaitez !
            </p>
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
              Commandez en Click & Collect !
            </p>
            <p className="text-right text-2xl hidden lg:block">
              S??lectionnez votre repas et choisissez
            </p>
            <p className="text-right text-2xl hidden lg:block">
              l'heure de retrait.
            </p>
          </div>
          <Image
            id="card"
            src={resto}
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
              S??lectionnez votre repas et choisissez
            </p>
            <p className="text-left sm:text-2xl text-xl lg:hidden">
              l'heure de retrait.
            </p>
          </div>
        </div>
        <div className={styles.diagonal}>
          <div className={styles.content}>
            <div>
              <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white">
                On vous en dit plus en vid??o
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
                  Retrouvez nous sur les r??seaux sociaux:{" "}
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
