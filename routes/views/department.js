var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
    var locals = res.locals;
    
	// Set locals
	locals.section = 'blog';
	locals.filters = {
		department: req.params.department,
	};
	locals.data = {
		department: [],
    };
    
    // Load the current post
	view.on('init', function (next) {

		var q = keystone.list('Department').model.findOne({
			state: 'published',
			slug: locals.filters.department,
		});

		q.exec(function (err, result) {
			locals.data.department = result;
			next(err);
		});

    });
    
	// Render the view
    view.render('department');
};