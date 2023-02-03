import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Image from "next/image";
import PH from "../../../public/assets/PH.png";

const HeaderClient = () => {
  const [input, setInput] = useState("");
  const changeInput = (event: any) => {
    // console.log("Salut");

    setInput(event.target.value);
  };

  const changeSubmit = (event: any) => {
    event.preventDefault();
    console.log("Resultat Form " + input);
  };

  return (
    <div>
      <div className="relative">
        <div className=" mt-8 sm:ml-8 ml-4 absolute">
          <h1 id="rotate1">
            <span
              className="p-2 w-5 text-white 
            sm:text-4xl md:text-5xl lg:text-6xl text-3xl border-round"
              style={{ backgroundColor: "#D71023" }}
            >
              Qu'est ce qu'on mange
            </span>
          </h1>
          <h1 id="rotate2">
            <span
              className=" p-2 w-5 text-white sm:text-4xl
               md:text-5xl lg:text-6xl text-3xl border-round -rotate-15"
              style={{ backgroundColor: "#D71023" }}
            >
              ce soir ?
            </span>
          </h1>
        </div>
      </div>
      <div>
        <Image
          src={PH}
          className="w-full"
          alt="..."
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="relative">
          <form
            id="input"
            onSubmit={changeSubmit}
            className="-mt-8 sm:ml-8 sm:mr-8 "
          >
            <div className="col-12 md:col-0  ">
              <div className="p-inputgroup h-4rem ">
                <InputText
                  className="border-primary border-solid border-round sm:border-noround-right"
                  // style={{ width: "800px" }}
                  placeholder="Entrez votre adresse et découvrez les restaurants à proximité..."
                  type="text"
                  id="commande"
                  name="commande"
                  value={input}
                  onInput={changeInput}
                />
                <Button
                  id="button1"
                  type="submit"
                  label="Commander"
                  className="p-button-primary border-primary sm:w-3 w-11 border-round
                   absolute sm:static sm:block border-top-left-round border-round-left"
                  value="Commander"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeaderClient;
