define([
  'view',
  'hbs!templates/reddit/login',
  'services/UserService'
], function (View, template, userService) {
  return View.extend({
    name: 'reddit/login',
    template: template,
    tagName: 'form',
    className: 'navbar-form navbar-right',

    events: {
      'submit': 'submit'
    },

    "submit": function (event) {
      event.preventDefault();

      var attributes = this.serialize();
      userService.login(attributes.username, attributes.password)
        .fail(_.bind(this.loginFailed))
        .done();
    },

    loginFailed: function () {
      alert("Login failed");
    }
  });
});
