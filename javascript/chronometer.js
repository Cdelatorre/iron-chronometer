class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.miliseconds = 0;
  }

  start(callback) {
    if (!callback) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.miliseconds++;

      if (this.miliseconds === 99) {
        console.log(this.getMinutes());
        this.currentTime++;
        console.log('seconds', this.currentTime);
        this.miliseconds = 0;
      }

      callback();
    }, 10);
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);

    return minutes;
  }

  getMiliseconds() {
    return this.miliseconds;
  }

  getSeconds() {
    const secondsLeft = this.currentTime % 60;
    return secondsLeft;
  }

  computeTwoDigitNumber(value) {
    const upTo2Digits = value < 10 ? '0' + value : value.toString();
    return upTo2Digits;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.miliseconds = 0;
  }

  split() {
    const mins = this.computeTwoDigitNumber(this.getMinutes());
    const secs = this.computeTwoDigitNumber(this.getSeconds());
    const milSecs = this.computeTwoDigitNumber(this.getMiliseconds());

    return `${mins}:${secs}:${milSecs}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
