define([
  'view',
  'hbs!templates/reddit/comment',
  'services/eventBus',
  'services/UserService'
], function (View, template, eventBus, UserService) {
  return View.extend({
    name: 'reddit/comment',
    template: template,

    initialize: function () {
      this.listenTo(eventBus, 'user:loggedIn', this.conditionalRender);
      this.listenTo(eventBus, 'user:loggedOut', this.conditionalRender);
    },

    context: function () {
      return _.extend({
        loggedIn: UserService.isLoggedIn()
      }, this.model.attributes);
    }
  });
});
