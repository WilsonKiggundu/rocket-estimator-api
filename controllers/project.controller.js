import {
  Types
} from 'mongoose';
import {
  Project
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
      message: 'Project name is missing.'
    });
  }

  if (typeof req.body.name !== 'string') {
    res.status(500);
    return res.send({
      message: 'Project name is invalid. It should be a string'
    });
  }

  try {
    await Project.create(req.body, (err, project) => {
      if (err) {
        res.status(500);
        return res.send({
          message: err.message
        });
      }

      res.status(201);
      return res.json(project);
    });
  } catch (error) {
    res.status(500);
    return res.send({
      message: 'internal server error'
    });
  }
};

// search project
exports.search = async (req, res) => {
  const {
    q
  } = req.params;

  try {
    await Project.find()
      .exec((err, projects) => {
        if (err) {
          res.status(500);
          return res.send({
            message: err.message
          });
        }

        res.status(200);
        return res.json(projects);
      });
  } catch (error) {
    res.status(500);
    return res.send({
      message: 'There is an error'
    });
  }
};

// get project by Id
exports.read = async (req, res) => {
  const {
    projectId
  } = req.params;

  if (!Types.ObjectId.isValid(projectId)) {
    res.status(500);
    return res.send({
      message: 'Invalid project id'
    });
  }

  try {
    await Project.find({
      project: projectId
    }, (err, project) => {
      if (err) {
        res.status(500);
        return res.send({
          message: err.message
        });
      }

      res.status(200);
      return res.json(project);
    });
  } catch (error) {
    res.status(500);
    return res.send({
      message: 'internal server error'
    });
  }
};

// update a project
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
      message: 'Project name is missing.'
    });
  }

  if (typeof req.body.name !== 'string') {
    res.status(500);
    return res.send({
      message: 'Project name is invalid. It should be a string'
    });
  }

  const {
    id
  } = req.params;

  try {
    await Project.updateOne({
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

// delete a project
exports.delete = async (req, res) => {
  const {
    id
  } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    res.status(500);
    return res.send({
      message: 'Invalid project id'
    });
  }

  try {
    await Project.remove({
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
        message: 'Project deleted successfully'
      });
    });
  } catch (error) {
    res.status(500);
    return res.send({
      message: 'internal server error'
    });
  }
};