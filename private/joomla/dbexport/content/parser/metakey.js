//@todo: map metakeys
module.exports = function(metakey) {
  var out = {};

  if (metakey) {
    var parsedMetakeys = metakey.split(',');

    parsedMetakeys.forEach(function(row) {
      if (row) {
        var tmp = row.split(':');
        if (tmp.length) {
          var key = tmp[0];
          var val = tmp[1];

          if (val === 'NA') {
            val = false;
          } else if (val === 'checked') {
            val = true;
          } else if (!val) {
            val = false;
          }

          out[key] = val;
        }
      }
    });
  }

  return out;
};
