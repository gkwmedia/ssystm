import Image from "../../../node_modules/next/image";
import style from "../../../styles/profile/circleAvatar.module.css";

const CircleAvatar = () => {
  return (
    <div className={style.imageWrapper}>
      <Image
        width={200}
        height={200}
        src={"/images/profile.jpeg"}
        alt='User Profile Image'></Image>
    </div>
  );
};

export default CircleAvatar;
