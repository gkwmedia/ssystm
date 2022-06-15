import style from "../../../styles/forum/comment-counter.module.css";

const CommentCounter = ({ commentNum }) => {
  return <div className={style.commentCounter}>{commentNum}</div>;
};

export default CommentCounter;
