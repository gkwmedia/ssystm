import style from "../../../styles/forum/post-preview.module.css";
import HorizontalDivider from "../dividers/horizontal-divider";
import CommentIcon from "../icons/comment-icon";
import SmallCircleAvatar from "../profile/smallCircleAvatar";
import CommentCounter from "./comment-counter";
import PostCategory from "./post-category";

const PostPreview = ({ post }) => {
  return (
    <div>
      <div className='row align-center justify-between'>
        <div className='row'>
          <div className='cursor-pointer'>
            <SmallCircleAvatar user={post.author} />
          </div>
          <h3
            className={
              style.postTitle
            }>{`${post.author.name} [${post.author.location}]: ${post.title}`}</h3>
        </div>
        <div className='tablet-row cursor-pointer'>
          <CommentIcon />
          <CommentCounter commentNum={1} />
        </div>
      </div>
      <div className='constrain-95 mt-4 mb-4'>
        <HorizontalDivider />
      </div>
      <div className='constrain-90 tablet-row justify-between'>
        <p className={style.mostRecentComment}>
          <span className='cursor-pointer'>
            {post.most_recent_comment.commenter.name}
          </span>
          {` replied ${post.most_recent_comment.time} minutes ago`}
        </p>
        <div className={style.categoryWrapper}>
          {post.categories.map((c: string) => {
            return <PostCategory key={c} category={c} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
