define([
  'backbone',
  'views/root',
  'collections/reddit/links',
  'views/reddit/links'
], function (Backbone, RootView, Links, LinksView) {
  return Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function () {
      var collection = new Links();
      var view = new LinksView({ collection: collection });

      RootView.getInstance().setView(view);
    }
  });
});
