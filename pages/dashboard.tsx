import DatabaseContainer from "../src/components/dashboard/database-container";
import ForumContainer from "../src/components/dashboard/forum-container";
import ProjectContainer from "../src/components/dashboard/project-container";
import HorizontalDivider from "../src/components/dividers/horizontal-divider";
import VerticalDivider from "../src/components/dividers/vertical-divider";
import PageHeader from "../src/components/headers/page-header";
import { Database } from "../src/interfaces/databaseStruct";
import { Post } from "../src/interfaces/post";

import { Project } from "../src/interfaces/projectStruct";
import style from "../styles/pages/dashboard.module.css";

const Dashboard = () => {
  const projects: Project[] = [
    { id: 1, name: "Vogue Italia / Fall 2019", date: "Tuesday, Sept 4th" },
    { id: 2, name: "Elle / Winter 2019", date: "Wednesday. Sept 26" },
    { id: 3, name: "GQ / Spring 2019", date: "Monday, Sept 31 " },
  ];

  const databaseItems: Database[] = [
    {
      id: 1,
      name: "Burberry",
      image: { url: "/images/BurberryLogo.svg", alt: "Burberry Logo" },
    },
    {
      id: 2,
      name: "Chanel",
      image: { url: "/images/chanelLogo.svg", alt: "Chanel Logo" },
    },
    {
      id: 3,
      name: "Prada",
      image: { url: "/images/pradaLogo.svg", alt: "Prada Logo" },
    },
  ];

  const forumItems: Post[] = [
    {
      id: 1,
      author: {
        name: "Hovha",
        email: "hovha@gmail.com",
        location: "NY",
        img_url: "/images/profile.jpeg",
      },
      title: "Looking for a brown leather belt for 8/25/19 Vogue Shoot",
      categories: ["Accessories", "Need Item"],
      reply_count: 1,
      most_recent_comment: {
        commenter: {
          name: "Hovha",
          email: "hovha@gmail.com",
          location: "NY",
          img_url: "/images/profile.jpeg",
        },
        time: 30,
      },
    },
  ];

  return (
    <div>
      <div className='mb-8'>
        <PageHeader text={"Dasboard"} />
      </div>
      <div className='container'>
        <div className={style.row}>
          <ProjectContainer projects={projects} />
          <VerticalDivider />
          <DatabaseContainer items={databaseItems} />
        </div>
        <div className='constrain-90'>
          <HorizontalDivider />
        </div>
        <ForumContainer posts={forumItems} />
      </div>
    </div>
  );
};

export default Dashboard;
