import mongoose from 'mongoose';

export const Component = mongoose.model(
  'Component',
  mongoose.Schema({
    name: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Project'
    }

  }, {
    timestamps: true,
  })
)

export const Feature = mongoose.model(
  'Feature',
  mongoose.Schema({
    name: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: false
    },

    component: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Component'
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
  })
)

export const Project = mongoose.model(
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

  }, {
    timestamps: true,
  }),
);