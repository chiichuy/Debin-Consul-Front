var Backbone	= require('backbone'),
	Login 		= require('../views/login');

module.exports = Backbone.Router.extend({
	routes:{
		"":"login",
		"test":"test"
	},
	initialize : function(){
		this.login = new Login();
		console.log("hola mundo");
		Backbone.history.start();
	},
	login:function(){
		console.log("index");
	},
	test:function(name){
		console.log(name);
	}
});