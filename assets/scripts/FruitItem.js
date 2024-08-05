cc.Class({
    extends: cc.Component,

    properties: {
        icon: {
            default: null,
            type: cc.Sprite
        },
        icons: {
            default: [],
            type: [cc.SpriteFrame]
        },
        activeIcons: {
            default: [],
            type: [cc.SpriteFrame]
        },

        x: 0,
        y: 0,
        idx: 0,
        isActive: false,
    },

    create(x, y, idx) {
        this.x = x;
        this.y = y;
        this.isActive = false;
        if (typeof idx == 'undefined') {
            idx = (Math.random() * 100000) % this.icons.length | 0;
        } 

        this.idx = idx;
        this.icon.spriteFrame = this.icons[this.idx];
    },

    setActive(active) {
        // active = !this.isActive;
        this.isActive = active;
        if (active) {
            this.icon.spriteFrame = this.activeIcons[this.idx];
        } else {
            this.icon.spriteFrame = this.icons[this.idx];
        }

        if (active) {
            cc.Tween.stopAllByTarget(this.node);
            const t1 = cc.tween().to(0.1, { scale: 1.1 });
            const t2 = cc.tween().to(0.05, { scale: 1 });
            cc.tween(this.node).sequence(t1, t2).start();
        } 
    },

});
