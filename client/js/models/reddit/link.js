define([
  'model',
  'hbs!templates/reddit/links',
  'collections/reddit/comments',
  'services/eventBus'
], function (Model, template, CommentsCollection, eventBus) {
  return Model.extend({
    name: 'reddit/link',
    template: template,
    urlRoot: 'http://localhost:8888/entries',

    defaults: function () {
      return {
        title: null,
        author: null,
        url: null,
        createTime: new Date(),
        rating: null,
        comments: new CommentsCollection(),
        votes: 0
      }
    },

    initialize: function () {
      this.listenTo(eventBus, 'user:loggedIn', this.conditionalRender);
      this.listenTo(eventBus, 'user:loggedOut', this.conditionalRender);
    },

    parse: function (response) {
      var result = Model.prototype.parse.apply(this, arguments);

      var comments = this.get("comments") || new CommentsCollection();
      comments.reset(result.comments, { parse: true });
      result.comments = comments;

      result.votes = result.rating.value;
      delete result.rating;

      return result;
    }
  });
});
