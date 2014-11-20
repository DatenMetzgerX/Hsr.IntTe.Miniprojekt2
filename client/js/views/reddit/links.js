define([
  'view',
  'hbs!templates/reddit/links',
  'views/reddit/comments',
  'views/reddit/vote',
  'views/reddit/comment'
], function (View, template, CommentsView, VoteView, CommentView) {
  return View.extend({
    name: 'reddit/links',
    template: template,

    linkContext: function (link) {
      return _.extend({
        commentsView: new CommentsView({ collection: link.get("comments") }),
        commentView: new CommentView({ model: link }),
        voteView: new VoteView({ model: link })
      }, link.attributes);
    },

    "expandComments": function (event) {
      var link = $(event.target).model();
      link.set('showComments', !link.get('showComments'));
    }
  });
});
