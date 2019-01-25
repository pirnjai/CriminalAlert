// const express = require('express');
// const keystone = require('keystone');
// // var middleware = require('./middleware');
// var importRoutes = keystone.importer(__dirname);

// const routes = {
// 	api: importRoutes('./api'),
//   };

// // Common Middleware
// // keystone.pre('routes', middleware.initLocals);
// // keystone.pre('render', middleware.flashMessages);

// // Import Route Controllers
// // var routes = {
// // 	views: importRoutes('./views'),
// // };

// // Setup Route Bindings
// exports = module.exports = function (app) {
// 	app.get('/', routes.api.index);
// 	// app.get('/blog/:category?', routes.api.blog);
// 	// app.get('/blog/post/:post', routes.api.post);
// 	// app.get('/department/:department', routes.api.department);
// 	app.get('/case/:case', routes.api.case);
// };

const express = require('express');
const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);
// const middlewares = require('../middlewares');

const routes = {
  api: importRoutes('./api'),
};

exports = module.exports = function (app) {
  // Server uptime
  app.get('/', routes.api.index);
//   app.use('/assets', express.static('assets'));

  // Parking Lots
//   app.get('/parkinglots/search', routes.api.parkinglots['get.search']);
//   app.get('/parkinglots/recommended', routes.api.parkinglots['get.recommended']);
//   app.get('/parkinglots/details/:id', routes.api.parkinglots['get.details']);

  // Articles
//   app.get('/articles', routes.api.articles['get.articles']);
//   app.get('/articles/:id', routes.api.articles['get.details']);
};
