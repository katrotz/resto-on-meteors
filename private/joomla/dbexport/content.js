var TSV_FILE_PATH = require('path').join(__dirname, '..', 'db', 'jos_content_export.tsv');

var Promise = require('promise');
var Converter = require('csvtojson').Converter;
var mapper = require('./content/mapper');
var parser = require('./content/parser');

function readContent(cb) {
  var converter = new Converter({
    delimiter: '\t',
    eol: 'JOS_CONTENT_EOL\n',
  });

  converter.fromFile(TSV_FILE_PATH, function(err, result) {
    return cb(err, result);
  });
}

module.exports = {
  export: function() {
    return new Promise(function(resolve, reject) {
      return readContent(function(err, result) {
        var data = [];

        if (err) {
          return reject(err);
        }

        result.forEach(function(joomlaDoc) {
          joomlaDoc = parser(joomlaDoc);
          var mappedDoc = mapper(joomlaDoc);
          if (mappedDoc) {
            data.push(mappedDoc);
          }
        });

        return resolve(data);
      });
    });
  },
};
