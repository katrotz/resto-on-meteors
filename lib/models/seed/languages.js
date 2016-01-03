Meteor.startup(function() {
  if (Meteor.isClient) {
    return;
  }

  let shouldSeed = !Languages.find().count();
  let seedEntries = [
    { name: 'Română', languageName: 'romanian', shortCode: 'ro', locale: 'ro_RO', active: 1 },
    { name: 'Русский', languageName: 'russian', shortCode: 'ru', locale: 'ru_RU', active: 1 },
    { name: 'English', languageName: 'english', shortCode: 'en', locale: 'en_GB', active: 1 }
  ];

  if (shouldSeed) {
    seedEntries.forEach(function(row, idx) {
      let entry = new Language(row);
      entry.rank = idx;
      entry.save();
    });
  }
});
