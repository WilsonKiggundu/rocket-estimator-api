import { Types } from 'mongoose';
import Meeting from '../models/meeting.model';

exports.create = async (req, res) => {
  if (!req.body) {
    res.status(500);
    return res.send({ message: 'Invalid request. Meeting object can not be null' });
  }

  if (!Types.ObjectId.isValid(req.body.project)) {
    res.status(500);
    return res.send({ message: 'Invalid project id' });
  }

  await Meeting.create(req.body, (err, meeting) => {
    if (err) {
      res.status(500);
      return res.send({ message: err.message });
    }
    res.status(201);
    return res.json(meeting);
  });

  res.status(500);
  return res.send({ message: 'internal server error' });
};

// get meeting by Id
exports.read = async (req, res) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    res.status(500);
    return res.send({ message: 'Invalid meeting id' });
  }

  await Meeting.find({ _id: req.params.id }, (err, meeting) => {
    if (err) {
      res.status(500);
      return res.send({ message: err.message });
    }
    res.status(200);
    return res.json(meeting);
  });

  res.status(500);
  return res.send({ message: 'internal server error' });
};

// update a meeting
exports.update = async (req, res) => {
  if (!req.body) {
    res.status(500);
    return res.send({ message: 'Invalid request.' });
  }

  const { id } = req.params;

  await Meeting.updateOne({ _id: id }, (err, meeting) => {
    if (err) {
      res.status(500);
      return res.send({ message: err.message });
    }
    res.status(200);
    return res.json(meeting);
  });

  res.status(500);
  return res.send({ message: 'internal server error' });
};

// delete a meeting
exports.delete = async (req, res) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    res.status(500);
    return res.send({ message: 'Invalid meeting id' });
  }

  await Meeting.remove({ _id: id }, (err) => {
    if (err) {
      res.status(500);
      return res.send({ message: err.message });
    }
    res.status(200);
    return res.send({ message: 'Meeting deleted successfully' });
  });

  res.status(500);
  return res.send({ message: 'internal server error' });
};
