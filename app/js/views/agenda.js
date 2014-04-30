var Backbone	= require('backbone'),
	$			= require('jquery'),
	Handlebars	= require('handlebars'),
	Agenda 		= require('../templates/agenda');

module.exports = Backbone.View.extend({
	tagName: "div",
	className: "agenda",
	el: $('#container'),
	template: Handlebars.compile(Agenda()),
	render: function() {
    	$("#container").html(this.template());
  	}
});