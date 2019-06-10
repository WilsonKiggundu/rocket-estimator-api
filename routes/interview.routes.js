import controller from '../controllers/interview.controller';

module.exports = (app) => {
    app.post('/api/interview', controller.create);
    app.get('/api/interview/:_id', controller.read);
};