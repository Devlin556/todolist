
(function(){
  'use strict'
  var mainApp = angular.module('mainApp', []);
  mainApp.controller('mainCtrl', function() {
      this.todos = [{
          text: "testing app",
          complete: false,
          id: 1
      }, {
          text: "testing app",
          complete: false,
          id: 2
      }, {
          text: "testing app",
          complete: false,
          id: 3
      }, {
          text: "testing app",
          complete: false,
          id: 4
      }]
      this.add = function(obj) {
          obj.id = this.todos.length + 1;
          obj.complete = false;
          this.todos[this.todos.length] = obj;
      }

  })
})()
