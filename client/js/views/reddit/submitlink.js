define([
  'view',
  'hbs!templates/reddit/submitlink',
  'models/reddit/link',
  'services/UserService'
], function (View, template, Link, userService) {
  return View.extend({
    name: 'reddit/submitlink',
    template: template,
    tagName: 'form',
    className: 'form-horizontal',

    events: {
      "submit": "submit"
    },

    submit: function (event) {
      event.preventDefault();

      this.serialize(function (attributes, release) {
        var self = this;
        var link = new Link({
          author: userService.getUser().get("name"),
          title: attributes.title,
          url: attributes.url
        });

        link.save({}, {
          success: function () {
            release();
            self.trigger("link:submitted", link);
          },

          error: function () {
            release();
            alert('Link not submitted error');
          }
        });
      });
    }
  });
});
