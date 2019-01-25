const keystone = require('keystone');
const Types = keystone.Field.Types;

const Tag = new keystone.List('Tag', {
  schema: {
    timestamps: true,
  },
  map: { name: 'name' },
});

Tag.add({
  name: { type: String, required: true, initial: true },
  for: { type: Types.Select, options: 'article', default: 'article' },
});

Tag.defaultColumns = 'name, for';

Tag.register();
