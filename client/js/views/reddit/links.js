define([
  'view',
  'hbs!templates/reddit/links',
  'views/reddit/comments',
  'views/reddit/vote',
  'views/reddit/comment',
  'moment'
], function (View, template, CommentsView, VoteView, CommentView, moment) {
  return View.extend({
    name: 'reddit/links',
    template: template,

    linkContext: function (link) {
      return _.extend({
        commentsView: new CommentsView({ collection: link.get("comments") }),
        commentView: new CommentView({ model: link }),
        voteView: new VoteView({ model: link }),
        posted: moment(link.attributes.createTime).startOf().fromNow()
      }, link.attributes);
    },

    "expandComments": function (event) {
      var link = $(event.target).model();
      link.set('showComments', !link.get('showComments'));
    }
  });
});
