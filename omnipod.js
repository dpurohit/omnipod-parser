
var fs = require('fs'),
    es = require('event-stream'),
    StringDecoder = require('string_decoder').StringDecoder;
var stream = fs.createReadStream('./examples/test.xml');
var decoder = new StringDecoder('utf-8');
var i = 0;
es.pipeline(stream, 
      es.split(/>\s+</),
      es.map( function (data, cb) {
        var dataAsString = decoder.write((data || ""));
        if(!(/(xml|RECORD(S?))/ig.test(dataAsString))){
          console.log("record:"+ dataAsString.replace(/\s+/g,"|"));
        }
        cb(null, data); // make sure you call cb.
        i++;
        })
    );
