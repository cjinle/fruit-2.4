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
        })
    },

    changeScene() {
        const audioId = cc.audioEngine.playEffect(this.audioClip, false);
        cc.audioEngine.setVolume(audioId, .4);
        cc.director.loadScene('play');
    }
});
