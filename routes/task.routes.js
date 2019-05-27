import passport from 'passport';
import controller from '../controllers/task.controller';

module.exports = (app) => {
  app.post('/api/task', passport.authenticate('jwt', { session: false }), controller.create);
  app.get('/api/task/:projectId', passport.authenticate('jwt', { session: false }), controller.findByProjectId);
  app.put('/api/task/:_id', passport.authenticate('jwt', { session: false }), controller.update);
  app.delete('/api/task/:_id', passport.authenticate('jwt', { session: false }), controller.delete);
};
