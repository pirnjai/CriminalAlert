const keystone = require('keystone');
const Types = keystone.Field.Types;

const Admin = new keystone.List('Admin', {
  schema: {
    timestamps: true,
  },
  map: { name: 'displayName' },
});

Admin.add({
  displayName: { type: String, required: true, initial: true },
  password: { type: Types.Password, required: true, initial: true },
  email: { type: Types.Email, required: true, initial: true, unique: true },
});

Admin.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

Admin.defaultColumns = 'displayName, email';

Admin.register();

