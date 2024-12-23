import Project5 from "../../assets/images/Project5.jpg";

import Project2 from "../../assets/images/Project2.jpg";

import Project3 from "../../assets/images/Project3.jpg";

import Project4 from "../../assets/images/Project4.jpg";

import carpoolimage from "../../assets/images/carpool.gif";
import etm from "../../assets/images/etm.gif";
import blogs from "../../assets/images/blogs.gif"
const PortfolioItems = [
  {
    id: 1,
    ProjectTitle: "Carpool",
    ProjectImg: carpoolimage,
    ProjectDesceription:
      "Carpool is a system where there are three types of users drivers, passenger and admin.Users can register themselves and after login they can create ride or search ride from available rides.After finding a desired ride, they can book their journey. Admin can manage users, locations, rides, driver",
    URL: "https://github.com/preranadave/carpool-project",
  },
  {
    id: 2,
    ProjectTitle: "Employee Task System",
    ProjectImg: etm,
    ProjectDesceription:
      "The Employee Task Management project in React JS is a system where an admin can create employee profiles and assign tasks with specific deadlines and priority levels. Employees can view the tasks, accept them, and update their status to either 'complete' or 'failed.' The project ensures efficient task tracking and management, offering an intuitive interface for both admins and employees. Admins can monitor task assignments, while employees have the flexibility to manage their work status, improving overall productivity and task organization within the organization.",
    URL: "https://github.com/preranadave/EmployeeTaskManagement",
  },
  {
    id: 3,
    ProjectTitle: "Daily Mental Health Blog",
    ProjectImg: blogs,
    ProjectDesceription:
      "The Blog Posts on Mental Health Management project, built with React JS and styled using Tailwind CSS, allows an admin to add, update, and delete blog posts. Users can browse and read the available posts on mental health. The UI adopts a vintage newspaper theme, with blogs displayed in a Bento-box style, utilizing retro fonts and colors. This design enhances the reading experience, offering a nostalgic, newspaper-like feel while providing insightful content for managing mental health.",
    URL: "https://github.com/preranadave/DailyBlogPosts",
  },
  // {
  //   id: 4,
  //   ProjectTitle: "Project4",
  //   ProjectImg: Project3,
  //   ProjectDesceription:
  //     " Lorem ipsum dolor sit amet consectetur adipisicing elit.velit nihil laudantium, voluptate eveniet ducimus in delenitiautem rem aliquid sunt necessitatibus fugit quibusdam voluptatum deserunt illum voluptas? Rem, harum.",
  // },
];
// function PortfolioItems() {
//   return (
//     <div>PortfolioItems</div>
//   )
// }

export default PortfolioItems;
