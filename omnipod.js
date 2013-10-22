
var fs = require('fs'),
    es = require('event-stream'),
    StringDecoder = require('string_decoder').StringDecoder,
    parser = require('./xml_parser.js');
   // xml2js = require('xml2js');

var stream = fs.createReadStream('C:\\Users\\Dhwanit\\Desktop\\omnipod\\test.xml');
var decoder = new StringDecoder('utf-8');
es.pipeline(stream, 
			es.map( function (data, cb) {
				parser.parseXML(data);
				cb(null, data); // make sure you call cb.
		    })
		);