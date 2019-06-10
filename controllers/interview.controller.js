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
exports.search = async (req, res) => {
  const {
    projectId
  } = req.params;

  try {
    await Interview.find({
        project: projectId
      })
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

// get component by Id
exports.read = async (req, res) => {
  const {
    id
  } = req.params;

  if (!Types.ObjectId.isValid(id.toString())) {
    res.status(500);
    return res.send({
      message: 'Invalid component id'
    });
  }

  try {
    await Interview.find({
      _id: req.params.id
    }, (err, docs) => {
      if (err) {
        res.status(500);
        return res.send({
          message: err.message
        });
      }

      res.status(200);
      return res.json(docs);
    });
  } catch (error) {
    res.status(500);
    return res.send({
      message: 'internal server error'
    });
  }
};