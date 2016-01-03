var content = require('./dbexport/content');

content.export().then(function(data) {
  console.log(data);
});