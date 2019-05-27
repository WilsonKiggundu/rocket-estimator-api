import { Types } from 'mongoose';
import Task from '../models/task.model';

// create and save a task
exports.create = async (req, res) => {
  // validate the request
  if (!req.body) {
    res.status(500);
    return res.send({ message: 'The request body can not be null' });
  }

  if (!req.body.projectId) {
    res.status(500);
    return res.send({ message: 'projectId is required' });
  }

  // create a task
  await Task.create(req.body, (err, task) => {
    if (err) {
      res.status(500);
      return res.send({ message: err.message });
    }
    res.status(201);
    return res.json(task);
  });

  res.status(500);
  return res.send({ message: 'internal server error' });
};

// retrieve and return all tasks by projectId
exports.findByProjectId = async (req, res) => {
  if (!req.params.projectId) {
    res.status(500);
    return res.send({ message: 'Project Id is missing' });
  }
  await Task.find({ projectId: req.params.projectId }, (err, tasks) => {
    if (err) {
      res.status(500);
      return res.send({ message: err.message });
    }
    res.status(200);
    return res.send(tasks);
  });

  res.status(500);
  return res.send({ message: 'internal server error' });
};

// update a task identified by the task Id
exports.update = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(500);
    return res.send({ message: 'Provide the task id' });
  }

  if (Types.ObjectId.isValid(id)) {
    await Task.updateOne({ _id: id }, req.body, (err, task) => {
      if (err) {
        res.status(500);
        return res.send({ message: err.message });
      }
      res.status(200);
      return res.send(task);
    });
  }

  res.status(500);
  return res.send({ message: 'Invalid task id' });
};

// delete a task
exports.delete = async (req, res) => {
  const { id } = req.params;

  if (Types.ObjectId.isValid(id)) {
    await Task.remove({ _id: req.params.id }, (err) => {
      if (err) {
        res.status(500);
        return res.send({ message: err.message });
      }
      res.status(200);
      return res.send({ message: 'Task deleted' });
    });
  }

  res.status(500);
  return res.send({ message: 'Invalid task id' });
};
