/**
 * Liskov Substitution Principle : true is-a relationship
 * Inheritance
 * Parent-Child relation : 
 */


// Problem : violation of LSP
// class MediaPlayer{
//     playAudio(){
//         console.log("Play Audio");
//     }
//     playVideo(){
//         console.log("Play Video");
//     }
// }

// class AudioPlayer extends MediaPlayer{
//     playVideo(): void {
//         throw new Error("No Audio Functionality");
//     }
// }

// const mediaPlayer = new MediaPlayer();
// mediaPlayer.playVideo();

// const audioPlayer = new AudioPlayer();
// audioPlayer.playVideo();



// Solution : composition / interface
interface IAudioPlayable{
    playAudio():void;
}

interface IVideoPlayable extends IAudioPlayable{
    playVideo():void;
}

class AudioPlayer implements IAudioPlayable{
    playAudio(): void {
        console.log("Playing Audio...");
    }
}

class FullMediaPlayer implements IVideoPlayable{
    playVideo(): void {
        console.log("Playing video...");
    }
    playAudio(): void {
        console.log("Playing audio...");
    }
}

const aPlayer = new AudioPlayer();
aPlayer.playAudio();

const mPlayer = new FullMediaPlayer();
mPlayer.playVideo();



