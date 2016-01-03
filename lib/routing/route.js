/* global ApplicationController:true */
ApplicationController = RouteController.extend({
  layoutTemplate: 'default',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'splash',
  template: 'home',
  waitOn: function() {
    //@todo: set collections to wait for on app loading
    return [

      //Meteor.subscribe('restaurants')
    ];
  },

  onBeforeAction: function() {
    return this.next();
  },

  onAfterAction: function() {
    if (Meteor.isClient) {
      //@todo: set dynamic meta information
      SEO.set({
        title: 'Resto - restaurants overview',
        meta: {
          description: 'Restaurants management application',
        },
      });
    }
  },
});

Router.route('/', {
  name: 'home',
  controller: 'ApplicationController',
});
