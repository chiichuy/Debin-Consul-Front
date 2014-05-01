var Handlebars = require("handlebars");module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<div class=renglon><div class=descripcion><span>"
    + escapeExpression(((stack1 = (depth0 && depth0.descripcion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></div><div class=horaRenglon><span>"
    + escapeExpression(((stack1 = (depth0 && depth0.hora)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></div></div>";
  return buffer;
  }

  buffer += "<div class=agendaView><h2>Agenda</h2><div class=agenda><div class=dias><a href=# id=dia>D</a> <a href=# id=semana>S</a> <a href=# id=buscar>B</a></div><div class=cabeza><span class=dia>Miercoles 30 de abril</span> <span class=hora>Hora</span></div><div class=cuerpo>";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.renglones), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div></div></div>";
  return buffer;
  });