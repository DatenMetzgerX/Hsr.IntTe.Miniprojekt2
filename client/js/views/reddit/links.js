define([
  'view',
  'hbs!templates/reddit/links'
], function (View, template) {
  return View.extend({
    name: 'reddit/links',
    template: template
  });
});
