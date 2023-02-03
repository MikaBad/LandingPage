import Image from "next/image";
import logoWhite from "../../../public/assets/logoWhite.png";
import Link from "next/link";
import React, { Component, useState } from "react";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import { PrimeIcons } from "primereact/api";
import { Sidebar } from "primereact/sidebar";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      id="navbar"
      className="flex justify-content-between"
      style={{ backgroundColor: "#0A1639" }}
    >
      <div className=" flex justify-content-between w-9">
        <h1>
          <Link href="/client">
            <Image
              src={logoWhite}
              className="w-8rem h-3rem ml-4 hidden lg:block"
              alt="..."
            />
          </Link>
          <Sidebar
            visible={visible}
            position="left"
            onHide={() => setVisible(false)}
            className="md"
          >
            <div>
              <h2 className="mr-3 lg:block ">
                <Link
                  href="/client"
                  className="no-underline text-blue-900 hover:text-red-700 text-xl"
                >
                  Accueil
                </Link>
                <p className="border-bottom-2 border-red-700 w-12rem"></p>
              </h2>
              <h2 className="mr-3 lg:block">
                <Link
                  href="/rider"
                  className="no-underline text-blue-900 hover:text-red-700 text-xl"
                >
                  Devenez livreur
                </Link>
                <p className="border-bottom-2 border-red-700 w-12rem"></p>
              </h2>
              <h2 className="mr-3 lg:block">
                <Link
                  href="/restorer"
                  className="no-underline text-blue-900 hover:text-red-700 text-xl"
                >
                  Rejoignez nos restaurateurs
                </Link>
                <p className="border-bottom-2 border-red-700 w-12rem"></p>
              </h2>
              <h2 className="mr-3 lg:block">
                <Link
                  href="/"
                  className="no-underline text-blue-900 hover:text-red-700 text-xl"
                >
                  Connexion
                </Link>
                <p className="border-bottom-2 border-red-700 w-12rem"></p>
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
            <Link href="/client">
              <Image
                src={logoWhite}
                className="sm:w-8rem sm:h-3rem w-5rem h-2rem ml-4 lg:hidden"
                alt="..."
              />
            </Link>
          </div>
        </h1>
        <div className="flex justify-content-between no-underline align-items-center">
          <h2 className="mr-3 hidden lg:block ">
            <Link
              href="/client"
              className="no-underline text-white text- hover:text-red-700"
            >
              Accueil
            </Link>
          </h2>
          <h2 className="mr-3 hidden lg:block">
            <Link
              href="/rider"
              className="no-underline text-white hover:text-red-700"
            >
              Devenez livreur
            </Link>
          </h2>
          <h2 className="mr-3 hidden lg:block">
            <Link
              href="/restorer"
              className="no-underline text-white hover:text-red-700"
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
          className=" hover:text-red-700 md:text-lg sm:text-base text-xs "
          style={{ background: "rgba(248, 249, 250, 0.1)" }}
          badge=""
          badgeClassName="p-badge-danger"
        />
      </h2>
    </div>
  );
};

export default Navbar;
