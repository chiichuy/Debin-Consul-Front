var Backbone	= require('backbone'),
	$			= require('jquery');

module.exports = Backbone.View.extend({
	el: $('#login'),
	events:{
		"click a.entrar" : "login"
	},
	login:function(e){
		var usuario = $('#loginUsuario').val();
		var pass = $('#loginPass').val();
		var url = 'http://consul.herokuapp.com/oauth2/access_token';
		var data = 'grant_type=password&client_id=5ea5050ce4532a46822d&client_secret=6782a3892b27b70904539b51a5d12cd675db28d3&username='+usuario+'&password='+pass;

		$.ajax({
          url: url,  
          type: 'POST',
          crossDomain: true,
          contentType: 'application/x-www-form-urlencoded',
          dataType: 'json',
          data:data,
          success:function(res){
        	console.log("exito",res);
          },
          error:function(){
          	console.log("error");
          }
        });
		console.log(this.el);
		e.preventDefault();
	}
});