define([
  'collection-view',
  'hbs!templates/reddit/comments-item',
  'hbs!templates/reddit/comments-empty',
  'views/reddit/vote'
], function (CollectionView, itemTemplate, emptyTemplate, VoteView) {
  return CollectionView.extend({
    name: 'reddit/comments',
    itemTemplate: itemTemplate,
    emptyTemplate: emptyTemplate,
    tagName: 'ul',
    className: 'media-list',

    itemContext: function (comment) {
      return _.extend({
        voteView: new VoteView({ model: comment })
      }, comment.attributes);
    }
  });
});
