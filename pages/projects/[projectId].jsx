import { MainHeader } from "../../components/common/MainHeader";
import { getAllProjects , getProjectById } from '../../data/projects';
import Project from "../../components/project/project"

export default function ProjectDetail({project,all_projects}) {
  project = project[0];
  console.log(project)
  return (
    <div className="antialiased bg-gradient-to-r">
      <MainHeader title={`Undiscovered ${project.title}`} />
      <Project project={project} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const projectId = context.params.projectId;
  console.log(projectId)
  const project = getProjectById(projectId);
  const all_projects = getAllProjects();

  if (!all_projects) {
    return {
      notFound: true,
    };
  }

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project: project,all_projects: all_projects },
    revalidate: 3600,
  };
};

export const getStaticPaths = async (context) => {
  const projects = getAllProjects();
  //   console.log(context)

  // Get the paths we want to pre-render based on tours
  const paths = projects.map((project) => ({
    params: { projectId: project.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths: paths, fallback: false };
};