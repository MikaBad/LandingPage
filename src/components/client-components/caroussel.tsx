import { Carousel } from "primereact/carousel";
import React, { useState } from "react";
import { Button } from "primereact/button";
import styles from "../../../styles/carouselDemo.module.css";
import resto1 from "../../../public/assets/resto1.png";
import resto2 from "../../../public/assets/resto2.png";
import resto3 from "../../../public/assets/resto3.png";
import Image from "next/image";
import Favoris from "../../../public/assets/Favoris.svg";

const Caroussel = () => {
  // const [partenaires, setPartenaires] = useState([]);

  const listPartenaire = [
    {
      description: "Snack",
      image: resto1,
      nameRest: "Kebab House",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.6",
    },

    {
      description: "Cuisine Indienne",
      image: resto2,
      nameRest: "Ashura",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.6",
    },

    {
      description: "Cuisine Libanaise",
      image: resto3,
      nameRest: "Le Liban",
      deliveryFee: "2",
      deliveryTime: "0 à-20 min",
      distance: "OO.Okm",
      notation: "4.8",
    },

    {
      description: "Cuisine Africaine",
      image: resto3,
      nameRest: "Teranga",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9",
    },

    {
      description: "Cuisine du Monde",
      image: resto3,
      nameRest: "El Mondo",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9",
    },
    {
      description: "Snack",
      image: resto1,
      nameRest: "Kebab House",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.6",
    },

    {
      description: "Cuisine Indienne",
      image: resto2,
      nameRest: "Ashura",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.6",
    },

    {
      description: "Cuisine Libanaise",
      image: resto3,
      nameRest: "Le Liban",
      deliveryFee: "2",
      deliveryTime: "0 à-20 min",
      distance: "OO.Okm",
      notation: "4.8",
    },

    {
      description: "Cuisine Africaine",
      image: resto3,
      nameRest: "Teranga",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9",
    },

    {
      description: "Cuisine du Monde",
      image: resto3,
      nameRest: "El Mondo",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9",
    },
    {
      description: "Snack",
      image: resto1,
      nameRest: "Kebab House",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.6",
    },

    {
      description: "Cuisine Indienne",
      image: resto2,
      nameRest: "Ashura",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.6",
    },

    {
      description: "Cuisine Libanaise",
      image: resto3,
      nameRest: "Le Liban",
      deliveryFee: "2",
      deliveryTime: "0 à-20 min",
      distance: "OO.Okm",
      notation: "4.8",
    },

    {
      description: "Cuisine Africaine",
      image: resto3,
      nameRest: "Teranga",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9",
    },

    {
      description: "Cuisine du Monde",
      image: resto3,
      nameRest: "El Mondo",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9",
    },
    {
      description: "Cuisine du Monde",
      image: resto3,
      nameRest: "El Mondo",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9",
    },
  ];

  const responsiveOptions = [
    {
      breakpoint: "2000px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1800px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1536px",
      numVisible: 3,
      numScroll: 1,
    },

    {
      breakpoint: "1280px",
      numVisible: 3,
      numScroll: 1,
    },

    {
      breakpoint: "1230px",
      numVisible: 2,
      numScroll: 1,
    },

    {
      breakpoint: "1024px",
      numVisible: 2,
      numScroll: 1,
    },

    {
      breakpoint: "890px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "615px",
      numVisible: 2,
      numScroll: 1,
    },

    {
      breakpoint: "490px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "320px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (partenaires: any) => {
    return (
      <div className={styles.productitem}>
        <a href="/" className="">
          <Image
            src={partenaires.image}
            id="imagecarou"
            // className=" p-3 absolute  sm:w-25rem"
            className={styles.imagecarou}
            alt="..."
            style={{
              objectFit: "cover",
              objectPosition: "center",
              zIndex: "1",
              marginLeft: "2px",
              borderRadius: "20px",
              // width: "400px",
            }}
          />
        </a>
        <div className={styles.productitemcontent}>
          <span className={styles.cuisine}>{partenaires.description}</span>

          <span className={styles.favoris}>
            {" "}
            <Image src={Favoris} className="" alt="..."></Image>
            {/* <Button icon="pi pi-heart" className="p-button-secondary" /> */}
          </span>

          <div className={styles.content}>
            <h3 className={styles.name}>{partenaires.nameRest}</h3>
            <div className="-mt-3">
              <p>
                Frais de livraison {partenaires.deliveryFee}€ -{" "}
                {partenaires.deliveryTime} - {partenaires.distance}{" "}
                <span className={styles.note}>{partenaires.notation}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    // <div
    //   className="border-solid border-round-sm m-1 p-1 h-15rem
    //  w-24.5 relative mt-4.5 bg-white"
    // ></div>
    <div className={styles.carouseldemo}>
      <div className="card -mt-4">
        <Carousel
          value={listPartenaire}
          numVisible={3.5}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
          className="custom-carousel"
          circular
          autoplayInterval={3000}
          header={
            <h5 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl ml-7 text-white">
              {" "}
              Nos restaurants partenaires
            </h5>
          }
        />
      </div>

      <div className="card">
        <Carousel
          value={listPartenaire}
          numVisible={4}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className="custom-carousel -mt-5 "
          circular
          autoplayInterval={3500}
          itemTemplate={productTemplate}
          header={<h5></h5>}
        />
      </div>
    </div>
  );
};

export default Caroussel;
