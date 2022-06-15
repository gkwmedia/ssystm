import style from "../../../styles/forum/post-category.module.css";

const PostCategory = ({ category }) => {
  return <div className={style.postCategory}>{category}</div>;
};

export default PostCategory;
