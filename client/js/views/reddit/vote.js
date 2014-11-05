define([
  'view',
  'hbs!templates/reddit/vote',
  'services/UserService',
  'services/eventBus'
], function (View, template, userService, eventBus) {
  return View.extend({
    name: 'reddit/vote',
    template: template,

    initialize: function () {
      this.listenTo(eventBus, 'user:loggedIn', this.conditionalRender);
      this.listenTo(eventBus, 'user:loggedOut', this.conditionalRender);
    },

    context: function () {
        return _.extend({
          loggedIn: userService.isLoggedIn()
        }, this.model.attributes);
    },

    voteUp: function () {
      this.vote('up');
    },

    voteDown: function () {
      this.vote('down');
    },

    vote: function (direction) {
      var url = _.result(this.model, 'url') + "/" + direction;
      var self = this;
      $.post(url, function (response) {
        self.model.set("votes", response);
      });
    }
  });
});
