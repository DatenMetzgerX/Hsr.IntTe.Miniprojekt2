define(['model'], function (Model) {
  return Model.extend({
    name: 'reddit/comment',

    url: function () {
      if (this.id) {
        return Model.prototype.url.apply(this, arguments);
      }

      // We need a different url for new comments...
      var link = this.collection.link,
        url = _.result(link, 'url');

      return url + "/comment";
    },

    defaults: function () {
      return {
        text: null,
        author: null,
        createTime: new Date(),
        rating: null,
        votes: 0
      };
    },

    parse: function (response) {
      var result = Model.prototype.parse.apply(this, arguments);

      result.votes = response.rating.value;
      delete response.rating;
      return result;
    }
  });
});
