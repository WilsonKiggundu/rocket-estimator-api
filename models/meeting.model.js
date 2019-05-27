import { Schema, model } from 'mongoose';

module.exports = model(
  'Meeting',
  Schema({
    title: {
      type: String,
      required: true,
    },

    project: {
      type: Schema.Types.ObjectId,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    certainty: {
      type: Number,
      min: 0.5,
      max: 0.9,
      required: true,
    },
  }),
);
