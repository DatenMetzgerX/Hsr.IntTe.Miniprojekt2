define([
  'layout-view',
  'hbs!templates/root',
  'views/reddit/header'
], function(LayoutView, rootTemplate, HeaderView) {
  var RootView = LayoutView.extend({
    name: 'root',
    template: rootTemplate,
    headerView: HeaderView
  });

  var instance;
  RootView.getInstance = function(target) {
    if (!instance) {
      instance = new RootView();
      instance.appendTo(target || document.body);
    }
    return instance;
  };

  return RootView;
});
