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
