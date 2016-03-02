var practicePal = angular
.module('practicePal', ['ui.router']);

'use strict'

practicePal
  .controller('basicsCtrl', function($scope) {

    function Basics(data) {
      this.positions = {
        shifting: 0,
        dropping: 0,
        vibrato: 0,
        pizzicato: 0,
        balance: 0,
        ppsp: 0,
        changes: 0,
        detache: 0,
        legato: 0,
        colle: 0,
        martele: 0,
        staccato: 0,
        spiccato: 0,
        sautille: 0,
        ricochet: 0,
        chords3: 0,
        chords4: 0
      }
      angular.extend(this, data);
    }

    Basics.prototype.basicsTotal = function() {
      var basicsTotal = 0;
      for (var key in this.positions) {
        if (this.positions.hasOwnProperty(key)) {
          basicsTotal += this.positions[key];
        }
      }
      return basicsTotal;
    };

    Basics.prototype.lhTotal = function() {
      return this.positions.shifting + this.positions.dropping + this.positions.vibrato + this.positions.pizzicato;
    };

    Basics.prototype.rhTotal = function() {
      return this.positions.balance + this.positions.ppsp + this.positions.changes + this.positions.detache + this.positions.legato + this.positions.colle + this.positions.martele + this.positions.staccato + this.positions.spiccato + this.positions.sautille + this.positions.ricochet + this.positions.chords3 + this.positions.chords4;
    };

    for (var i = 0; i < 7; i++) {
      $scope['day' + (i + 1)] = new Basics({});
    }
  });

'use strict'

practicePal
  .controller('homeCtrl', function($scope) {


  });

'use strict'

practicePal
  .controller('scalesCtrl', function($scope) {

  function Scales(data) {
    this.positions = {
      scale1: 0,
      scale2: 0,
      scale3: 0,
      arpeggio1: 0,
      arpeggio2: 0,
      arpeggio3: 0,
      thirds: 0,
      fourths: 0,
      fifths: 0,
      sixths: 0,
      octaves: 0,
      tenths: 0,
      harmonics: 0
    }
    angular.extend(this, data);
  }

  Scales.prototype.scalesTotal = function() {
    var scalesTotal = 0;
    for (var key in this.positions) {
      if (this.positions.hasOwnProperty(key)) {
        scalesTotal += this.positions[key];
      }
    }
    return scalesTotal;
  };

  Scales.prototype.scaleTotal = function() {
    return this.positions.scale1 + this.positions.scale2 + this.positions.scale3;
  };

  Scales.prototype.arpeggioTotal = function() {
    return this.positions.arpeggio1 + this.positions.arpeggio2 + this.positions.arpeggio3;
  };

  Scales.prototype.dStopTotal = function() {
    return this.positions.thirds + this.positions.fourths + this.positions.fifths + this.positions.sixths + this.positions.octaves + this.positions.tenths + this.positions.harmonics;
  };

  for (var i = 0; i < 7; i++) {
    $scope['day' + (i + 1)] = new Scales({});
  }


});

angular.module('practicePal').filter('time', function() {

    var conversions = {
      'ss': angular.identity,
      'mm': function(value) { return value * 60; },
      'hh': function(value) { return value * 3600; }
    };

    var padding = function(value, length) {
      var zeroes = length - ('' + (value)).length,
          pad = '';
      while(zeroes-- > 0) pad += '0';
      return pad + value;
    };

    return function(value, unit, format, isPadded) {
      var totalSeconds = conversions[unit || 'ss'](value),
          hh = Math.floor(totalSeconds / 3600),
          mm = Math.floor((totalSeconds % 3600) / 60),
          ss = totalSeconds % 60;

      format = format || 'hh:mm:ss';
      isPadded = angular.isDefined(isPadded)? isPadded: true;
      hh = isPadded? padding(hh, 2): hh;
      mm = isPadded? padding(mm, 2): mm;
      ss = isPadded? padding(ss, 2): ss;

      return format.replace(/hh/, hh).replace(/mm/, mm).replace(/ss/, ss);
    };
  });

practicePal.config(function ($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /home
 $urlRouterProvider.otherwise("/home");

 $stateProvider
   .state('home', {
     url: "/home",
     templateUrl: "views/home.html"
   })
   .state('basics', {
     url: "/basics",
     templateUrl: "views/basics.html",
     controller: "basicsCtrl"
   })
   .state('scales', {
     url: "/scales",
     templateUrl: "views/scales.html",
     controller: "scalesCtrl"
   })
});

practicePal
.service('practiceService', function() {
  var basics = function(data) {
      this.positions = {
        shifting: 0,
        dropping: 0,
        vibrato: 0,
        pizzicato: 0,
        balance: 0,
        ppsp: 0,
        changes: 0,
        detache: 0,
        legato: 0,
        colle: 0,
        martele: 0,
        staccato: 0,
        spiccato: 0,
        sautille: 0,
        ricochet: 0,
        chords3: 0,
        chords4: 0
      }
      angular.extend(this, data);
      // for (var i = 0; i < 7; i++) {
      //   $scope['day' + (i + 1)] = new Basics({});
      //   console.log(this);
      // }
    };

    var scales = function(data) {
      this.positions = {
        scale1: 0,
        scale2: 0,
        scale3: 0,
        arpeggio1: 0,
        arpeggio2: 0,
        arpeggio3: 0,
        thirds: 0,
        fourths: 0,
        fifths: 0,
        sixths: 0,
        octaves: 0,
        tenths: 0,
        harmonics: 0
      }
      angular.extend(this, data);
      // for (var i = 0; i < 7; i++) {
      //   $scope['day' + (i + 1)] = new Scales({});
      // }
    };
  });
