module.exports = function(attribs) {
  var out = {};

  if (attribs) {
    var parsedAttribs = attribs.split('\n');

    parsedAttribs.forEach(function(row) {
      if (row) {
        var tmp = row.split('=');
        var key = tmp[0];
        var val = tmp[1];

        if (val === 'NA') {
          val = false;
        } else if (val === 'checked') {
          val = true;
        }

        out[key] = val;
      }
    });
  }

  return out;
};
