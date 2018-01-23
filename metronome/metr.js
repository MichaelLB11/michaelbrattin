'use strict';

class Metronome {
  constructor(bpm, active){
    this.tempo = 60000 / bpm;
    this.active = active;
    var theInterval;
    this.run();

  }

  run() {
    if (this.isActive) {
      this.theInterval = setInterval(this.bump.bind(this), this.tempo);
    }
  }

  // setters
  play() {
    this.active = true;
  }

  pause() {
    this.active = false;
  }

  bump() {
    if (this.isActive()) {
      console.log('bump');
      tick.play();
    }
  }


  setTempo(tempo) {
    clearInterval(this.theInterval);
    this.tempo = 60000 / tempo;
    this.run();
  }


  //getters
  isActive() {
    return this.active;
  }

  getTempo() {
    return this.tempo;
  }

}

var tempo = document.getElementById('tempo').value;
tempo = tempo;

var tick = new Audio('assets/tick.mp3');

const metronome = new Metronome(tempo, true);

//event listeners:
document.getElementById("play").onclick = function() {metronome.play()};
document.getElementById("pause").onclick = function() {metronome.pause()};
document.getElementById("tempo").onchange = function() {metronome.setTempo(document.getElementById("tempo").value)};
