cc.Class({
    extends: cc.Component,

    properties: {
        audioClip: {
            default: null,
            type: cc.AudioClip
        }
    },

    onLoad() {
        cc.director.preloadScene('play', ()=>{
            cc.log('play scene pre load finish');
        });
        
        // cc.resources.load('audio/btnStart', cc.AudioClip, null, (err, clip) => {
        //     cc.log('audio load');
        //     cc.audioEngine.playEffect(clip, false);
        // });
    },
    
    changeScene() {
        const audioId = cc.audioEngine.playEffect(this.audioClip, false);
        cc.audioEngine.setVolume(audioId, .4);
        cc.director.loadScene('play');
    }
});
