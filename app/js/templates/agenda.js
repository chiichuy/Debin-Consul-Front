var Handlebars = require("handlebars");module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=agendaView><h1>Agenda</h1><div class=dias><a href=# id=dia>D</a> <a href=# id=semana>S</a> <a href=# id=buscar>B</a></div><div class=agenda><div class=cabeza><span class=dia>Miercoles 30 de abril</span> <span class=hora>Hora</span></div><div class=cuerpo><div class=renglon><div class=descripcion><span>Ir para algun lugar</span></div><div class=horaRenglon><span>6:00AM</span></div></div></div></div></div>";
  });