import { useEffect, useState } from "react";
import Link from "../../../node_modules/next/link";
import style from "../../../styles/navbar/navbar.module.css";
import MenuBtn from "../buttons/menuBtn";
import CircleAvatar from "../profile/CircleAvatar";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (showMobile) {
      document.body.style.overflow = "hidden";
    } else if (!showMobile) {
      document.body.style.overflow = "auto";
    }
  }, [showMobile]);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width >= "990") {
      document.body.style.overflow = "auto";
      setShowMobile(false);
    }
  }, [windowSize]);

  return (
    <>
      <nav className={style.nav}>
        <Link href={"/dashboard"} passHref>
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
              href={"/dashboard"}
            />
            <Navitem
              setShowMobile={setShowMobile}
              text={"Forum"}
              href={"/dashboard"}
            />
            <Navitem
              setShowMobile={setShowMobile}
              text={"Database"}
              href={"/dashboard"}
            />
            <Navitem
              setShowMobile={setShowMobile}
              text={"Search"}
              href={"/dashboard"}
            />
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
