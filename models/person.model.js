import mongoose from 'mongoose';
import 'mongoose-type-email';

module.exports = mongoose.model(
  'Person',
  mongoose.Schema(
    {
      name: {
        type: mongoose.SchemaTypes.String,
        required: true,
      },

      roles: [
        {
          type: mongoose.SchemaTypes.String,
          enum: ['PM', 'DEV', 'ADV'],
          default: null,
        },
      ],

      email: {
        type: mongoose.SchemaTypes.Email,
        required: true,
      },
    },
    {
      timestamps: true,
    },
  ),
);
