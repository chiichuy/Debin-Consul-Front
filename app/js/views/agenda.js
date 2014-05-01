var Backbone	= require('backbone'),
	$			= require('jquery'),
	Handlebars	= require('handlebars'),
	Agenda 		= require('../templates/agenda');

module.exports = Backbone.View.extend({
	tagName: "div",
	className: "agenda",
	el: $('#container'),
	renglones:{renglones:[
		{descripcion:"Hola mundo",hora:"2:12PM"},
		{descripcion:"Hola mundo 2",hora:"2:49PM"}
	]},
	template: Agenda,
	render: function() { 
    	$("#container").html(this.template(this.renglones));
  	}
});