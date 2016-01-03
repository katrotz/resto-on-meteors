/*jscs:disable*/
/*jshint camelcase:false*/
var attribs = require('./parser/attribs');
var metakey = require('./parser/metakey');

module.exports = function(joomlaDoc) {
  var doc = JSON.parse(JSON.stringify(joomlaDoc));

  doc.customtext = attribs(doc.customtext);
  doc.attribs = attribs(doc.attribs);
  doc.custom_metakey = metakey(doc.custom_metakey);

  return doc;
};
