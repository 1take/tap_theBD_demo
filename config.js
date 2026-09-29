// BASSDRUM game settings
// Change these values and reload the page.
// BPM = image changes per quarter-note beat.

window.BASSDRUM_CONFIG = {
  levels: [
    { name: "Easy",    bpm: 50  },  // debug-friendly
    { name: "Normal",  bpm: 100 },
    { name: "Hard",    bpm: 150 },
    { name: "Extreme", bpm: 200 }
  ],

  // YES / NO / MISS result-sequence tempo
  resultBpm: 50,

  // READY -> 3 -> 2 -> 1 tempo
  countdownBpm: 50,

  maxHp: 4,
  startHp: 2
};
