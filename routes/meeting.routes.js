import passport from 'passport';
import controller from '../controllers/meeting.controller';

module.exports = (app) => {
  app.post('/api/meeting', passport.authenticate('jwt', { session: false }), controller.create);
  app.get('/api/meeting/:projectId', passport.authenticate('jwt', { session: false }), controller.read);
  app.put('/api/meeting/:_id', passport.authenticate('jwt', { session: false }), controller.update);
  app.delete('/api/meeting/:_id', passport.authenticate('jwt', { session: false }), controller.delete);
};
