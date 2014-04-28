var Handlebars = require("handlebars");module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=login><div class=loginLogo><figure><img src=img/logo.gif alt=\"Debin consul logo\"></figure></div><div class=loginBox><div class=loginBoxHeader></div><div id=login class=loginBoxBody><div class=loginUsuario><span>Usuario:</span><input id=loginUsuario type=text placeholder=Usuario></div><div class=loginPassword><span>Contraseña:</span><input id=loginPass type=password placeholder=Contraseña></div><a href=# class=\"boton entrar\">Entrar</a> <a href=# class=boton>Ayuda</a></div></div></div>";
  });