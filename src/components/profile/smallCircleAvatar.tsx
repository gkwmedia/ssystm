import Image from "../../../node_modules/next/image";
import style from "../../../styles/profile/circleAvatar.module.css";

const SmallCircleAvatar = ({ user }) => {
  return (
    <div className={style.smallImageWrapper}>
      <Image
        width={200}
        height={200}
        src={user.img_url}
        alt={user.name}></Image>
    </div>
  );
};

export default SmallCircleAvatar;
