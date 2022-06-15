import style from "../../../styles//buttons//btn.module.css";

const PrimaryBtn = ({ text }) => {
  return <button className={style.primaryBtn}>{text}</button>;
};

export default PrimaryBtn;
