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
        cc.audioEngine.playEffect(this.audioClip, false);
        cc.director.loadScene('play');
    }
});
