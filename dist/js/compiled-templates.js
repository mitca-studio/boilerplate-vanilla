Handlebars.registerPartial("header", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<header id=\"topHead\" class=\"navbar navbar-fixed-top\" role=\"navigation\">\n	<div class=\"container\">\n		<div class=\"navbar-header\">\n			<div class=\"options-left\">\n				<a href=\"\" id=\"btn-list\">\n					<div class=\"btn-left categories-icon\" type=\"button\">\n						<i class=\"fa fa-list custom\"></i>\n					</div>\n				</a>\n			</div>\n			<div class=\"options-right\" type=\"button\">\n				<!-- Mobile -->\n				<div class=\"mobile\">\n					<a data-toggle=\"dropdown\" href=\"#\" id=\"social\"><i class=\"fa fa-ellipsis-v custom\"></i></a>\n					<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n						<!-- /Perfil ó Editar perfil -->\n						<li><a href=\"\">Empezar de nuevo</a></li>\n						<li><a href=\"\">Configuración</a></li>\n						<li><a href=\"\">Ayuda</a></li>\n					</ul>\n				</div>\n			</div>\n			<div class=\"navbar-center\">\n				Proyecto Base (Grunt)\n			</div>\n		</div>\n	</div>\n	<div class=\"shadow\"></div>\n</header>\n";
},"useData":true}));

this["JST"] = this["JST"] || {};

this["JST"]["app/templates/home.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.header, '', 'header', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<nav id='menu-ui' class='menu-ui'></nav>\n<div id='map'></div>\n";
},"usePartial":true,"useData":true});