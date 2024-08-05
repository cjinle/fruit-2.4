const FruitItem = require('FruitItem');

const HIGH_SCORE_KEY = 'highScore';
const STAGE_KEY = 'stage';

const localStorage = cc.sys.localStorage;

cc.Class({
    extends: cc.Component,

    properties: {
        fruitPrefab: {
            default: null,
            type: cc.Prefab
        },
        highScoreLabel: cc.Label,
        highStageLabel: cc.Label,
        highTargetLabel: cc.Label,
        curScoreLabel: cc.Label,
        activeScoreLabel: cc.Label,
        stageLabel: cc.Label,
        fruits: cc.Node,

        bgAudio: cc.AudioClip,
        wowAudio: cc.AudioClip,
        selectAudio: cc.AudioClip,
        brokenAudio: {
            default: [],
            type: [cc.AudioClip]
        },
        
        _highScore: 123,
        _stage: 0,
        _target: 0,

        _curScore: 0,
        _xCount: 8,
        _yCount: 8,
        _fruitGap: 0,
        _scoreStart: 5,
        _scoreStep: 10,
        _scoreStart: 0,

        _matrixLBX: 0,
        _matrixLBY: 0,
        _fruitWidth: 0,
        _vWidth: 0,
        _vHeight: 0,

        _matrix: null,
        _actives: [],
    },

    onLoad() {
        this._highScore = parseInt(localStorage.getItem(HIGH_SCORE_KEY) || '0');
        this._stage = parseInt(localStorage.getItem(STAGE_KEY) || '0');
        if (this._stage == 0) this._stage = 1;
        this._target = this._stage * 200;
        this._matrix = new Map();
    },

    start() {
        this.highScoreLabel.string = this._highScore.toString();
        this.highStageLabel.string = this._stage.toString();
        this.highTargetLabel.string = this._target.toString();
        this.curScoreLabel.string = this._curScore.toString();
        this.activeScoreLabel.string = '';

        let size = cc.view.getVisibleSize();
        this._vWidth = size.width;
        this._vHeight = size.height;

        this._fruitWidth = cc.instantiate(this.fruitPrefab).width;

        this._matrixLBX = (this._vWidth - this._fruitWidth * this._xCount - (this._yCount - 1) * this._fruitGap) / 2;
        this._matrixLBY = (this._vHeight - this._fruitWidth * this._yCount - (this._xCount - 1) * this._fruitGap) / 2 - 30;

        this._matrixLBX -= this._vWidth / 2;
        this._matrixLBY -= this._vHeight / 1.83;

        // cc.log(`play ${this._vWidth}, ${this._vHeight}, ${this._fruitWidth}, ${this._matrixLBX}, ${this._matrixLBY}`);

        this.initMartix();
        
        const audioId = cc.audioEngine.playMusic(this.bgAudio, true);
        cc.audioEngine.setVolume(audioId, .35);
    },

    initMartix() {
        this._matrix.clear();
        this._actives = [];

        for (let y = 1; y <= this._yCount; y++) {
            for (let x = 1; x <= this._xCount; x++) {
                if (y == 1 && x == 2) {
                    this.createAndDropFruit(x, y, this._matrix.get(1)?.idx);
                } else {
                    this.createAndDropFruit(x, y);
                }
            }
        }

    },

    createAndDropFruit(x, y, fruitIndex) {
        let newFruit = cc.instantiate(this.fruitPrefab);
        newFruit.getComponent(FruitItem).create(x, y, fruitIndex);
        const pos = this.positionOfFruit(x, y);
        const startPos = cc.v2(pos.x, pos.y+this._vHeight/2);
        newFruit.setPosition(startPos);
        const speed = startPos.y / (1.5*this._vHeight);
        cc.tween(newFruit).to(speed, { position: cc.v2(pos.x, pos.y)}).start();
        this._matrix.set((y - 1) * this._xCount + x, newFruit.getComponent(FruitItem));
        this.fruits.addChild(newFruit);

        newFruit.on(cc.Node.EventType.TOUCH_END, () => {
            let audioId = 0;
            if (newFruit.getComponent(FruitItem).isActive) {
                let musicIdx = this._actives.length - 2;
                if (musicIdx < 0) musicIdx = 0;
                if (musicIdx > 6) musicIdx = 6;
                audioId = cc.audioEngine.playEffect(this.brokenAudio[musicIdx], false);
                
                this.removeActivedFruits();
                this.dropFruits();
                this.checkNextStage();

            } else {
                this.inactive();

                this.activeNeighbor(newFruit.getComponent(FruitItem));
                this.showActivesScore();
                audioId = cc.audioEngine.playEffect(this.selectAudio, false);
            }
            if (audioId > 0) cc.audioEngine.setVolume(audioId, .4);
        });
    },

    positionOfFruit(x, y) {
        const px = this._matrixLBX + (this._fruitWidth + this._fruitGap) * (x - 1) + this._fruitWidth / 2;
        const py = this._matrixLBY + (this._fruitWidth + this._fruitGap) * (y - 1) + this._fruitWidth / 2;
        return cc.v2(px, py);
    },

    inactive() {
        for (let i = 0; i < this._actives.length; i++) {
            this._actives[i].getComponent(FruitItem)?.setActive(false);
        }
        this._actives = [];
    },

    activeNeighbor(fruit) {
        if (!fruit.isActive) {
            fruit.setActive(true);
            this._actives.push(fruit);
        }

        if (fruit.x - 1 >= 1) {
            const leftItem = this._matrix.get((fruit.y-1)*this._xCount+fruit.x-1);
            if (!leftItem.isActive && leftItem.idx==fruit.idx) {
                leftItem.setActive(true);
                this._actives.push(leftItem);
                this.activeNeighbor(leftItem);
            }
        }

        if (fruit.x + 1 <= this._xCount) {
            const rightItem = this._matrix.get((fruit.y-1)*this._xCount+fruit.x+1);
            if (!rightItem.isActive && rightItem.idx==fruit.idx) {
                rightItem.setActive(true);
                this._actives.push(rightItem);
                this.activeNeighbor(rightItem);
            }
            
        }

        if (fruit.y + 1 <= this._yCount) {
            const upItem = this._matrix.get(fruit.y*this._xCount+fruit.x);
            if (!upItem.isActive && upItem.idx==fruit.idx) {
                upItem.setActive(true);
                this._actives.push(upItem);
                this.activeNeighbor(upItem);
            }
        }

        if (fruit.y - 1 >= 1) {
            const downItem = this._matrix.get((fruit.y-2)*this._xCount+fruit.x);
            if (!downItem.isActive && downItem.idx==fruit.idx) {
                downItem.setActive(true);
                this._actives.push(downItem);
                this.activeNeighbor(downItem);
            }
        }
    },

    showActivesScore() {
        if (this._actives.length == 1) {
            this.inactive();
            this.activeScoreLabel.string = '';
            this._activeScore = 0;
            return;
        }

        const len = this._actives.length;
        this._activeScore = (this._scoreStart*2+this._scoreStep*(len-1))*len/2;
        this.activeScoreLabel.string = `${len} 连消，得分 ${this._activeScore}`;
    },

    removeActivedFruits() {
        // let score = this._scoreStart;
        for (let i = 0; i < this._actives.length; i++) {
            const fruit = this._actives[i];
            this._matrix.delete((fruit.y-1)*this._xCount+fruit.x);
            fruit.node.removeFromParent();
        }

        this._actives = [];
        this._curScore += this._activeScore;
        this.curScoreLabel.string = this._curScore.toString();

        this.activeScoreLabel.string = '';
        this._activeScore = 0;
    },

    dropFruits() {
        let emptyInfo = new Map();
        for (let x = 1; x <= this._xCount; x++) {
            let removedFruits = 0;
            let newY = 0;
            for (let y = 1; y <= this._yCount; y++) {
                let key = (y - 1) * this._xCount + x;
                if (this._matrix.has(key)) {
                    let temp = this._matrix.get(key);
                    if (removedFruits > 0) {
                        newY = y - removedFruits;
                        this._matrix.set((newY-1)*this._xCount+x, temp);
                        temp.y = newY;
                        this._matrix.delete((y-1)*this._xCount+x);

                        let pos = this.positionOfFruit(x, newY);
                        let speed = (temp.node.getPosition().y-pos.y) / (1.5*this._vHeight);
                        cc.Tween.stopAllByTarget(temp.node);
                        cc.tween(temp.node).to(speed, { position: cc.v2(pos.x, pos.y) }).start();
                    }
                } else {
                    removedFruits++;
                }
            }
            emptyInfo.set(x, removedFruits);
        }

        for (let x = 1; x <= this._xCount; x++) {
            if (!emptyInfo.has(x)) continue;
            for (let y = this._yCount-emptyInfo.get(x)+1; y <= this._yCount; y++) {
                this.createAndDropFruit(x, y);
            }
        }
    },

    checkNextStage() {
        if (this._curScore < this._target) {
            return;
        }
        
        if (this._curScore >= this._highScore) {
            this._highScore = this._curScore;
        }
        this._stage++;
        this._target *= 200;

        localStorage.setItem(HIGH_SCORE_KEY, this._highScore.toString());
        localStorage.setItem(STAGE_KEY, this._stage.toString());
        this.stageLabel.string = `恭喜过关！\n最高得分：${this._highScore}`;

        cc.find('/Canvas/nextStage').active = true;
        
        const audioId = cc.audioEngine.playEffect(this.wowAudio, false);
        cc.audioEngine.setVolume(audioId, .5);
    },

    changeScene() {
        cc.audioEngine.stopAll();
        cc.director.loadScene('main');
    },

    reloadScene() {
        cc.audioEngine.stopAll();
        cc.director.loadScene('play');
    }

});
