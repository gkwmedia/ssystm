import { Project } from "../../interfaces/projectStruct";
import PrimaryBtn from "../buttons/primayBtn";
import DashboardCard from "../cards/dashboardCard";
import PageHeader from "../headers/page-header";
import ProjectIcon from "../icons/project-icons";

const ProjectContainer = ({ projects }) => {
  return (
    <DashboardCard>
      <PageHeader text={"Projects"} />
      <div className='contents-wrapper'>
        <div>
          {projects.map((project: Project) => {
            return (
              <div key={project.id} className='row mb-4 cursor-pointer'>
                <ProjectIcon />
                <h3>{project.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className='row space-around'>
        <PrimaryBtn text={"View All"} />
        <PrimaryBtn text={"New Project"} />
      </div>
    </DashboardCard>
  );
};

export default ProjectContainer;
