import Image from "next/image";
import logoI from "../../../public/assets/logoInsta.png";
import logoY from "../../../public/assets/logoYou.png";
import logoTk from "../../../public/assets/logoTikTok.png";
import logoTw from "../../../public/assets/logoTwitter.png";
import logoF from "../../../public/assets/logoFacebk.png";
import logoL from "../../../public/assets/logoLink.png";

const LogoContacts = () => {
  return (
    <div>
      <a href="https://www.instagram.com/nojykoff/?hl=fr">
        <Image
          src={logoI}
          className=""
          alt="..."
          style={{ width: "40px", height: "40px" }}
        ></Image>
      </a>
      <a href="https://fr-fr.facebook.com/NOJYK/">
        <Image
          src={logoF}
          className=""
          alt="..."
          style={{ width: "40px", height: "40px" }}
        ></Image>
      </a>
      <a href="https://www.tiktok.com/@nojykoff/video/7073800961000475910">
        <Image
          src={logoTk}
          className="border-round mx-1"
          alt="..."
          style={{ width: "40px", height: "40px" }}
        ></Image>
      </a>
      <a href="https://twitter.com/Nojykoffr">
        <Image
          src={logoTw}
          className=""
          alt="..."
          style={{ width: "40px", height: "40px" }}
        ></Image>
      </a>
      <a href="https://www.youtube.com/channel/UCeF2gfs9PR2PeA6--5ruryg">
        <Image
          src={logoY}
          className=""
          alt="..."
          style={{ width: "40px", height: "40px" }}
        ></Image>
      </a>
      <a href="https://fr.linkedin.com/company/nojyk">
        <Image
          src={logoL}
          className="ml-1"
          alt="..."
          style={{ width: "40px", height: "40px" }}
        ></Image>
      </a>
    </div>
  );
};

export default LogoContacts;
