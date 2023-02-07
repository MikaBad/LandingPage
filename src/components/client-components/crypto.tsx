import Image from "next/image";
import stats from "../../../public/assets/stats.png";
import Tel from "../../../public/assets/Tel1.png";
import logoB from "../../../public/assets/logoBlue.png";
import badge1 from "../../../public/assets/badge1.png";
import badge2 from "../../../public/assets/badge2.png";
import styles from "../../../styles/cryptoBlue.module.css";

const Crypto = () => {
  return (
    <div>
      <div className=" mt-8 sm:ml-8 ml-4 absolute">
        <h1>
          <span
            className="p-2 w-5 text-white 
            sm:text-4xl md:text-5xl lg:text-6xl text-3xl border-round"
            style={{ backgroundColor: "#D71023" }}
          >
            Payer un repas en crypto ?
          </span>
        </h1>
        <h1>
          <span
            className=" p-2 w-5 text-white sm:text-4xl
               md:text-5xl lg:text-6xl text-3xl border-round -rotate-15"
            style={{ backgroundColor: "#D71023" }}
          >
            Oui c'est possible !
          </span>
        </h1>
      </div>
      <div>
        <Image
        id="crypto"
          src={stats}
          className="w-full -z-1 "
          alt="..."
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div
        className="sm:w-8 w-19rem mx-auto xl:flex justify-content-between
         text-white border-round p-4 -mt-8 relative border-white h-16rem xl:h-12rem "
        style={{ backgroundColor: "#0A1639" }}
      >
        <p className="xl:text-xl sm:text-base text-base font-bold">
          Rechargez votre carte NOJYK virtuel via nos services <br />
          partenaires, et utiliser vos cryptomonnaie dans la vie <br /> de tous
          les jours.
        </p>
        <span
          className="h-2rem align-items-center flex sm:mr-8 mt-4 
           border-round p-5 font-bold text-center sm:justify-content-center"
          style={{ backgroundColor: "#3C7BF9" }}
        >
          Recharger mon solde en crypto
        </span>
      </div>
      <div className="sm:flex mt-8 sm:justify-content-center ">
        <div>
          <Image
            src={Tel}
            className="lg:w-12 md:w-11  hidden md:block"
            alt="..."
          />
        </div>
        <div className="ml-7 md:m-0 md:-ml-8 ">
          <Image
            src={logoB}
            className="sm:w-8rem sm:h-3rem lg:w-12rem
           lg:h-4rem w-8rem h-2rem  "
            alt="..."
          />

          <p
            className="lg:text-xl md:text-lg sm:text-base font-bold"
            style={{ color: "#0A1639" }}
          >
            Découvrez notre application <br />
            et commander votre premier repas <br /> grâce à nos services
          </p>

          <h2 className="sm:flex justify-content-between gap-3 sm:mt-6">
            <p>
              <a href="/">
                <Image
                  src={badge1}
                  className=" lg:w-12rem lg:h-4rem sm:w-8rem sm:h-3rem w-12rem h-4rem 
                  border-white border-solid border-round"
                  alt="..."
                />
              </a>
            </p>
            <p>
              <a href="/">
                <Image
                  src={badge2}
                  className=" lg:w-12rem lg:h-4rem sm:w-8rem sm:h-3rem w-12rem h-4rem 
                  border-white border-solid border-round"
                  alt="..."
                />
              </a>
            </p>
          </h2>
        </div>
        <div>
          <Image
            src={Tel}
            className="md:hidden sm:w-12 sm:h-31rem  w-12 h-28rem"
            alt="..."
          />
        </div>
      </div>
      <div className={styles.diagonal}></div>
    </div>
  );
};

export default Crypto;
