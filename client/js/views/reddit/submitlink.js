define([
  'view',
  'hbs!templates/reddit/submitlink',
  'models/reddit/user'
], function (View, template, User) {
  return View.extend({
    name: 'reddit/submitlink',
    template: template,
    tagName: 'form',
    className: 'form-horizontal',

    events: {
      "submit": "submit"
    },

    submit: function (event) {
      alert("not implemented yet");
    }
  });
});
