import {
  Types
} from 'mongoose';
import {
  Feature
} from '../models/project.model';

exports.create = async (req, res) => {
  if (!req.body) {
    res.status(500);
    return res.send({
      message: 'Invalid request.'
    });
  }
  if (!req.body.name) {
    res.status(500);
    return res.send({
      message: 'Feature name is missing.'
    });
  }

  if (typeof req.body.name !== 'string') {
    res.status(500);
    return res.send({
      message: 'Feature name is invalid. It should be a string'
    });
  }

  try {
    await Feature.create(req.body, (err, feature) => {
      if (err) {
        res.status(500);
        return res.send({
          message: err.message
        });
      }

      res.status(201);
      return res.json(feature);
    });
  } catch (error) {
    res.status(500);
    return res.send({
      message: 'internal server error'
    });
  }
};

// search feature
exports.search = async (req, res) => {
  const {
    q
  } = req.params;

  try {
    await Feature.find()
      .populate({
        path: 'developer',
        select: '-createdAt -updatedAt -__v -roles'
      })
      .populate({
        path: 'manager',
        select: '-createdAt -updatedAt -__v -roles'
      })
      .populate({
        path: 'consultant',
        select: '-createdAt -updatedAt -__v -roles'
      })
      .exec((err, features) => {
        if (err) {
          res.status(500);
          return res.send({
            message: err.message
          });
        }

        res.status(200);
        return res.json(features);
      });
  } catch (error) {
    res.status(500);
    return res.send({
      message: 'There is an error'
    });
  }
};

// get feature by Id
exports.read = async (req, res) => {
  const {
    id
  } = req.params;

  if (!Types.ObjectId.isValid(id.toString())) {
    res.status(500);
    return res.send({
      message: 'Invalid feature id'
    });
  }

  try {
    await Feature.find({
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

// update a feature
exports.update = async (req, res) => {
  if (!req.body) {
    res.status(500);
    return res.send({
      message: 'Invalid request.'
    });
  }

  if (!req.body.name) {
    res.status(500);
    return res.send({
      message: 'Feature name is missing.'
    });
  }

  if (typeof req.body.name !== 'string') {
    res.status(500);
    return res.send({
      message: 'Feature name is invalid. It should be a string'
    });
  }

  const {
    id
  } = req.params;

  try {
    await Feature.updateOne({
      _id: id
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

// delete a feature
exports.delete = async (req, res) => {
  const {
    id
  } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    res.status(500);
    return res.send({
      message: 'Invalid feature id'
    });
  }

  try {
    await Feature.remove({
      _id: id
    }, (err) => {
      if (err) {
        res.status(500);
        return res.send({
          message: err.message
        });
      }

      res.status(200);
      return res.send({
        message: 'Feature deleted successfully'
      });
    });
  } catch (error) {
    res.status(500);
    return res.send({
      message: 'internal server error'
    });
  }
};