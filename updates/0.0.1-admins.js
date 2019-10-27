require('dotenv').config();
exports.create = {
	Admin: [
		{ 'name.first': process.env.ADMIN_FIRST ||'Admin',
      'name.last':  process.env.ADMIN_LAST || 'User',
      'email': process.env.ADMIN_EMAIL || 'admin@keystone.com',
      'password': process.env.ADMIN_PASSWORD ||'test123',
      'isAdmin': true },
	],
};
