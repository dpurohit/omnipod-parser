var should = require('should');

describe("OPRecord", function() {

  it('should exist', function(done) {
    var OPRecord = require('../OPRecord');
    should.exist(OPRecord);
    done();
  });

  it('should have dateevent', function(done) {
    var OPRecord = require('../OPRecord');
    should.exist(OPRecord.dateevent);
    done();
  });

  it('should have timeslot', function(done) {
    var OPRecord = require('../OPRecord');
    should.exist(OPRecord.timeslot);
    done();
  });

});