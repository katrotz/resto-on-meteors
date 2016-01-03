Meteor.startup(function() {
  if (Meteor.isClient) {
    return;
  }

  let shouldSeed = !PlaceFeatureTypes.find().count() || true;
  let seedEntries = [
    {
      title: 'Bucătărie',
      translations: {
        title: {
          ru: 'Кухня',
          en: 'Cuisine'
        }
      }
    },
    {
      title: 'Tip local',
      translations: {
        title: {
          ru: 'Тип заведения',
          en: 'Place type'
        }
      }
    },
    {
      title: 'Opțiuni',
      translations: {
        title: {
          ru: 'Предложения',
          en: 'Options'
        }
      }
    },
    {
      title: 'Meniu special',
      translations: {
        title: {
          ru: 'Специальное меню',
          en: 'Special menu'
        }
      }
    },
    {
      title: 'Plata',
      translations: {
        title: {
          ru: 'Оплата',
          en: 'Payment'
        }
      }
    },
    {
      title: 'Divertisment',
      translations: {
        title: {
          ru: 'Развлечения',
          en: 'Entertainment'
        }
      }
    }
  ];

  if (shouldSeed) {
    PlaceFeatureTypes.remove({});

    seedEntries.forEach(function(row, idx) {
      var translations = row.translations;
      delete row.translations;

      let entry = new PlaceFeatureType(row);

      if (translations) {
        let tFields = Object.keys(translations);
        for (let field of tFields) {
          entry.translate(field, translations[field]);
        }
      }
      entry.rank = idx;
      entry.save();
    });
  }
});
