import Image from "next/image";
// import PhC from "../../../public/assets/PhClient.png";
import Tom from "../../../public/assets/teamom.jpeg";
import Degun from "../../../public/assets/degun.jpg";
import PC from "../../../public/assets/PH.png";
import P1 from "../../../public/assets/P1.png";
import P2 from "../../../public/assets/P2.png";
import PR from "../../../public/assets/PhClient.png";
import PL from "../../../public/assets/PhL.png";
import styles from "../../../styles/nousN.module.css";

const Apropos = () => {
  return (
    <div>
      <div className="relative">
        <div className=" mt-8 sm:ml-8 ml-4 absolute">
          <h1 id="rotate5">
            <span
              className="p-2 w-5 text-white 
            sm:text-4xl md:text-5xl lg:text-6xl text-3xl border-round "
              style={{ backgroundColor: "#D71023" }}
            >
              Qui sommes
            </span>
          </h1>
          <h1 id="rotate6">
            <span
              className=" p-2 w-5 text-white sm:text-4xl
               md:text-5xl lg:text-6xl text-3xl border-round -rotate-15"
              style={{ backgroundColor: "#D71023" }}
            >
              nous ?
            </span>
          </h1>
        </div>
      </div>
      <div>
        <Image
          src={Degun}
          className="w-full"
          alt="..."
          style={{
            objectFit: "cover",
            objectPosition: "center",
            height: "800px",
          }}
        />
      </div>
      <div className="text-center" style={{ color: "#0a1639" }}>
        <h1 className="sm:text-4xl" style={{ color: "#0a1639" }}>
          {" "}
          Ce qui nous donne envie de se lever le matin
        </h1>
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
        <p className="sm:text-2xl text-xl">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          voluptatem voluptates dolorem quos eum voluptate id,
          <br />* quaerat quas beatae labore ipsa rem harum laborum? At aliquid
          nulla doloremque voluptate recusandae.
        </p>
        <p className="sm:text-2xl text-xl">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          voluptatem voluptates dolorem quos eum voluptate id,*
          <br /> quaerat quas beatae labore ipsa rem harum laborum? At aliquid
          nulla doloremque voluptate recusandae.
        </p>
      </div>
      <div className="align-content-around z-1 mt-8">
        <div className="lg:flex">
          <h1 className="text-2xl lg:hidden ml-8" style={{ color: "#0a1639" }}>
            Nojyk et son histoire
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
            src={P2}
            className="sm:ml-8 xl:w-max lg:h-30rem md:w-max mt-4 
          lg:mt-0 sm:w-30rem sm:h-25rem w-19rem h-18rem ml-2"
            alt=""
          />
          <div className=" lg:text-w sm:ml-8 ml-2" style={{ color: "#0a1639" }}>
            <h1 className="xl:text-6xl lg:text-4xl hidden lg:block">
              Nojyk et son histoire
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
        <div className="lg:flex justify-content-end mt-8 text-white">
          <div className="">
            {" "}
            <h1 className="lg:text-right xl:text-6xl text-2xl lg:text-4xl ml-8 lg:ml-4 ">
              Notre clientèle
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
            <p className="text-right text-2xl hidden lg:block ">
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
          <div className={styles.diagonalbox}>
            <div className={styles.contento}></div>
          </div>
          <Image
            src={P2}
            className="sm:ml-8 ml-2 xl:w-max lg:h-30rem md:w-max mt-4 
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
      <div
        className="align-content-around z-1"
        style={{ color: "#0a1639", marginTop: "100px" }}
      >
        <div className="lg:flex">
          <h1 className="text-2xl lg:hidden ml-8">
            Les restaurants et commerces partenaires
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
            src={P2}
            className="sm:ml-8 xl:w-max lg:h-30rem md:w-max mt-4 
          lg:mt-0 sm:w-30rem sm:h-25rem w-19rem h-18rem ml-2"
            alt=""
          />
          <div className=" lg:text-w sm:ml-8 ml-2" style={{ color: "#0a1639" }}>
            <h1
              className="xl:text-6xl lg:text-4xl hidden lg:block"
              style={{ color: "#0a1639" }}
            >
              Les restaurants et commerces partenaires
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
        <div className="lg:flex justify-content-end mt-8 text-white">
          <div className="">
            <h1 className="lg:text-right xl:text-6xl text-2xl lg:text-4xl ml-8 lg:ml-0 ">
              Les livreurs et livreuses
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
          <div className={styles.diagonalbox}>
            <div className={styles.contento}></div>
          </div>
          <Image
            src={P1}
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
        <div className="align-content-around z-1" style={{ color: "#0a1639" }}>
          <div className="lg:flex">
            <h1 className="text-2xl lg:hidden ml-8">Nos valeurs</h1>
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
              src={P2}
              className="sm:ml-8 xl:w-max lg:h-30rem md:w-max mt-4 
          lg:mt-0 sm:w-30rem sm:h-25rem w-19rem h-18rem ml-2"
              alt=""
            />
            {/* <div className={styles.diagonalbox}>
            <div className={styles.contento}></div>
          </div> */}
            <div
              className=" lg:text-w sm:ml-8 ml-2"
              style={{ color: "#0a1639" }}
            >
              <h1
                className="xl:text-6xl lg:text-4xl hidden lg:block"
                style={{ color: "#0a1639" }}
              >
                Nos valeurs
              </h1>
              {/* <Image
              src={PL}
              className="sm:ml-8  lg:w-4 md:w-max mt-4 
          lg:mt-0 sm:w-30rem sm:h-5rem w-19rem h-18rem ml-2 lg:h-28rem"
          style={{borderRadius:"20px"}}
              alt=""
            /> */}
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
        </div>
      </div>
    </div>
  );
};

export default Apropos;
