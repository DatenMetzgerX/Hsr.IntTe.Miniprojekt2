define([
  'backbone',
  'views/root',
  'collections/reddit/links',
  'services/UserService',
  'views/reddit/links',
  'views/reddit/register',
  'views/reddit/submitlink'
], function (Backbone, RootView, Links, userService, LinksView, RegisterView, SubmitlinkView) {
  return Backbone.Router.extend({
    routes: {
      "": "index",
      "register": "register",
      "logout": "logout",
      "submitlink": "submitlink"
    },

    index: function () {
      var collection = new Links();
      var view = new LinksView({ collection: collection });

      RootView.getInstance().setView(view);
    },

    register: function () {
      var view = new RegisterView();
      this.listenTo(view, 'user:registered', function () {
        Backbone.history.navigate("", true);
      });

      RootView.getInstance().setView(view);
    },

    logout: function () {
      userService.logout().done();
      Backbone.history.navigate("", { replace: true });
    },

    submitlink: function (){
      var view = new SubmitlinkView();

      RootView.getInstance().setView(view);
    }
  });
});
