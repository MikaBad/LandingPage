import styles from "../../../styles/videoClient.module.css";
import LogoContacts from "./logocontacts";
import Image from "next/image";
import BM from "../../../public/assets/BonneM.png";
import And from "../../../public/assets/And.png";
import Flag from "../../../public/assets/Flag.png";

const VideoClient = () => {
  return (
    <div className={styles.diagonal}>
      <div className={styles.content}>
        <div>
          <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl">
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
            <span className=""> Retrouvez nous sur les réseaux sociaux: </span>
          </h2>
          <div className="flex md:justify-content-end md:-mt-6 md:ml-8 sm: ">
            <LogoContacts />
          </div>
        </div>
      </div>
      <Image
        src={BM}
        className="w-full"
        alt="..."
        style={{ objectFit: "cover", objectPosition: "center" }}
      ></Image>
      <h1 className="text-center -mt-8">
        <span
          className="p-2 w-5 text-white 
            sm:text-4xl md:text-5xl lg:text-6xl text-xl border-round"
          style={{ backgroundColor: "#0A1639" }}
        >
          Faites le choix d'une app
        </span>
      </h1>
      <h1 className="text-center -mt-4 sm:-mt-3 md:-mt-4 mr-8">
        <span
          className=" p-2 w-5 text-white 
            sm:text-4xl md:text-5xl lg:text-6xl text-xl border-round"
          style={{ backgroundColor: "#0A1639" }}
        >
          100% made in France,
        </span>
      </h1>
      <h1 className="text-center sm:-mt-3 sm:ml-7 -mt-4">
        <Image
          src={And}
          alt=""
          className="sm:w-3rem sm:h-4rem ml-3 sm:-my-4 w-2rem h-2rem -my-2"
        ></Image>
        <span
          className="p-2 w-5 text-white 
            sm:text-4xl md:text-5xl lg:text-6xl text-xl border-round"
          style={{ backgroundColor: "#D71023" }}
        >
          développé à Marseille
        </span>
      </h1>
      <h1
        id="txtflag"
        className="lg:flex justify-content-between 
      align-items-center"
      >
        <Image
          id="flag"
          src={Flag}
          alt=""
          className="sm:w-20rem xl:w-3 sm:h-25rem ml-3 -my-4 hidden lg:block"
        ></Image>
        <span
          id="ftxt"
          className=" mt-8 sm:mt-6  text-center lg:text-left"
          style={{ color: "#0A1639" }}
        >
          <p className="md:text-xl sm:text-lg text-base">
            {" "}
            Les équipes Nojyk sont basée à Paris & Marseille.
          </p>
          <p className="md:text-xl sm:text-lg text-base ">
            {" "}
            Depuis ces villes nous développons une nouvelle application de
            commande en ligne,
          </p>
          <p className="md:text-xl sm:text-lg text-base">
            {" "}
            afin de vous offrir des repas plus respectueux des restaurateurs et
            livreurs
          </p>
        </span>
        <Image
          id="flag1"
          src={Flag}
          alt=""
          className="sm:w-20rem sm:h-auto ml-3 -my-4  lg:hidden"
        ></Image>
      </h1>
    </div>
  );
};

export default VideoClient;
