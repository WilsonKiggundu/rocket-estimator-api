import projectRoutes from './project.routes';
import taskRoutes from './task.routes';
import personRoutes from './person.routes';
import meetingRoutes from './meeting.routes';
import componentRoutes from './component.routes';
import featureRoutes from './feature.routes';
import interviewRoutes from './interview.routes'

module.exports = (app) => {
  personRoutes(app);
  meetingRoutes(app);
  projectRoutes(app);
  taskRoutes(app);
  componentRoutes(app);
  featureRoutes(app);
  interviewRoutes(app)
};