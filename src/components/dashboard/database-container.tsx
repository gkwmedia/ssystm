import PrimaryBtn from "../buttons/primayBtn";
import DashboardCard from "../cards/dashboardCard";
import PageHeader from "../headers/page-header";
import style from "../../../styles/pages/dashboard.module.css";
import Image from "../../../node_modules/next/image";
import { Database } from "../../interfaces/databaseStruct";
import HorizontalDivider from "../dividers/horizontal-divider";
import ChevronRight from "../icons/chevron-right";
import EditBtn from "../buttons/editBtn";

const DatabaseContainer = ({ items }) => {
  return (
    <DashboardCard>
      <div className='row justify-center align-center'>
        <PageHeader text={"Database"} />
        <EditBtn />
      </div>
      <div className='contents-wrapper'>
        <div className={style.whiteContainer}>
          {items.map((item: Database) => {
            return (
              <div key={item.id}>
                <div className='row justify-between px-4'>
                  <div className='row'>
                    <Image
                      src={item.image.url}
                      width={50}
                      height={50}
                      alt={item.image.alt}></Image>
                    <h3>{item.name}</h3>
                  </div>
                  <ChevronRight className='' />
                </div>
                <HorizontalDivider />
              </div>
            );
          })}
        </div>
      </div>
      <div className='row justify-center'>
        <PrimaryBtn text={"View All"} />
      </div>
    </DashboardCard>
  );
};

export default DatabaseContainer;
