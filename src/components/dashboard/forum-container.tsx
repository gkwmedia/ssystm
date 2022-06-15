import PostPreview from "../forum/post-preview";
import { Post } from "../../interfaces/post";
import DashboardCard from "../cards/dashboardCard";
import PageHeader from "../headers/page-header";
import AddBtn from "../buttons/add-btn";

const ForumContainer = ({ posts }) => {
  return (
    <div>
      <div className='flex gap-1 justify-center mt-4'>
        <PageHeader text={"Forum"} />
        <AddBtn />
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
