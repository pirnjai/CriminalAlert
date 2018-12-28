var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
    var locals = res.locals;
    
	// Set locals
	locals.section = 'blog';
	locals.filters = {
		case: req.params.case,
	};
	locals.data = {
		case: [],
    };
    
    // Load the current post
	view.on('init', function (next) {

		var q = keystone.list('Case').model.findOne({
			state: 'published',
			slug: locals.filters.case,
		});

		q.exec(function (err, result) {
			locals.data.case = result;
			next(err);
		});

    });
    
	// Render the view
    view.render('case');
};