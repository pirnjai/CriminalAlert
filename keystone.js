// // Simulate config options from your production environment by
// // customising the .env file in your project's root folder.
// require('dotenv').config();

// // Require keystone
// var keystone = require('keystone');

// // Initialise Keystone with your project's configuration.
// // See http://keystonejs.com/guide/config for available options
// // and documentation.

// keystone.init({
// 	'name': 'Criminal Alert',
// 	'brand': 'Criminal Alert',

// 	'sass': 'public',
// 	'static': 'public',
// 	'favicon': 'public/favicon.ico',
// 	'views': 'templates/views',
// 	'view engine': 'pug',

// 	'auto update': true,
// 	'session': true,
// 	'auth': true,
// 	'user model': 'User',
// 	'mongo': 'mongodb://localhost:27017/criminal-alert',
// 	'cloudinary config': 'cloudinary://api_key:api_secret@cloud_name',
// });

// keystone.import('models');

// // keystone.set('locals', {
// // 	_: require('lodash'),
// // 	env: keystone.get('env'),
// // 	utils: keystone.utils,
// // 	editable: keystone.content.editable,
// // });

// // Load your project's Routes
// // keystone.set('routes', require('./routes'));
// keystone.set('app', require('./app'));


// // Configure the navigation bar in Keystone's Admin UI
// keystone.set('nav', {
// 	posts: ['posts', 'post-categories'],
// 	users: 'users',
// });

// // Start Keystone to connect to your database and initialise the web server

// keystone.start();



const keystone = require('keystone');
// const config = require('./config');

keystone.init({
//   'host': config.server.host,
//   'port': config.server.port,

//   'cookie secret': config.cookieSecret,
//   'mongo': config.mongoUri,
//   'cloudinary config': config.cloudinaryUrl,
  'cloudinary config': 'cloudinary://952682218983223:S4Jv60tUgfOkGLJoh0ziHXLkXgE@parktical-1',
  'auto update': true,

  'user model': 'Admin',
  'auth': true,

//   'name': 'Parktical Admin Panel',
//   'admin path': 'admin',
//   'signin logo': '/assets/logo-02@3x.png',
  'name': 'Criminal Alert',

  'wysiwyg cloudinary images': true,
  'wysiwyg additional buttons': 'fullscreen',
  'wysiwyg additional plugins': 'fullscreen'
    + ', autoresize, autolink, autosave, wordcount',
});

keystone.import('models');

keystone.set('nav', {
  'Administrative': ['Admin'],
  'Posts': ['Tag'],
});

keystone.set('app', require('./app'));


keystone.start({
  // onHttpServerCreated: function () {
  //   require('keystone/server/createApp')(keystone);
  // }
});
