import mongoose from 'mongoose';

module.exports = mongoose.model(
  'Project',
  mongoose.Schema({
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: false,
    },

    client: {
      type: String,
      required: true,
    },

    developer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Person',
    },

    manager: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Person',
    },

    consultant: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Person',
    },
  }, {
    timestamps: true,
  }),
);
