define([
  'view',
  'hbs!templates/reddit/header'
], function (View, template) {
  return View.extend({
    name: 'reddit/header',
    template: template,
    tagName: 'nav',
    className: "navbar navbar-default",
    attributes: {
        role: "navigation"
      }
  });
});
