class Drumkit{
    constructor() {
        this.pads = document.querySelectorAll(".pad");
        this.kickAudio = document.querySelector(".kick-sound");
        this.snareAudio = document.querySelector(".snare-sound");
        this.hihatAudio = document.querySelector(".hihat-sound");
        this.index = 0;
    }
    repeat() {
        let step = this.index % 8;
        console.log(`step ${step} and index ${this.index}`);
        this.index++;
    }
    start() {
        setInterval(() => {
            this.repeat();
        }, 1000) ;    
        }
    }

    const drumkit = new Drumkit();

    drumKit.start();