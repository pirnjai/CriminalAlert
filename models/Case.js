var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Case Model
 * ==========
 */

var Case = new keystone.List('Case', {
	map: { name: 'allegation' },
	autokey: { path: 'slug', from: 'allegation', unique: true },
});

Case.add({
    number: { type: String, default: ' ', required: true },
    allegation: { type: String, default: ' ', required: true },
	date: { type: Date, default: Date.now },
	typeOfCase: { type: Types.Select, options: 'คดีอุกฉกรรจ์และสะเทือนขวัญ , คดีฆ่าชีวิตร่างกายและเพศ, คดีประทุษร้ายต่อทรัพย์, คดีที่น่าสนใจ, คดีรัฐเป็นผู้เสียหาย'},
    circumstance: { type: Types.Html, height: 150 },
    violence: { type: String, default: ' ', required: true },
    levelOfViolence: { type: Types.Select, options: 'ความเสียหายต่อชีวิต , ความเสียหายต่อร่างกาย , ความเสียหายต่อทรัพย์สิน' },
    nameOfLocation: { type: String, default: ' ', required: true },
    Location: { type: Types.GeoPoint }
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

Case.defaultColumns = 'number|10%, allegation|30%, typeOfCase|30%, levelOfViolence|20%';
Case.register();
