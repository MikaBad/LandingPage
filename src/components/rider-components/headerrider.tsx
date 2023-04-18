import Image from "next/image";
import PhL from "../../../public/assets/PhL.png";
import styles from "../../../styles/headerRd.module.css";
import { Button } from "primereact/button";

const HeaderRider = () => {
  return (
    <div>
      <div className="relative">
        <div className=" mt-8 sm:ml-8 ml-4 absolute">
          <h1>
            <span
              className="p-2 w-5 text-white 
            sm:text-4xl md:text-5xl lg:text-6xl text-2xl border-round"
              style={{ backgroundColor: "#D71023" }}
            >
              Rejoignez la nouvelle
            </span>
          </h1>
          <h1>
            <span
              id="rotate3"
              className=" p-2 w-12 text-white sm:text-4xl 
               md:text-5xl lg:text-6xl text-2xl border-round ml-5 "
              style={{ backgroundColor: "#D71023" }}
            >
              génération de livreur
            </span>
          </h1>
        </div>
      </div>

      <div>
        <Image
          src={PhL}
          className="w-full"
          alt="..."
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className={styles.diagonal}>
        <div className={styles.content}>
          <Button
            id="btndevenir"
            label="Devenir rider"
            className="flex sm:text-4xl text-white p-4 border-round 
            md:w-5 justify-content-center"
            style={{ backgroundColor: "#3C7BF9" }}
          >
            {/* Devenir rider */}
          </Button>
          {/* <p className="align-item-center justify-content-center m-auto text-lg"> Votre nouveau service pour consommer les repas de votre choix </p> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderRider;
