import { Schema, model } from 'mongoose';

module.exports = model(
  'Feature',
  Schema({
    title: {
      type: String,
      required: [true, 'The title is required'],
    },
  }),
);
