define(['model'], function (Model) {
  return Model.extend({
    name: 'reddit/comment',

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
