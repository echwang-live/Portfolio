module.exports = function(app){
	// Root directory for index view
	app.get('/', function (req, res){
	    console.log('Entered root');
	    res.render('index');
	})
}