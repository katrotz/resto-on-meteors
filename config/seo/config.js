Meteor.startup(function() {
  if (Meteor.isClient) {
    return SEO.config({
      title: 'Resto.md::Restaurant ovrview',
      meta: {
        description: 'Resto.md description',
      },
    });
  }
});
