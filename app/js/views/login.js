var Backbone	= require('backbone'),
	$			= require('jquery'),
	Utils		= require('../utils/utils');

module.exports = Backbone.View.extend({
	el: $('#login'),
	events:{
		"click a.entrar" : "login",
		'keypress input' : 'login'
	},
	login:function(e){
		var usuario = $('#loginUsuario').val();
		var pass = $('#loginPass').val();
		var url = 'http://consul.herokuapp.com/api-token-auth/';
		//var dataOauth2 = 'grant_type=password&client_id=id&client_secret=secret&username='+usuario+'&password='+pass;
		var data = 'username='+usuario+'&password='+pass;

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
          },
          error:function(){
          	console.log("error");
          }
        });
		console.log(this.el);
		e.preventDefault();
	}
});