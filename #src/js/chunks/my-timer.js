class Timer {
  constructor(data) {
    this.body = document.querySelector(data.body);
    this.minutes = +this.body.querySelector("[data-timer-minutes]").dataset.timerMinutes
    this.seconds = +this.body.querySelector("[data-timer-seconds]").dataset.timerSeconds
    this.totalSeconds = (this.minutes * 60) + this.seconds
    this.start()
  }

  start() {
    let allSeconds = (this.minutes * 60) + this.seconds

    const timer = setInterval(() => {
      allSeconds--
      this.minutes = Math.floor(allSeconds / 60);
      this.seconds = allSeconds - (Math.floor(allSeconds / 60) * 60)


      this.body.querySelector("[data-timer-minutes]").textContent = String(this.minutes).length == 2 ? this.minutes : "0" + String(this.minutes);
      this.body.querySelector("[data-timer-seconds]").textContent = String(this.seconds).length == 2 ? this.seconds : "0" + String(this.seconds);

      this.precent = (100 * (1 - (allSeconds / this.totalSeconds))).toFixed(0)

      this.body.querySelector("[data-timer-precent-value]").textContent = this.precent + "%";
      this.body.querySelector("[data-timer-precent]").style.width = this.precent + "%";

      if (allSeconds == 0) {
        this.body.querySelector("[data-timer-audio]").volume = 0.2
        this.body.querySelector("[data-timer-audio]").play()

        clearInterval(timer);
      }
    }, 1000)
  }
}