'use strict';

var http = require('http'),
  telemetryEndpoint;

http.post = require('http-post');

var setEndpoint = function setEndpoint(endpoint){
  telemetryEndpoint = endpoint;
};

var postEvent = function postEvent(eventData){
  http.post(endpoint, eventData, function(response){
    console.log(response);
  });
};

modules.export = {
  postEvent: postEvent,
  setEndpoint: setEndpoint
};
