var Backbone	= require('backbone'),
	Login 		= require('../views/login'),
	Agenda 		= require('../views/agenda'),
	Utils		= require('../utils/utils');
	$			= require('jquery');

module.exports = Backbone.Router.extend({
	routes:{
		"login":"login",
		"hola":"test"
	},
	initialize : function(){
		this.galleta = Utils.getCookie('debinConsul');
		
		Backbone.history.start({pushState: false});

		if (this.galleta == ""){
			this.navigate("login", {trigger: true});
		}else{
			this.navigate("hola", {trigger: true});
		}

		
	},
	login:function(){
		this.loginView = new Login();
		this.loginView.render();
	},
	test:function(){
		this.agendaView = new Agenda();
		this.agendaView.render();
	}
});