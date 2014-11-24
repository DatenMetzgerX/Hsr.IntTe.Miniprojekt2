define([
  'collection-view',
  'hbs!templates/reddit/comments-item',
  'hbs!templates/reddit/comments-empty',
  'views/reddit/vote',
  'moment'
], function (CollectionView, itemTemplate, emptyTemplate, VoteView, moment) {
  return CollectionView.extend({
    name: 'reddit/comments',
    itemTemplate: itemTemplate,
    emptyTemplate: emptyTemplate,
    tagName: 'ul',
    className: 'media-list',

    itemContext: function (comment) {
      return _.extend({
        voteView: new VoteView({ model: comment }),
        posted: moment(comment.attributes.createTime).startOf().fromNow()
      }, comment.attributes);
    }
  });
});
