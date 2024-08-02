const HIGH_SCORE_KEY = 'highScore';
const STAGE_KEY = 'stage';
const localStorage = cc.sys.localStorage;
const FruitItem = require('./FruitItem.js');

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
        cc.log(`view width: ${this._vWidth}, height: ${this._vHeight}`)

        this._fruitWidth = cc.instantiate(this.fruitPrefab).width;
        cc.log(`fruit width: ${this._fruitWidth}`);

        this._matrixLBX = (this._vWidth - this._fruitWidth * this._xCount - (this._yCount - 1) * this._fruitGap) / 2;
        this._matrixLBY = (this._vHeight - this._fruitWidth * this._yCount - (this._xCount - 1) * this._fruitGap) / 2 - 30;

        this._matrixLBX -= this._vWidth / 2;
        this._matrixLBY -= this._vHeight / 1.83;

        cc.log(`play ${this._vWidth}, ${this._vHeight}, ${this._fruitWidth}, ${this._matrixLBX}, ${this._matrixLBY}`);

        this.initMartix();
        
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
        let pos = this.positionOfFruit(x, y);
        newFruit.setPosition(pos);
        this._matrix.set((y - 1) * this._xCount + x, newFruit.getComponent(FruitItem));
        this.fruits.addChild(newFruit);

        newFruit.on(cc.Node.EventType.TOUCH_END, () => {
            console.log(`click ${x}, ${y}, ${fruitIndex}`);
            newFruit.getComponent(FruitItem).setActive(true);
            // newFruit.removeFromParent();
        });
    },

    positionOfFruit(x, y) {
        const px = this._matrixLBX + (this._fruitWidth + this._fruitGap) * (x - 1) + this._fruitWidth / 2;
        const py = this._matrixLBY + (this._fruitWidth + this._fruitGap) * (y - 1) + this._fruitWidth / 2;
        return cc.v2(px, py);
    },

    inactive() {
        this._actives = [];
    },

    activeNeighbor(item) {

    },

    showActivesScore() {

    },

    removeActivedFruits() {

    },

    dropFruits() {

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

        cc.find('/Canvas/nextStage').active = true;
    },

    changeScene() {
        cc.director.loadScene('main');
    },

    reloadScene() {
        cc.director.loadScene('play');
    }

});
