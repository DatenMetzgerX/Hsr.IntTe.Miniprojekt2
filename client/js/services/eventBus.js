define (["backbone"], function (Backbone) {
    var eventBus = {};
    _.extend(eventBus, Backbone.Events);
    return eventBus;
});
