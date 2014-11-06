define([
  'view',
  'hbs!templates/reddit/links',
  'views/reddit/comments',
  'views/reddit/vote'
], function (View, template, CommentsView, VoteView) {
  return View.extend({
    name: 'reddit/links',
    template: template,

    linkContext: function (link) {
      return _.extend({
        commentsView: new CommentsView({ collection: link.get("comments") }),
        voteView: new VoteView({ model: link })
      }, link.attributes);
    }
  });
});
