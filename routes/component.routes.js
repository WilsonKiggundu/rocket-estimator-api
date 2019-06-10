// import passport from 'passport';
import controller from '../controllers/component.controller';

module.exports = (app) => {
  app.post('/api/component', /* passport.authenticate('jwt', { session: false }), */ controller.create);
  app.get('/api/component/:projectId', /* passport.authenticate('jwt', { session: false }), */ controller.search);
  app.get('/api/component/:_id', /* passport.authenticate('jwt', { session: false }), */ controller.read);
  app.put('/api/component/:id', /* passport.authenticate('jwt', { session: false }), */ controller.update);
  app.delete('/api/component/:id', /* passport.authenticate('jwt', { session: false }), */ controller.delete);
};