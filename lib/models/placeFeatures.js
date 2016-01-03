/*global PlaceFeatures:true, PlaceFeature:true*/

PlaceFeatures = new Meteor.Collection('placeFeatures');

PlaceFeature = Astro.Class({
  name: 'PlaceFeature',
  collection: PlaceFeatures,
  fields: {
    title: 'string',
    description: 'string',
    placeFeatureTypeId: 'object',
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
      hasRootField: true,
      rootFieldName: 'placeFeatureTypeId'
    }
  }
});
