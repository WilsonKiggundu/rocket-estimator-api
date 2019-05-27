import passport from 'passport';
import controller from '../controllers/project.controller';

module.exports = (app) => {
  app.post('/api/project', passport.authenticate('jwt', { session: false }), controller.create);
  app.get('/api/project', passport.authenticate('jwt', { session: false }), controller.search);
  app.get('/api/project/:_id', passport.authenticate('jwt', { session: false }), controller.read);
  app.put('/api/project/:id', passport.authenticate('jwt', { session: false }), controller.update);
  app.delete('/api/project/:id', passport.authenticate('jwt', { session: false }), controller.delete);
};
