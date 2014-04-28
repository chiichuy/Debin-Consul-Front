var Backbone	= require('backbone'),
	$			= require('jquery'),
	Handlebars	= require('handlebars'),
	Utils		= require('../utils/utils');
	app        	= Backbone.app;

module.exports = Backbone.View.extend({
	tagName: "div",
	className: "login",
	el: $('#container'),
	template: Handlebars.compile($('#templateLogin').html()),
	events:{
		"click a.entrar" : "login",
		'keypress input' : 'validarEnter'
	},
	validarEnter:function(e){
		if(e.keyCode == 13){
			this.login(e);
		}
	},
	login:function(e){
		e.preventDefault();
		var usuario = $('#loginUsuario').val();
		var pass = $('#loginPass').val();

		if(usuario == "" || pass == ""){
			return;
		}
		var url = 'http://consul.herokuapp.com/api-token-auth/';
		//var dataOauth2 = 'grant_type=password&client_id=id&client_secret=secret&username='+usuario+'&password='+pass;
		var data = 'username='+usuario+'&password='+pass;
		var self = this;
		$.ajax({
          url: url,  
          type: 'POST',
          crossDomain: true,
          contentType: 'application/x-www-form-urlencoded',
          dataType: 'json',
          data:data,
          success:function(res){
        	console.log("exito",res);
        	Utils.setCookie('debinConsul','Token ' + res.token,1);
        	location.href = "";
          },
          error:function(){
          	console.log("error");
          }
        });
		console.log(this.el);
		
	},
	render: function() {
    	$("#container").html(this.template());
  	}
});