import Image from "next/image";
import React, { useState } from "react";
import PLiv1 from "../../../public/assets/PLiv1.png";
import PLiv2 from "../../../public/assets/PLiv2.png";
import liv1 from "../../../public/assets/liv1.png";
import liv2 from "../../../public/assets/liv2.png";
import liv3 from "../../../public/assets/liv3.png";
import liv4 from "../../../public/assets/liv4.png";
import blueLiv2 from "../../../public/assets/blueLiv2.png";
import styles from "../../../styles/cardLiv.module.css";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import Blue4 from "../../../public/assets/Blue4.png";

const CardLiv = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [text, setText] = useState("");

  const changeSubmit = (event: any) => {
    event.preventDefault();
    console.log("Resultat Form " + name + "  " + text + "  " + mail);
  };

  // const [input, setInput] = useState("");
  // const changeInput = (event: any) => {
  //   // console.log("Salut");

  //   setInput(event.target.value);
  // };

  return (
    <div>
      <div className="align-content-around z-1">
        <div
          className="lg:flex justify-content-end"
          style={{ marginTop: "200px" }}
        >
          <div className="sm:mr-8 mr-2">
            <h1
              className="lg:text-right xl:text-6xl lg:text-5xl
               ml-6 xl:-ml-8 text-2xl"
              style={{ color: "#0a1639" }}
            >
              Les livreurs chez Nojyk
            </h1>
            <span
              id="bluelineC"
              style={{
                // width: "200px",
                backgroundColor: "#D71023",
                height: "8px",
                borderRadius: "20px",
                // margin: "auto",
                display: "flex",
                marginTop: "-15px",
              }}
              className="justify-content-center"
            ></span>

            <p
              className="text-right text-2xl hidden lg:block"
              style={{ color: "#0a1639" }}
            >
              {" "}
              Commandez en Click & Collect !
            </p>
            <p
              className="text-right text-2xl hidden lg:block"
              style={{ color: "#0a1639" }}
            >
              Sélectionnez votre repas et choisissez
            </p>
            <p
              className="text-right text-2xl hidden lg:block"
              style={{ color: "#0a1639" }}
            >
              l'heure de retrait.
            </p>
          </div>
          <Image
            src={liv1}
            className="mt-6 lg:w-1 w-2 lg:h-0rem xl:h-30rem 
            md:h-25rem h-15rem ml-6 lg:ml-0"
            alt=""
          />
          <Image
            src={liv2}
            className="lg:w-1 w-2 lg:h-0rem xl:h-30rem md:h-25rem h-15rem"
            alt=""
          />
          <Image
            src={liv3}
            className="mt-6 lg:w-1 w-2 lg:h-0rem xl:h-30rem md:h-25rem h-15rem"
            alt=""
          />
          <Image
            src={liv4}
            className=" lg:w-1 w-2 lg:h-0rem xl:h-30rem md:h-25rem h-15rem"
            alt=""
          />
          <div className="sm:ml-8 ml-2">
            <p
              className="text-left sm:text-2xl text-xl lg:hidden"
              style={{ color: "#0a1639" }}
            >
              {" "}
              Commandez en Click & Collect !
            </p>
            <p
              className="text-left sm:text-2xl text-xl lg:hidden"
              style={{ color: "#0a1639" }}
            >
              Sélectionnez votre repas et choisissez
            </p>
            <p
              className="text-left sm:text-2xl text-xl lg:hidden"
              style={{ color: "#0a1639" }}
            >
              l'heure de retrait.
            </p>
          </div>
        </div>
        <div
          className="align-content-around z-1"
          style={{ marginTop: "150px" }}
        >
          <div className="lg:flex">
            <h1
              className="xl:text-6xl lg:text-5xl 
            text-white lg:hidden text-2xl ml-6 sm:ml-8"
            >
              Livraison
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
              src={PLiv1}
              className="sm:ml-8 mt-4 
          lg:mt-0 ml-2"
              alt=""
            />
            <div className={styles.diagonalbox}>
              <div className={styles.contento}></div>
            </div>
            <div className=" lg:text-white sm:ml-8 ml-2">
              <h1 className="xl:text-6xl lg:text-5xl hidden lg:block -mt-2">
                Livraison
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
                à domicile, sur votre lieu de travail, ...
              </p>
              <p className="sm:text-2xl text-xl text-white">
                ou vous le souhaitez !
              </p>
            </div>
          </div>
          <div
            id="remutitle575"
            className="lg:flex justify-content-end sm:mt-8  "
          >
            <div style={{ color: "#0a1639" }} className="hidden lg:block ">
              <h1
                id="remutxt"
                className="lg:text-right xl:text-6xl 
              lg:text-5xl ml-6 sm:ml-8 lg:ml-0 -mt-2 hidden lg:block "
              >
                La rémunération
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

              <p
                className="text-right text-2xl hidden lg:block"
                style={{ color: "#0a1639" }}
              >
                {" "}
                Commandez en Click & Collect !
              </p>
              <p
                className="text-right text-2xl hidden lg:block"
                style={{ color: "#0a1639" }}
              >
                Sélectionnez votre repas et choisissez
              </p>
              <p
                className="text-right text-2xl hidden lg:block"
                style={{ color: "#0a1639" }}
              >
                l'heure de retrait.
              </p>
              <Button
                id="btndevenir"
                className="flex sm:text-4xl text-white px-6 border-round 
              mt-8 text-center"
                style={{ backgroundColor: "#3C7BF9" }}
              >
                Devenir rider
              </Button>
            </div>
            <div id="remu320" className="lg:hidden">
              <h1
                id="remutxt"
                className="lg:text-right xl:text-6xl 
              lg:text-5xl text-2xl ml-6 sm:ml-8 lg:ml-0 -mt-2"
              >
                La rémunération
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
            </div>

            <Image
              id="card"
              src={PLiv2}
              className="sm:mr-8 ml-2 lg:ml-8 mt-4 
          lg:mt-0"
              alt=""
            />
            <div className="sm:ml-8 ml-2 lg:hidden">
              <p
                className="text-left sm:text-2xl text-xl  lg:hidden"
                style={{ color: "#0a1639" }}
              >
                {" "}
                Commandez en Click & Collect !
              </p>
              <p
                className="text-left sm:text-2xl text-xl lg:hidden"
                style={{ color: "#0a1639" }}
              >
                Sélectionnez votre repas et choisissez
              </p>
              <p
                className="text-left sm:text-2xl text-xl lg:hidden"
                style={{ color: "#0a1639" }}
              >
                l'heure de retrait.
              </p>
              <Button
                className="flex sm:text-4xl text-white px-6 border-round 
             justify-content-center mt-8 text-center ml-6"
                style={{ backgroundColor: "#3C7BF9" }}
              >
                Devenir rider
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-8">
        <div className="bluerider">
          <Image
            src={Blue4}
            className="w-full"
            alt="..."
            style={{
              objectFit: "cover",
              objectPosition: "center",
              backgroundRepeat: "no-repeat ",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              height: "900px",
              zIndex: "-1",
            }}
          />

          <form
            id="input"
            onSubmit={changeSubmit}
            className="lg:flex lg:ml-8 ml-3 "
            style={{ marginTop: "-680px" }}
          >
            <div className="xl:-mt-8">
              <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-white">
                Vous souhaitez avoir plus d'info ?
              </h1>
              <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-white ">
                Contactez-nous !
              </h2>
              <div>
                <span className="p-float-label">
                  <h5 className="text-white md:text-lg text-base">
                    {" "}
                    Prénom & Nom
                  </h5>
                  <InputText
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="name" className="text-sm mt-2">
                    Prénom & Nom
                  </label>
                </span>
              </div>
              <div>
                <span className="p-float-label">
                  <h5 className="text-white md:text-lg text-base">
                    Adresse e-mail
                  </h5>
                  <InputText
                    id="mail"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                  />
                  <label htmlFor="mail" className="text-sm mt-2">
                    Adresse e-mail
                  </label>
                </span>
              </div>
            </div>
            <div id="inputitle" className="xl:mt-6">
              <h5 className="text-white md:text-lg text-base">Votre message</h5>
              <InputTextarea
                id="inputinfos"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={5}
                cols={30}
                autoResize
                className="lg:h-20rem h-10rem "
                placeholder="Rédiger votre texte ici ..."
              />

              <Button
                id="infosbtn"
                type="submit"
                label="Valider"
                style={{ backgroundColor: "#3C7BF9" }}
                className={`p-button-primary border-primary
                 
                 border-round-left sm:border-round-left 
                  flex sm:flex-none absolute lg:static sm:mt-0 sm:block `}
                value="Valider"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardLiv;
