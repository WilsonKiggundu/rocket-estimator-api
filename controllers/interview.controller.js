import {
  Types
} from 'mongoose';
import {
  Interview
} from '../models/interview.model';

exports.create = async (req, res) => {
  if (!req.body) {
    res.status(500);
    return res.send({
      message: 'Invalid request.'
    });
  }

  try {
    await Interview.create(req.body, (err, component) => {
      if (err) {
        res.status(500);
        return res.send({
          message: err.message
        });
      }

      res.status(201);
      return res.json(component);
    });
  } catch (error) {
    res.status(500);
    return res.send({
      message: error.message
    });
  }
};

// search component
exports.read = async (req, res) => {

  try {
    await Interview.find()
      .exec((err, components) => {
        if (err) {
          res.status(500);
          return res.send({
            message: err.message
          });
        }

        res.status(200);
        return res.json(components);
      });
  } catch (error) {
    res.status(500);
    return res.send({
      message: 'There is an error'
    });
  }
};