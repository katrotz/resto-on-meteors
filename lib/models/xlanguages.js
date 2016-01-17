/*global Languages:true, Language:true*/

Languages = new Meteor.Collection('languages');

Language = Astro.Class({
  name: 'Language',
  collection: Languages,
  fields: {
    name: 'string',
    languageName: 'string',
    shortCode: 'string',
    locale: 'string',
    active: 'boolean',
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
      fieldName: 'name',
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
    coordinates: {
      belongsTo: {
        placeFeatureTypes: {
          foreignKey: 'pf_id'
        }
      },
      hasMany: 'placeFeatureTypes',
      hasOne: ['languages']
    }
  }
});
