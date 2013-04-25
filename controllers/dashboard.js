module.exports = function(app) {

	app.get('/dashboard', function(req, res, next) {
		res.render('dashboard/dashboard.html');
	});
	
}
