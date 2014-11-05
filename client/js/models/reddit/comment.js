define(['model'], function (Model) {
  return Model.extend({
    name: 'reddit/comment',

    defaults: function () {
      return {
        text: null,
        author: null,
        createTime: new Date(),
        rating: null
      };
    }
  });
});
