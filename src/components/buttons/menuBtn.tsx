import style from "../../../styles/buttons/menuBtn.module.css";

const MenuBtn = ({ showMobileNav }) => {
  return (
    <>
      <div
        className={`${style.line} ${style.line1} ${
          showMobileNav ? style.open1 : style.close1
        } `}
        id='line-1'></div>
      <div
        className={`${style.line} ${style.line2} ${
          showMobileNav ? style.open2 : style.close2
        }`}
        id='line-2'></div>
      <div
        className={`${style.line} ${style.line3} ${
          showMobileNav ? style.open3 : style.close3
        }`}
        id='line-3'></div>
    </>
  );
};

export default MenuBtn;
