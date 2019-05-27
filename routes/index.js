import projectRoutes from './project.routes';
import taskRoutes from './task.routes';
import personRoutes from './person.routes';
import meetingRoutes from './meeting.routes';

module.exports = (app) => {
  personRoutes(app);
  meetingRoutes(app);
  projectRoutes(app);
  taskRoutes(app);
};
