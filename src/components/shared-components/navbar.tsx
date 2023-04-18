import Image from "next/image";
import logoWhite from "../../../public/assets/logoWhite.png";
import Link from "next/link";
import React, { Component, useState } from "react";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import { PrimeIcons } from "primereact/api";
import { Sidebar } from "primereact/sidebar";
import { useRouter } from "next/router";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  return (
    <div
      id="navbar"
      className="flex justify-content-between align-items-center h-5rem"
      style={{ backgroundColor: "#0A1639" }}
    >
      <div className=" flex justify-content-between w-7">
        <h1>
          <Link href="/">
            <Image
              src={logoWhite}
              className="w-10rem h-3rem ml-4 hidden lg:block"
              alt="..."
            />
          </Link>
          <Sidebar
            id="sidebar"
            visible={visible}
            position="left"
            onHide={() => setVisible(false)}
            className="md"
            style={{ backgroundColor: "#0a1639" }}
          >
            <div>
              <h2 className="mr-3 lg:block ">
                <Link
                  href="/"
                  className="no-underline text-white hover:#d71023 text-xl "
                >
                  Accueil
                </Link>
                <p
                  className="border-bottom-2  w-12rem"
                  style={{ color: "#d71023" }}
                ></p>
              </h2>
              <h2 className="mr-3 lg:block">
                <Link
                  href="/rider"
                  className="no-underline text-white hover:#d71023 text-xl"
                >
                  Devenez livreur
                </Link>
                <p
                  className="border-bottom-2  w-12rem"
                  style={{ color: "#d71023" }}
                ></p>
              </h2>
              <h2 className="mr-3 lg:block">
                <Link
                  href="/restorer"
                  className="no-underline text-white hover:#d71023 text-xl"
                >
                  Rejoignez nos restaurateurs
                </Link>
                <p
                  className="border-bottom-2 w-12rem"
                  style={{ color: "#d71023" }}
                ></p>
              </h2>
              <h2 className="mr-3 lg:block">
                <Link
                  href="/nous"
                  className="no-underline text-white hover:#d71023 text-xl"
                >
                  À propos de Nojyk
                </Link>
                <p
                  className="border-bottom-2 w-12rem"
                  style={{ color: "#d71023" }}
                ></p>
              </h2>
              <h2 className="mr-3 lg:block">
                <Link
                  href="/"
                  className="no-underline text-white hover:text-#d71023 text-xl"
                  style={{}}
                >
                  Connexion
                </Link>
                <p
                  className="border-bottom-2 w-12rem"
                  style={{ color: "#d71023" }}
                ></p>
              </h2>
            </div>
          </Sidebar>
          <div className="flex align-items-center">
            <span>
              <i
                className="pi pi-bars lg:hidden ml-4"
                style={{ fontSize: "2rem", color: "white" }}
                onClick={(e) => setVisible(true)}
              />
            </span>

            {/* <span></span> */}
            <Link href="/">
              <Image
                src={logoWhite}
                className="sm:w-8rem sm:h-3rem w-5rem h-2rem ml-4 lg:hidden"
                alt="..."
              />
            </Link>
          </div>
        </h1>
        <div
          id="navtitle"
          className="flex justify-content-between no-underline align-items-center"
        >
          <h2 className="mr-6 hidden lg:block lg:text-xl w-5rem ">
            <Link
              href="/"
              className="no-underline text-white text- hover:text-red-700 font-normal xl:font-bold"
            >
              Accueil
            </Link>
          </h2>
          <h2 className="mr-6 hidden lg:block text-xl  w-10rem">
            <Link
              href="/rider"
              className="no-underline text-white hover:text-red-700 font-normal xl:font-bold"
            >
              Devenez livreur
            </Link>
          </h2>
          <h2 className="mr-6 hidden lg:block text-xl w-18rem">
            <Link
              href="/restorer"
              className="no-underline text-white hover:text-red-700 font-normal xl:font-bold "
            >
              Rejoignez nos restaurateurs
            </Link>
          </h2>
        </div>
      </div>
      <h2 className="text-white mr-4">
        {" "}
        <Button
          id="buttonnav"
          type="button"
          label="Connexion"
          icon="pi pi-users"
          className=" hover:text-red-700 md:text-lg xl:text-xl sm:text-base text-xs "
          style={{ background: "rgba(248, 249, 250, 0.1)" }}
          badge=""
          badgeClassName="p-badge-danger"
        />
      </h2>
    </div>
  );
};

export default Navbar;
