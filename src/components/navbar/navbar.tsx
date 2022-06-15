import { useState } from "react";
import Link from "../../../node_modules/next/link";
import style from "../../../styles/navbar/navbar.module.css";
import MenuBtn from "../buttons/menuBtn";
import CircleAvatar from "../profile/CircleAvatar";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <>
      <nav className={style.nav}>
        <Link href={"/"} passHref>
          <div className={style.left}>Setlife</div>
        </Link>
        <div className={style.right}>
          <div
            className={style.mobileButton}
            onClick={() => setShowMobile(!showMobile)}>
            <MenuBtn showMobileNav={showMobile} />
          </div>

          <div
            className={`${style.itemsContainer} ${
              showMobile ? style.showMenu : style.hideMenu
            }`}>
            <Navitem
              setShowMobile={setShowMobile}
              text={"Dashboard"}
              href={"/dashboard"}
            />
            <Navitem
              setShowMobile={setShowMobile}
              text={"Projects"}
              href={"/"}
            />
            <Navitem setShowMobile={setShowMobile} text={"Forum"} href={"/"} />
            <Navitem
              setShowMobile={setShowMobile}
              text={"Database"}
              href={"/"}
            />
            <Navitem setShowMobile={setShowMobile} text={"Search"} href={"/"} />
            <div className={style.profileImgContainer}>
              <CircleAvatar />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const Navitem = ({ text, href, setShowMobile }) => {
  return (
    <Link href={href}>
      <a onClick={() => setShowMobile(false)} className={style.link}>
        {text}
      </a>
    </Link>
  );
};
