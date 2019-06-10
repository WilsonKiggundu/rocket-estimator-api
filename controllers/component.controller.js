import {
  Types
} from 'mongoose';
import {
  Component
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
      message: 'Component name is missing.'
    });
  }

  if (typeof req.body.name !== 'string') {
    res.status(500);
    return res.send({
      message: 'Component name is invalid. It should be a string'
    });
  }

  try {
    await Component.create(req.body, (err, component) => {
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

  console.log(req.params)

  try {
    await Component.find({
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
    await Component.find({
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

// update a component
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
      message: 'Component name is missing.'
    });
  }

  if (typeof req.body.name !== 'string') {
    res.status(500);
    return res.send({
      message: 'Component name is invalid. It should be a string'
    });
  }

  const {
    id
  } = req.params;

  try {
    await Component.updateOne({
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

// delete a component
exports.delete = async (req, res) => {
  const {
    id
  } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    res.status(500);
    return res.send({
      message: 'Invalid component id'
    });
  }

  try {
    await Component.remove({
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
        message: 'Component deleted successfully'
      });
    });
  } catch (error) {
    res.status(500);
    return res.send({
      message: 'internal server error'
    });
  }
};