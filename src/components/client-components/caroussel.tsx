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
      notation: "4.6"
    },

    {
      description: "Cuisine Indienne",
      image: resto2,
      nameRest: "Ashura",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.6"
    },

    {
      description: "Cuisine Libanaise",
      image: resto3,
      nameRest: "Le Liban",
      deliveryFee: "2",
      deliveryTime: "0 à-20 min",
      distance: "OO.Okm",
      notation: "4.8"
    },

    {
      description: "Cuisine Africaine",
      image: resto3,
      nameRest: "Teranga",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9"
    },

    {
      description: "Cuisine du Monde",
      image: resto3,
      nameRest: "El Mondo",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9"
    },
    {
      description: "Snack",
      image: resto1,
      nameRest: "Kebab House",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.6"
    },

    {
      description: "Cuisine Indienne",
      image: resto2,
      nameRest: "Ashura",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.6"
    },

    {
      description: "Cuisine Libanaise",
      image: resto3,
      nameRest: "Le Liban",
      deliveryFee: "2",
      deliveryTime: "0 à-20 min",
      distance: "OO.Okm",
      notation: "4.8"
    },

    {
      description: "Cuisine Africaine",
      image: resto3,
      nameRest: "Teranga",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9"
    },

    {
      description: "Cuisine du Monde",
      image: resto3,
      nameRest: "El Mondo",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9"
    },
    {
      description: "Snack",
      image: resto1,
      nameRest: "Kebab House",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.6"
    },

    {
      description: "Cuisine Indienne",
      image: resto2,
      nameRest: "Ashura",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.6"
    },

    {
      description: "Cuisine Libanaise",
      image: resto3,
      nameRest: "Le Liban",
      deliveryFee: "2",
      deliveryTime: "0 à-20 min",
      distance: "OO.Okm",
      notation: "4.8"
    },

    {
      description: "Cuisine Africaine",
      image: resto3,
      nameRest: "Teranga",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9"
    },

    {
      description: "Cuisine du Monde",
      image: resto3,
      nameRest: "El Mondo",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9"
    },
    {
      description: "Cuisine du Monde",
      image: resto3,
      nameRest: "El Mondo",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9"
    }
  ];

  const [transformLevel, setTransformLevel] = useState(0)

  const ItemRestaurant = ({ item }: { item: any }) => {
    return (
      <div className={`${styles.productitem} restaurant-cards`} >
        <a href="/" className="">
          <Image
            src={item.image}
            id="imagecarou"
            // className=" p-3 absolute  sm:w-25rem"
            className={styles.imagecarou}
            alt="..."
            style={{
              objectFit: "cover",
              objectPosition: "center",
              zIndex: "1",
              marginLeft: "2px",
              borderRadius: "20px"
              // width: "400px",
            }}
          />
        </a>
        <div className={styles.productitemcontent}>
          <span className={styles.cuisine}>{item.description}</span>

          <span className={styles.favoris}>
            {" "}
            <Image src={Favoris} className="" alt="..."></Image>
            {/* <Button icon="pi pi-heart" className="p-button-secondary" /> */}
          </span>

          <div className={styles.content}>
            <h3 className={styles.name}>{item.nameRest}</h3>
            <div className="-mt-3">
              <p>
                Frais de livraison {item.deliveryFee}€ - {item.deliveryTime} -{" "}
                {item.distance}{"  "}
                <span className={styles.note}>{item.notation}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const ItemRestaurant2 = ({ item }: { item: any }) => {
    return (
      <div className={`${styles.productitem} restaurant-cards2`}  style={{transform: 'translateX(-50%)'}} >
        <a href="/" className="">
          <Image
            src={item.image}
            id="imagecarou"
            // className=" p-3 absolute  sm:w-25rem"
            className={styles.imagecarou}
            alt="..."
            style={{
              objectFit: "cover",
              objectPosition: "center",
              zIndex: "1",
              marginLeft: "2px",
              borderRadius: "20px"
              // width: "400px",
            }}
          />
        </a>
        <div className={styles.productitemcontent}>
          <span className={styles.cuisine}>{item.description}</span>

          <span className={styles.favoris}>
            {" "}
            <Image src={Favoris} className="" alt="..."></Image>
            {/* <Button icon="pi pi-heart" className="p-button-secondary" /> */}
          </span>

          <div className={styles.content}>
            <h3 className={styles.name}>{item.nameRest}</h3>
            <div className="-mt-3">
              <p>
                Frais de livraison {item.deliveryFee}€ - {item.deliveryTime} -{" "}
                {item.distance}{" "}
                <span className={styles.note}>{item.notation}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
              borderRadius: "20px"
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

  const allRestaurantsCards = listPartenaire.map(item => <ItemRestaurant item={item} />)
  const allRestaurantsCards2 = listPartenaire.map(item => <ItemRestaurant2 item={item} />)
  let transformValue = 0
  const maxTransformValue = (-(listPartenaire.length * 100))+100
  const handleNavigation = (direction : any) => {
    if (direction === 'next' && transformValue !== maxTransformValue) {
      transformValue -= 100
    } else if (direction === 'next' && transformValue === maxTransformValue) {
      transformValue = 0
    }
    

    if (direction === 'prev' && transformValue !== 100) {
      
      transformValue += 100
    } else if (direction === 'prev' && transformValue === 100) {
      transformValue = maxTransformValue
    }
    
    
    // document.querySelectorAll('.restaurant-cards').forEach(card => card.style.opacity = `translate(${transformLevel}%)`)
    document.querySelectorAll('.restaurant-cards').forEach((card: any) => card.style.transform = `translate(${transformValue}%)`)
    document.querySelectorAll('.restaurant-cards2').forEach((card: any) => card.style.transform = `translate(${transformValue-50}%)`)
    // console.log(document.querySelectorAll('.restaurant-cards'))
  }

  return (
    // <div
    //   className="border-solid border-round-sm m-1 p-1 h-15rem
    //  w-24.5 relative mt-4.5 bg-white"
    // ></div>
    <div className={styles.carouseldemo}>

      <h1>Nos restaurants partenaires</h1>
      
      <div className={styles.carousselNew}>
        <div className={styles.navigationBtnPrev} onClick={() => handleNavigation('prev')}><div className={styles.chevronContainer}><Image src='/assets/chevron.svg' width={25} height={25} alt="pictogram chevron" className={styles.chevronLeft} /></div></div>
        <div className={styles.itemsContainer}>{allRestaurantsCards}</div>
        <div className={styles.itemsContainer}>{allRestaurantsCards2}</div>

        

        <div className={styles.navigationBtnNext} onClick={() => handleNavigation('next')}><div className={styles.chevronContainer}><Image src='/assets/chevron.svg' width={25} height={25} alt="pictogram chevron" className={styles.chevronRight} /></div></div>
        {/* <ItemRestaurant item={listPartenaire[0]} /> */}
      </div>
      
    </div>
  );
};

export default Caroussel;
