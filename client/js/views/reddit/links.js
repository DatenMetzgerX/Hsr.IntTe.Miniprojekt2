define([
  'view',
  'hbs!templates/reddit/links',
  'views/reddit/comments',
  'views/reddit/vote',
  'services/UserService'
], function (View, template, CommentsView, VoteView, UserService) {
  return View.extend({
    name: 'reddit/links',
    template: template,

    linkContext: function (link) {
      return _.extend({
        commentsView: new CommentsView({ collection: link.get("comments") }),
        voteView: new VoteView({ model: link }),
        loggedIn: UserService.isLoggedIn()
      }, link.attributes);
    }
  });
});
