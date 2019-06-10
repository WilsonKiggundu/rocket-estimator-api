import {
  Types,
} from 'mongoose';
import Person from '../models/person.model';

exports.create = async (req, res) => {
  try {
    if (!req.body) {
      res.status(500);
      return res.send({
        message: 'Invalid request.',
      });
    }
    if (!req.body.name) {
      res.status(500);
      return res.send({
        message: 'Person name is missing.',
      });
    }

    if (typeof req.body.name !== 'string') {
      res.status(500);
      return res.send({
        message: 'Person name is invalid. It should be a string',
      });
    }

    await Person.create(req.body, (err, person) => {
      if (err) {
        res.status(500);
        return res.send({
          message: err.message,
        });
      }
      res.status(201);
      return res.json(person);
    });
  } catch (error) {
    res.status(500);
    return res.send({
      message: error,
    });
  }
};

// get person by Id
exports.read = async (req, res) => {
  try {
    await Person.find({}, (err, person) => {
      if (err) {
        res.status(500);
        return res.send({
          message: err.message,
        });
      }

      res.status(200);
      return res.json(person);
    });
  } catch (error) {
    res.status(500);
    return res.send({
      message: error,
    });
  }
};

// update a person
exports.update = async (req, res) => {
  if (!req.body) {
    res.status(500);
    return res.send('Invalid request.');
  }

  if (!req.body.name) {
    res.status(500);
    return res.send('Person name is missing.');
  }

  if (typeof req.body.name !== 'string') {
    res.status(500);
    return res.send('Person name is invalid. It should be a string');
  }

  try {
    const {
      id,
    } = req.params;

    await Person.updateOne({
      _id: id,
    }, (err, person) => {
      if (err) {
        res.status(500);
        return res.send({
          message: err.message,
        });
      }

      res.status(200);
      return res.json(person);
    });
  } catch (error) {
    res.status(500);
    return res.send({
      message: 'internal server error',
    });
  }
};

// delete a person
exports.delete = async (req, res) => {
  const {
    id,
  } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    res.status(500);
    return res.send({
      message: 'Invalid person id',
    });
  }

  try {
    await Person.remove({
      _id: id,
    }, (err) => {
      if (err) {
        res.status(500);
        return res.send({
          message: err.message,
        });
      }
      res.status(200);
      return res.send('Person deleted successfully');
    });
  } catch (error) {
    res.status(500);
    return res.send({
      message: 'internal server error',
    });
  }
};