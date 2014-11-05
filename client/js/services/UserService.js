define(["jquery", "q", "models/reddit/User", "services/eventBus"], function ($, q, User, eventBus) {
  var service = {
      currentUser: null,

      login: function (username, password) {
        var request = $.ajax({
          url: 'http://localhost:8888/login',
          data: JSON.stringify({ name: username, password: password}),
          contentType: 'application/json; charset=UTF-8',
          dataType: 'json',
          type: 'POST'
        });

        return q(request).then(_.bind(function (response) {
            if (response === true) {
              this.currentUser = new User({ name: username, password: password });

              eventBus.trigger('user:loggedIn', this.currentUser);
              return this.currentUser;
            }

            throw new Error("Invalid login credentials");
        }, this));
      },

      logout: function () {
        return q($.post('http://localhost:8888/logout')).fin(_.bind(function () {
            this.currentUser = null;
            eventBus.trigger("user:loggedOut");
        }, this));
      },

      getUser: function () {
        return this.currentUser;
      },

      isLoggedIn: function () {
        return this.currentUser !== null;
      }
  };
  return service;
});
