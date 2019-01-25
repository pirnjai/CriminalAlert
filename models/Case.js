var keystone = require('keystone');
var Types = keystone.Field.Types;

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
});

Case.defaultColumns = 'number|10%, allegation|30%, typeOfCase|30%, levelOfViolence|20%';
Case.register();
