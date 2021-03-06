define([
  'view',
  'hbs!templates/reddit/register',
  'models/reddit/user'
], function (View, template, User) {
  return View.extend({
    name: 'reddit/register',
    template: template,
    tagName: 'form',
    className: 'form-horizontal',

    events: {
      "submit": "submit",
      "validate": function (attributes, errors) {
        if (attributes.password !== attributes.password2) {
          errors.push("Die Passwörter müssen übereinstimmen");
        }
      }
    },

    submit: function (event) {
      event.preventDefault();

      this.serialize(function (attributes, release) {
        var self = this;
        var user = new User(_.omit(attributes, "password2"));

        user.save({}, {
          success: function () {
            release();
            self.trigger("user:registered", user);
          },

          error: function (model, response) {
            alert("Registration failed");
            release();
          }
        })
      });
    }
  });
});
