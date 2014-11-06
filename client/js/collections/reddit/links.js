define(['collection', "models/reddit/link"], function (Collection, Link) {
  return Collection.extend({
    name: 'reddit/links',
    model: Link,

    url: "http://localhost:8888/entries",
    comparator: function (first, second) {
      return second.get("votes") - first.get("votes");
    }
  });
});
