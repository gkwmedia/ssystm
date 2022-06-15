import style from "../../../styles/cards/dashboardCard.module.css";

const DashboardCard = ({ children }) => {
  return <div className={style.dashboardCard}>{children}</div>;
};

export default DashboardCard;
