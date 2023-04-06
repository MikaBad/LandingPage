import Image from "next/image";
import stats from "../../../public/assets/Stats.png";
import Tel from "../../../public/assets/Tel1.png";
import logoB from "../../../public/assets/logoBlue.png";
import badgeG from "../../../public/assets/badgeGP.svg";
import badgeA from "../../../public/assets/badgeAS.svg";
import styles from "../../../styles/cryptoBlue.module.css";

const Crypto = () => {
  return (
    <div>
      <div id="cryptotxt" className="  sm:ml-8 ml-4 absolute">
        <h1>
          <span
            className="p-2 w-5 text-white 
            sm:text-3xl md:text-4xl lg:text-6xl text-xl border-round"
            style={{ backgroundColor: "#D71023" }}
          >
            Payer un repas en crypto ?
          </span>
        </h1>
        <h1>
          <span
            className=" p-2 w-5 text-white sm:text-3xl
               md:text-4xl lg:text-6xl text-xl border-round -rotate-15"
            style={{ backgroundColor: "#D71023" }}
          >
            Oui c'est possible !
          </span>
        </h1>
      </div>
      <div>
        <Image
          id="crypto1"
          src={stats}
          className="w-full -z-2 relative "
          alt="..."
          style={{
            objectFit: "cover",
            objectPosition: "center",
            // backgroundRepeat: "no-repeat ",
            // backgroundSize: "cover",
            // backgroundPosition: "bottom",
          }}
        />
      </div>
      <div
        id="recharger1"
        className=" mx-auto xl:flex justify-content-between
         text-white p-4 -mt-8 relative border-white h-16rem xl:h-12rem "
        style={{ backgroundColor: "#0A1639", borderRadius: "16px" }}
      >
        <p className="xl:text-xl sm:text-base text-sm font-bold hidden sm:block">
          Rechargez votre carte NOJYK virtuel via nos services <br />
          partenaires, et utiliser vos cryptomonnaie dans la vie <br /> de tous
          les jours.
        </p>
        <p className="xl:text-xl sm:text-base text-sm font-bold sm:hidden">
          <p>
            Rechargez votre carte NOJYK virtuel via nos services partenaires, et
            utiliser vos cryptomonnaie dans la vie de tous les jours.
          </p>
        </p>
        <span
          id="recharger2"
          className=" align-items-center flex sm:mr-8 mt-4 xl:text-3xl md:text-xl
           border-round p-5 font-bold text-center sm:justify-content-center"
          style={{ backgroundColor: "#3C7BF9" }}
        >
          <p className="mx-auto">Recharger mon solde en crypto</p>
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
           lg:h-4rem w-7rem h-2rem  "
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
                  src={badgeG}
                  className=" lg:w-12rem lg:h-4rem sm:w-8rem sm:h-3rem w-12rem h-4rem "
                  alt="..."
                />
              </a>
            </p>
            <p>
              <a href="/">
                <Image
                  src={badgeA}
                  className=" lg:w-12rem lg:h-4rem sm:w-8rem sm:h-3rem w-12rem h-4rem "
                  alt="..."
                />
              </a>
            </p>
          </h2>
        </div>
        <div>
          <Image
            src={Tel}
            className="md:hidden sm:w-12 sm:h-31rem p-2 w-20rem h-28rem
             md:ml-0"
            style={{ objectFit: "cover" }}
            alt="..."
          />
        </div>
      </div>
      <div className={styles.diagonal}></div>
    </div>
  );
};

export default Crypto;
