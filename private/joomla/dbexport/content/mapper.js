/*jscs:disable*/
/*jshint camelcase:false*/
var noDate = '0000-00-00 00:00:00';
function mapDoc(joomlaDoc) {
  joomlaDoc = JSON.parse(JSON.stringify(joomlaDoc));

  var doc = {};

  doc.id = joomlaDoc.id;
  doc.title = joomlaDoc.title;
  doc.alias = joomlaDoc.alias;
  doc.customtext = joomlaDoc.customtext;
  doc.introtext = null;
  doc.logotext = null;
  doc.phototext = null;
  doc.active = (parseInt(joomlaDoc.state) === 1);
  doc.createdOn = new Date(joomlaDoc.created);
  doc.updatedOn = (noDate === joomlaDoc.modified ? null : new Date(joomlaDoc.modified));
  doc.publishOn = (noDate === joomlaDoc.publish_up ? null : new Date(joomlaDoc.publish_up));
  doc.unpublishOn = (noDate === joomlaDoc.publish_down ? null : new Date(joomlaDoc.publish_down));
  doc.attribs = joomlaDoc.attribs;
  doc.order = joomlaDoc.ordering;
  doc.metaKey = joomlaDoc.metakey;
  doc.metaDescription = joomlaDoc.metadesc;
  doc.hits = joomlaDoc.hits;

  if (parseInt(doc.attribs.article_type) === 1) {

  }

  return doc;
}

module.exports = function(joomlaDoc) {
  var doc;

  doc = mapDoc(joomlaDoc);

  return doc;
};
