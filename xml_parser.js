var util = require('util');
var xml = require("node-xml");
var oprec = require("./OPRecord.js").OPRecord;
var records = [];
var rowCount = 0;
var parser = new xml.SaxParser(function(cb) {
  cb.onStartDocument(function() {

  });
  cb.onEndDocument(function() {
	  util.log(rowCount);
  });
  cb.onStartElementNS(function(elem, attrs, prefix, uri, namespaces) {
	  if(elem == 'ROW'){
		util.log("\n--->:" + elem);
	//	var rec = new oprec();
		//console.log(rec);
		for(var a in attrs){
			var key = attrs[a].slice(", ")[0].toLowerCase();
			var val = attrs[a].slice(", ")[1];
		console.log(key+":"+val);
		//	if(key)
			//	rec.key(val);
		}
	//	records.push(rec);
      	//util.log("=> Started: " + elem + " uri="+uri +" (Attributes: " + JSON.stringify(attrs) + " )");
	  }
  });
  cb.onEndElementNS(function(elem, prefix, uri) {
	  rowCount++;
      //util.log("<= End: " + elem + " uri="+uri + "\n");
      //   parser.pause();// pause the parser
      //   setTimeout(function (){parser.resume();}, 200); //resume the parser
  });
  cb.onCharacters(function(chars) {
      //util.log('<CHARS>'+chars+"</CHARS>");
  });
  cb.onCdata(function(cdata) {
      util.log('<CDATA>'+cdata+"</CDATA>");
  });
  cb.onComment(function(msg) {
      util.log('<COMMENT>'+msg+"</COMMENT>");
  });
  cb.onWarning(function(msg) {
      util.log('<WARNING>'+msg+"</WARNING>");
  });
  cb.onError(function(msg) {
      util.log('<ERROR>'+JSON.stringify(msg)+"</ERROR>");
  });
});


function parseXML(data){
	if(parser){
		parser.parseString(data);
	}
}

module.exports.parseXML = parseXML