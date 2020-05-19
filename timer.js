class Timer {
    constructor(durationInput, startButton, pauseButton, callback) {
        //inisialisasi
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callback) { //jika ada argumen callback maka buat 3 properti sebagai berikut
            this.onStart = callback.onStart;
            this.onTick = callback.onTick;
            this.onComplete = callback.onComplete;
        }

        //event, menjalankan fungsi di prototype
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    //ketika start di klik
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick(); //supaya langsung jalan dulu, tidak tunggu 1000ms baru dijalankan
        this.interval = setInterval(this.tick, 20);
    }

    //ke-trigger saat start dijalankan
    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause(); //paused when it hits 0.0 sec
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.02;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
    }
    //menghentikan setInterval
    pause = () => {
        clearInterval(this.interval);
    }

    //mengambil inputan pada input elemen
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }
    //mengupdate inputan pada input elemen
    set timeRemaining(time) { //set method membutuhkan parameter
        this.durationInput.value = time.toFixed(2)
    }
}