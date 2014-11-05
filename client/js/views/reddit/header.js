define([
  'view',
  'hbs!templates/reddit/header',
  'services/UserService',
  'services/eventBus',
  'views/reddit/login'
], function (View, template, userService, eventBus, LoginView) {
  return View.extend({
    name: 'reddit/header',
    template: template,
    tagName: 'nav',
    className: "navbar navbar-default",
    attributes: {
        role: "navigation"
    },

    loginView: LoginView,

    initialize: function () {
      this.listenTo(eventBus, 'user:loggedIn', this.conditionalRender);
      this.listenTo(eventBus, 'user:loggedOut', this.conditionalRender);
    },

    context: function () {
      return {
        loggedIn: userService.isLoggedIn()
      }
    }
  });
});
