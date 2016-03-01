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
