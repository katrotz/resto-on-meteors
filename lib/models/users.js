/*global Users:true, User:true*/

Users = Meteor.users;

User = Astro.Class({
  name: 'User',
  collection: Users
});
