define(['model'], function (Model) {
  return Model.extend({
    name: 'reddit/user',
    url: 'http://localhost:8888/users',

    defaults: {
      name: undefined
    }
  });
});
