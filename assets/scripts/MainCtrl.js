cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad() {
        cc.director.preloadScene('play', ()=>{
            cc.log('play scene pre load finish');
        })
    },

    changeScene() {
        cc.director.loadScene('play');
    }
});
