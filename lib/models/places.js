/*global Places:true, Place:true*/

Places = new Meteor.Collection('places');

Place = Astro.Class({
  name: 'Place',
  collection: Places,
  fields: {
    title: 'string',
    description: 'string',
    rank: 'number'
  },
  behaviors: {
    timestamp: {
      hasCreatedField: true,
      createdFieldName: 'createdAt',
      hasUpdatedField: true,
      updatedFieldName: 'updatedAt'
    },
    slug: {
      fieldName: 'title',
      methodName: null,
      slugFieldName: 'slug',
      canUpdate: false,
      unique: true,
      separator: '-'
    },
    sort: {
      sortFieldName: 'rank',
      hasRootField: false,
      rootFieldName: null
    }
  }
});
