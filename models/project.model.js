import { Schema, model } from 'mongoose';

module.exports = model(
  'Project',
  Schema(
    {
      name: {
        type: String,
        required: true,
      },

      developer: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Person',
      },

      manager: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Person',
      },
      consultant: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Person',
      },
    },
    {
      timestamps: true,
    },
  ),
);
