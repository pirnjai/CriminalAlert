var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Department Model
 * ==========
 */

var Department = new keystone.List('Department', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

Department.add({
	name: { type: String, default: ' ', required: true },
	address: { type: String, default: ' ', required: true },
	telephone: { type: String, default: ' ', required: true }
	// title: { type: String, required: true },
	// state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	// author: { type: Types.Relationship, ref: 'User', index: true },
	// publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	// image: { type: Types.CloudinaryImage },
	// content: {
	// 	brief: { type: Types.Html, wysiwyg: true, height: 150 },
	// 	extended: { type: Types.Html, wysiwyg: true, height: 400 },
	// },
	// categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
});

// Post.schema.virtual('content.full').get(function () {
// 	return this.content.extended || this.content.brief;
// });

Department.defaultColumns = 'name, address|60%, telephone|20%';
Department.register();
