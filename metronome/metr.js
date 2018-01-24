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
      console.log(this.tempo);
    }
  }

  setTempo(bpm) {
    clearInterval(this.theInterval);
    this.tempo = 60000 / bpm;
    this.run();
  }

  tap() {
    prev = current;
    current = Date.now();
    clearInterval(this.theInterval);
    this.tempo = current - prev;
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


var tick = new Audio('assets/tick.mp3');

//tap variables
//var d = new Date();
var prev = 0;
var current = 0;

const metronome = new Metronome(tempo, true);

//event listeners:
document.getElementById("play").onclick = function() {metronome.play()};
document.getElementById("pause").onclick = function() {metronome.pause()};
document.getElementById("tempo").onchange = function() {metronome.setTempo(document.getElementById("tempo").value)};
document.getElementById("tap").onclick = function() {metronome.tap()};
