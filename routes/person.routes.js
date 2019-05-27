import passport from 'passport';
import controller from '../controllers/person.controller';

module.exports = (app) => {
  app.post('/api/person', passport.authenticate('jwt', { session: false }), controller.create);
  app.get('/api/person', passport.authenticate('jwt', { session: false }), controller.read);
  app.put('/api/person/:_id', passport.authenticate('jwt', { session: false }), controller.update);
  app.delete('/api/person/:_id', passport.authenticate('jwt', { session: false }), controller.delete);
};
