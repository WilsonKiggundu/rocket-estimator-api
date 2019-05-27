import { Types } from 'mongoose';
import Project from '../models/project.model';

exports.create = async (req, res) => {
  if (!req.body) {
    res.status(500);
    return res.send({ message: 'Invalid request.' });
  }
  if (!req.body.name) {
    res.status(500);
    return res.send({ message: 'Project name is missing.' });
  }

  if (typeof req.body.name !== 'string') {
    res.status(500);
    return res.send({ message: 'Project name is invalid. It should be a string' });
  }

  await Project.create(req.body, (err, project) => {
    if (err) {
      res.status(500);
      return res.send({ message: err.message });
    }

    res.status(201);
    return res.json(project);
  });

  res.status(500);
  return res.send({ message: 'internal server error' });
};

// search project
exports.search = async (req, res) => {
  const { q } = req.params;
  await Project.find({ name: `/ ${q} /i` }, 'name', (err, docs) => {
    if (err) {
      res.status(500);
      return res.send({ message: err.message });
    }

    res.status(200);
    return res.json(docs);
  });
};

// get project by Id
exports.read = async (req, res) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id.toString())) {
    res.status(500);
    return res.send({ message: 'Invalid project id' });
  }
  await Project.find({ _id: req.params.id }, (err, docs) => {
    if (err) {
      res.status(500);
      return res.send({ message: err.message });
    }

    res.status(200);
    return res.json(docs);
  });

  res.status(500);
  return res.send({ message: 'internal server error' });
};

// update a project
exports.update = async (req, res) => {
  if (!req.body) {
    res.status(500);
    return res.send({ message: 'Invalid request.' });
  }

  if (!req.body.name) {
    res.status(500);
    return res.send({ message: 'Project name is missing.' });
  }

  if (typeof req.body.name !== 'string') {
    res.status(500);
    return res.send({ message: 'Project name is invalid. It should be a string' });
  }

  const { id } = req.params;
  await Project.updateOne({ _id: id }, (err, docs) => {
    if (err) {
      res.status(500);
      return res.send({ message: err.message });
    }

    res.status(200);
    return res.json(docs);
  });

  res.status(500);
  return res.send({ message: 'internal server error' });
};

// delete a project
exports.delete = async (req, res) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    res.status(500);
    return res.send({ message: 'Invalid project id' });
  }

  await Project.remove({ _id: id }, (err) => {
    if (err) {
      res.status(500);
      return res.send({ message: err.message });
    }

    res.status(200);
    return res.send({ message: 'Project deleted successfully' });
  });

  res.status(500);
  return res.send({ message: 'internal server error' });
};
