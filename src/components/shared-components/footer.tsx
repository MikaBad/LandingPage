import Image from "next/image";
import Link from "next/link";
import logoW from "../../../public/assets/logoWhite.png";
import badgeG from "../../../public/assets/BadgePlayStore.svg";
import badgeA from "../../../public/assets/BadgeAppStore.svg";
import LogoContacts from "../client-components/logocontacts";
import styles from "../../../styles/foot.module.css";

const Footer = () => {
  return (
    <div
      className="text-white pt-5 border-top-2"
      style={{ backgroundColor: "#0A1639" }}
    >
      <div>
        <h1>
          <Image
            src={logoW}
            className="w-8rem h-3rem ml-4 hidden lg:block"
            alt="..."
          />
        </h1>
      </div>
      <div className="grid col-8 ml-4 justify-content-between">
        <div className="hidden sm:block">
          <h6 className="sm:text-lg md:text-xl text-base">LIENS</h6>
          <ul className={styles.ul}>
            <li className="pb-3">
              <Link
                href="/"
                className="no-underline text-white hover:text-red-700 md:text-lg text-base"
              >
                Accueil
              </Link>
            </li>
            <li className="pb-3">
              <Link
                href="/"
                className="no-underline text-white hover:text-red-700 md:text-lg text-base"
              >
                Page livreur
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="no-underline text-white hover:text-red-700 md:text-lg text-base"
              >
                Page restaurateur
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="sm:text-lg md:text-xl text-base">CONTACT</h6>
          <ul className={styles.ul}>
            <li className="pb-3 md:text-lg text-base">Tel:06.00.00.00.00</li>
            <li className="md:text-lg text-base">Mail:contact@nojyk.fr</li>
          </ul>
        </div>
        <div>
          <h6 className="sm:text-lg md:text-xl text-base">APPLICATION</h6>
          <ul className={styles.ul}>
            <li>
              <a href="/">
                <Image
                  src={badgeG}
                  className="w-8rem h-3rem lg:block"
                  alt="..."
                />
              </a>
            </li>
            <li>
              <a href="/">
                <Image
                  src={badgeA}
                  className="w-8rem h-3rem lg:block"
                  alt="..."
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="sm:text-lg md:text-xl text-base">NOUS SUIVRE</h6>
          <ul className="-ml-6 sm:-ml-4">
            <LogoContacts />
          </ul>
        </div>
      </div>
      <div className="text-xl flex border-top-2 justify-content-center">
        <h6>Copyright Nojyk SAS 2022</h6>
      </div>
    </div>
  );
};

export default Footer;
