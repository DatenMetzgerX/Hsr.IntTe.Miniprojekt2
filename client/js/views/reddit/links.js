define([
  'view',
  'hbs!templates/reddit/links',
  'views/reddit/comments'
], function (View, template, CommentsView) {
  return View.extend({
    name: 'reddit/links',
    template: template,

    linkContext: function (link) {
      return _.extend({
        commentsView: new CommentsView({ collection: link.get("comments") })
      }, link.attributes);
    }
  });
});
