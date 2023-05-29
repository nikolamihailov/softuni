function createAssemblyLine() {
    return {
        hasClima(myCar) {
            myCar.temp = 21;
            myCar.tempSettings = 21;
            myCar.adjustTemp = function () {
                if (myCar.temp < myCar.tempSettings) {
                    myCar.temp++;
                } else if (myCar.temp > myCar.tempSettings) {
                    myCar.temp--;
                }
            };
        },
        hasAudio(myCar) {
            myCar.currentTrack = {
                namE: "",
                artist: "",
            };
            myCar.nowPlaying = function () {
                if (this.currentTrack !== null) {
                    console.log(`Now playing '${this.currentTrack.namE}' by ${this.currentTrack.artist}`);
                }
            };
        }
        ,
        hasParktronic(myCar) {
            myCar.checkDistance = function (distance) {
                let text = '';
                if (distance < 0.1) {
                    text = 'Beep! Beep! Beep!';
                } else if (distance < 0.25) {
                    text = 'Beep! Beep!';
                } else if (distance < 0.5) {
                    text = 'Beep!';
                } else {
                    text = '';
                }
                console.log(text);
            };
        }
    };
}
