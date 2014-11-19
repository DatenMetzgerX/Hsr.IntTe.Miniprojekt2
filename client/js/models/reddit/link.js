define(['model', 'collections/reddit/comments'], function (Model, CommentsCollection) {
  return Model.extend({
    name: 'reddit/link',
    url: 'http://localhost:8888/entries',

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
