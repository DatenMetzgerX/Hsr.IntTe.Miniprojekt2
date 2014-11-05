define(['collection', "models/reddit/link"], function (Collection, Link) {
  return Collection.extend({
    name: 'reddit/links',
    model: Link,

    url: "http://localhost:4730/entries"
  });
});
