'use strict';
var OPRecord; 

module.exports = OPRecord = {
    dateevent : function(){
     
   },
   timeslot : function(ts){
     var tsMap = {
       0 : "pre-breakfast",
       1 : "post-breakfast",
       2 : "pre-lunch",
       3 : "post-lunch",
       4 : "pre-dinner",
       5 : "post-dinner",
       6 : "bed time",
       7 : "sleep"
     };
     return tsMap[ts] || -1;
  },
  eventtype  : function(et){
    var eventMap = {
      0 : "exercise",
      1 : "glucose",
      2 : "basal",
      3 : "bolus",
      4 : "lab-results",
      5 : "meal",
      6 : "medical-exams",
      7 : "medications",
      8 : "notes",
      9 : "state-of-health",
      10 : "ketone",
      15 : "alarms",
      16 : "generic",
      11 : "reserved",
      12 : "reserved",
      13 : "reserved",
      14 : "reserved"
    };
    return eventMap[et] || "failure";
  },
  device_model : function(dm){
    return dm;
  },
  device_id : function(id){
    return id;
  },
  vendor_event_type_id : function(){
    return 0;
  },
  vendor_event_id : function(veid){
     return veid;
  },
   key0 : function(k){
     return k;
  },
   key1 : function(k){
     return k;
  },
   key2 : function(k){
     return k;
  },
   i0 : function(i){
     return i;
  },
   i1 : function(i){
     return i;
    },
   i2 : function(i){
     return i;
    },
   i3 : function(i){
     return i;
    },
   i4 : function(i){
     return i;
    },
  i5 : function(i){
     return i;
  },
  i6 : function(i){
     return i;
  },
  i7 : function(i){
     return i;
  },
  i8 : function(i){
     return i;
  },
  i9 : function(i){
     return i;
  },
  d0 : function(d){
     return d;
  },
  d1 : function(i){
     return i;
  },
  d2 : function(i){
     return i;
  },
  d3 : function(i){
     return i;
  },
  d4 : function(i){
     return i;
  },
  c0 : function(c){
     return c;
  },
   c8 : function(c){
     return c;
   },
  ismanual : function(){
    return "";
  }

};