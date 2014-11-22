define([
  'view',
  'hbs!templates/reddit/comment',
  'services/eventBus',
  'services/UserService',
  'models/reddit/comment'
], function (View, template, eventBus, UserService, Comment) {
  return View.extend({
    name: 'reddit/comment',
    template: template,

    events: {
      "submit": "submit"
    },

    initialize: function () {
      this.listenTo(eventBus, 'user:loggedIn', this.conditionalRender);
      this.listenTo(eventBus, 'user:loggedOut', this.conditionalRender);
    },

    context: function () {
      return _.extend({
        loggedIn: UserService.isLoggedIn()
      }, this.model.attributes);
    },

    submit: function (event) {
      event.preventDefault();

      this.serialize(function (attributes, release) {
        this.model.get("comments").create({
          text: "blalba"

        }, {
          success: function () {
            release();
            alert('success');
          },

          error: function () {
            release();
            alert('Comment not submitted error');
          }
        });
      });
    }
  });
});
