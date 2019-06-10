// import passport from 'passport';
import controller from '../controllers/feature.controller';

module.exports = (app) => {
  app.post('/api/feature', /* passport.authenticate('jwt', { session: false }), */ controller.create);
  app.get('/api/feature', /* passport.authenticate('jwt', { session: false }), */ controller.search);
  app.get('/api/feature/:_id', /* passport.authenticate('jwt', { session: false }), */ controller.read);
  app.put('/api/feature/:id', /* passport.authenticate('jwt', { session: false }), */ controller.update);
  app.delete('/api/feature/:id', /* passport.authenticate('jwt', { session: false }), */ controller.delete);
};