import mongoose from 'mongoose';

module.exports = mongoose.model(
  'Person',
  mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    },
  ),
);
