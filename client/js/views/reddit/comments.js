define([
  'collection-view',
  'hbs!templates/reddit/comments-item',
  'hbs!templates/reddit/comments-empty'
], function (CollectionView, itemTemplate, emptyTemplate) {
  return CollectionView.extend({
    name: 'reddit/comments',
    itemTemplate: itemTemplate,
    emptyTemplate: emptyTemplate,
    tagName: 'ul',
    className: 'media-list',

    initialize: function () {
      console.log("initilaize");
    },

    events: {
      rendered: function () {
        console.log("Rendered: " + this.collection);
      }
    }
  });
});
