define(['collection', 'models/reddit/comment'], function (Collection, Comment) {
  return Collection.extend({
    name: 'reddit/comments',
    model: Comment
  });
});
