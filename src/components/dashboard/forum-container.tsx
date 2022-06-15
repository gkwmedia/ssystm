import CommentCounter from "../forum/comment-counter";
import PostPreview from "../forum/post-preview";
import { Post } from "../../interfaces/post";
import DashboardCard from "../cards/dashboardCard";
import PageHeader from "../headers/page-header";
import AddIcon from "../icons/add-icon";

const ForumContainer = ({ posts }) => {
  return (
    <div>
      <div className='row justify-center mt-4'>
        <PageHeader text={"Forum"} />
        <AddIcon />
      </div>
      <DashboardCard>
        {posts.map((post: Post) => {
          return <PostPreview key={post.id} post={post} />;
        })}
      </DashboardCard>
    </div>
  );
};

export default ForumContainer;
