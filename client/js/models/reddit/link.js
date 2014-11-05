define(['model'], function (Model) {
  return Model.extend({
    name: 'reddit/link',

    defaults: {
      title: null,
      author: null,
      url: null,
      createTime: new Date(),
      rating: null,
      comments: null
    }
  });
});
