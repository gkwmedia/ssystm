import style from "../../../styles/cards/DashboardCard.module.css";

const DashboardCard = ({ children }) => {
  return <div className={style.dashboardCard}>{children}</div>;
};

export default DashboardCard;
