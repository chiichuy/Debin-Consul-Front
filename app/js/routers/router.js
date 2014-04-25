var Backbone	= require('backbone'),
	Login 		= require('../views/login'),
	Utils		= require('../utils/utils');

module.exports = Backbone.Router.extend({
	routes:{
		"":"login",
		"test":"test"
	},
	initialize : function(){
		this.galleta = Utils.getCookie('debinConsul');
		if (this.galleta == ""){
			alert("has login!!");
		}else{
			alert('tu galleta es: ' + this.galleta);
		}

		this.login = new Login();
		Backbone.history.start();
	},
	login:function(){
		console.log("index");
	},
	test:function(name){
		console.log(name);
	}
});