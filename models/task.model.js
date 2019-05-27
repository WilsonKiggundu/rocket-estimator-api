import { Schema, model } from 'mongoose';

module.exports = model(
  'Task',
  Schema(
    {
      project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: [true, 'required'],
      },
      description: {
        type: String,
        required: [true, 'required'],
      },
      feature: {
        type: String,
      },
      research: {
        type: Number,
        required: false,
      },
      planning: {
        type: Number,
        required: false,
      },
      development: {
        type: Number,
        required: [true, 'required'],
      },
      testing: {
        type: Number,
        required: [true, 'required'],
      },
      stabilization: {
        type: Number,
        required: false,
      },
      certainty: {
        type: Number,
        required: [true, 'required'],
        min: 0.5,
        max: 0.9,
      },
      adjusted: {
        type: Number,
        required: [true, 'required'],
      },
      comment: {
        type: String,
        required: false,
      },
    },
    {
      timestamps: true,
    },
  ),
);
