define(['collection', 'models/reddit/comment'], function (Collection, Comment) {
  return Collection.extend({
    name: 'reddit/comments',
    model: Comment,
    url: 'http://localhost:8888/comments/',

    comparator: function (first, second) {
      return second.get("votes") - first.get("votes");
    }
  });
});
