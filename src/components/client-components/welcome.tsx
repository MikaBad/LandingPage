import Image from "next/image";
import blue1 from "../../../public/assets/Blue1.png";
import logoW from "../../../public/assets/logoWhite.png";
import styles from "../../../styles/welcomeClient.module.css";
import logoWhite from "../../../public/assets/logoWhite.png";

const Welcome = () => {
  return (
    <div className={styles.diagonal}>
      <div className={styles.content}>
        <p className="flex align-items-center sm:text-4xl ">
          Bienvenue chez{" "}
          <span className="sm:mt-2 ml-3 ">
            {" "}
            <Image
              src={logoWhite}
              className="sm:w-8rem sm:h-3rem w-8rem h-2rem  "
              alt="..."
            />
          </span>
        </p>
        {/* <p className="align-item-center justify-content-center m-auto text-lg"> Votre nouveau service pour consommer les repas de votre choix </p> */}
      </div>
      <div className={styles.content1}>
        <p className="sm:text-xl mt-5  text-center">
          {" "}
          Votre nouveau service pour consommer les repas de votre choix{" "}
        </p>
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
  );
};

export default Welcome;
