/*global PlaceFeatureTypes:true, PlaceFeatureType:true*/

PlaceFeatureTypes = new Meteor.Collection('placeFeatureTypes');

PlaceFeatureType = Astro.Class({
  name: 'PlaceFeatureType',
  collection: PlaceFeatureTypes,
  fields: {
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
      fieldName: 'title.ro',
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
    },
    babelfish: {
      fields: ['title']
    }
  }
});

