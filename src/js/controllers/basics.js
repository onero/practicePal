'use strict'

angular.module('practicePal')
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
