var out = [];
ft.map(function(row) {
  var o = {};
  ftt.map(function(tRow) {
    if (row.id === tRow.placeFeatureTypeId) {
      o.title = o.title || {};

      o.title[tRow.locale] = tRow.title;
    }
  });
  out.push(o);
});
console.log(out);

module.exports = [
  {
    id: 1,
    placeFeatureTypeId: 1,
    locale: "ro",
    createdAt: "2014-05-17 08:42:18",
    updatedAt: "2014-05-17 08:42:18",
    slug: "cuisine",
    title: "Bucătărie"
  },
  {
    id: 2,
    placeFeatureTypeId: 1,
    locale: "ru",
    createdAt: "2014-05-17 08:42:18",
    updatedAt: "2014-05-17 08:42:18",
    slug: null,
    title: "Кухня"
  },
  {
    id: 3,
    placeFeatureTypeId: 1,
    locale: "en",
    createdAt: "2014-05-17 08:42:18",
    updatedAt: "2014-05-17 08:42:18",
    slug: null,
    title: "Cuisine"
  },
  {
    id: 4,
    placeFeatureTypeId: 2,
    locale: "ro",
    createdAt: "2014-05-17 08:43:27",
    updatedAt: "2014-05-17 08:43:27",
    slug: "place-type",
    title: "Tip local"
  },
  {
    id: 5,
    placeFeatureTypeId: 2,
    locale: "ru",
    createdAt: "2014-05-17 08:43:27",
    updatedAt: "2014-05-17 08:43:27",
    slug: null,
    title: "Тип заведения"
  },
  {
    id: 6,
    placeFeatureTypeId: 2,
    locale: "en",
    createdAt: "2014-05-17 08:43:27",
    updatedAt: "2014-05-17 08:43:27",
    slug: null,
    title: "Place type"
  },
  {
    id: 7,
    placeFeatureTypeId: 3,
    locale: "ro",
    createdAt: "2014-05-17 08:46:04",
    updatedAt: "2014-05-17 08:46:04",
    slug: "options",
    title: "Opțiuni"
  },
  {
    id: 8,
    placeFeatureTypeId: 3,
    locale: "ru",
    createdAt: "2014-05-17 08:46:04",
    updatedAt: "2014-05-17 08:46:04",
    slug: null,
    title: "Предложения"
  },
  {
    id: 9,
    placeFeatureTypeId: 3,
    locale: "en",
    createdAt: "2014-05-17 08:46:04",
    updatedAt: "2014-05-17 08:46:04",
    slug: null,
    title: "Options"
  },
  {
    id: 10,
    placeFeatureTypeId: 4,
    locale: "ro",
    createdAt: "2014-05-17 08:49:12",
    updatedAt: "2014-05-17 08:49:12",
    slug: "special-menu",
    title: "Meniu special"
  },
  {
    id: 11,
    placeFeatureTypeId: 4,
    locale: "ru",
    createdAt: "2014-05-17 08:49:12",
    updatedAt: "2014-05-17 08:49:12",
    slug: null,
    title: "Специальное меню"
  },
  {
    id: 12,
    placeFeatureTypeId: 4,
    locale: "en",
    createdAt: "2014-05-17 08:49:12",
    updatedAt: "2014-05-17 08:49:12",
    slug: null,
    title: "Special menu"
  },
  {
    id: 13,
    placeFeatureTypeId: 5,
    locale: "ro",
    createdAt: "2014-05-17 08:51:15",
    updatedAt: "2014-05-17 08:51:15",
    slug: "payment",
    title: "Plata"
  },
  {
    id: 14,
    placeFeatureTypeId: 5,
    locale: "ru",
    createdAt: "2014-05-17 08:51:15",
    updatedAt: "2014-05-17 08:51:15",
    slug: null,
    title: "Оплата"
  },
  {
    id: 15,
    placeFeatureTypeId: 5,
    locale: "en",
    createdAt: "2014-05-17 08:51:15",
    updatedAt: "2014-05-17 08:51:15",
    slug: null,
    title: "Payment"
  },
  {
    id: 16,
    placeFeatureTypeId: 6,
    locale: "ro",
    createdAt: "2014-05-17 08:53:03",
    updatedAt: "2014-05-17 08:53:03",
    slug: "entertainment",
    title: "Divertisment"
  },
  {
    id: 17,
    placeFeatureTypeId: 6,
    locale: "ru",
    createdAt: "2014-05-17 08:53:03",
    updatedAt: "2014-05-17 08:53:03",
    slug: null,
    title: "Развлечения"
  },
  {
    id: 18,
    placeFeatureTypeId: 6,
    locale: "en",
    createdAt: "2014-05-17 08:53:03",
    updatedAt: "2014-05-17 08:53:03",
    slug: null,
    title: "Entertainment"
  }
];
