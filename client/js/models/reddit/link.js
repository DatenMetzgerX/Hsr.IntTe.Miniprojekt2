define(['model', 'collections/reddit/comments'], function (Model, CommentsCollection) {
  return Model.extend({
    name: 'reddit/link',

    defaults: function () {
      return {
        title: null,
        author: null,
        url: null,
        createTime: new Date(),
        rating: null,
        comments: new CommentsCollection()
      }
    },

    parse: function (response) {
      var result = Model.prototype.parse.apply(this, arguments);

      var comments = this.get("comments") || new CommentsCollection();
      comments.reset(result.comments, { parse: true });
      result.comments = comments;

      return result;
    }
  });
});
