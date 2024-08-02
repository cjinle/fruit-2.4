declare namespace cc {
	export var ENGINE_VERSION: string;
	export function speed(action: ActionInterval, speed: number): Action;
	export function follow(followedNode: Node, rect: Rect): Action;
	export function setPoints(points: any[]): void;
	export function cardinalSplineTo(duration: number, points: any[], tension: number): ActionInterval;
	export function updatePosition(newPos: Vec2): void;
	export function cardinalSplineBy(duration: number, points: any[], tension: number): ActionInterval;
	export function catmullRomTo(dt: number, points: any[]): ActionInterval;
	export function catmullRomBy(dt: number, points: any[]): ActionInterval;
	export function easeIn(rate: number): any;
	export function easeOut(rate: number): any;
	export function easeInOut(rate: number): any;
	export function easeExponentialIn(): any;
	export function easeExponentialOut(): any;
	export function easeExponentialInOut(): any;
	export function easeSineIn(): any;
	export function easeSineOut(): any;
	export function easeSineInOut(): any;
	export function easeElasticIn(period: number): any;
	export function easeElasticOut(period: number): any;
	export function easeElasticInOut(period: number): any;
	export function easeBounceIn(): any;
	export function easeBounceOut(): any;
	export function easeBounceInOut(): any;
	export function easeBackIn(): any;
	export function easeBackOut(): any;
	export function easeBackInOut(): any;
	export function easeBezierAction(p0: number, p1: number, p2: number, p3: number): any;
	export function easeQuadraticActionIn(): any;
	export function easeQuadraticActionOut(): any;
	export function easeQuadraticActionInOut(): any;
	export function easeQuarticActionIn(): any;
	export function easeQuarticActionOut(): any;
	export function easeQuarticActionInOut(): any;
	export function easeQuinticActionIn(): any;
	export function easeQuinticActionOut(): any;
	export function easeQuinticActionInOut(): any;
	export function easeCircleActionIn(): any;
	export function easeCircleActionOut(): any;
	export function easeCircleActionInOut(): any;
	export function easeCubicActionIn(): any;
	export function easeCubicActionOut(): any;
	export function easeCubicActionInOut(): any;
	export function sequence(actionOrActionArray: FiniteTimeAction | FiniteTimeAction[], ...tempArray: FiniteTimeAction[]): ActionInterval;
	export function repeat(action: FiniteTimeAction, times: number): ActionInterval;
	export function repeatForever(action: FiniteTimeAction): ActionInterval;
	export function spawn(actionOrActionArray: FiniteTimeAction | FiniteTimeAction[], ...tempArray: FiniteTimeAction[]): FiniteTimeAction;
	export function rotateTo(duration: number, dstAngle: number): ActionInterval;
	export function rotateBy(duration: number, deltaAngle: number): ActionInterval;
	export function moveBy(duration: number, deltaPos: Vec2 | number, deltaY?: number): ActionInterval;
	export function moveTo(duration: number, position: Vec2 | number, y?: number): ActionInterval;
	export function skewTo(t: number, sx: number, sy: number): ActionInterval;
	export function skewBy(t: number, sx: number, sy: number): ActionInterval;
	export function jumpBy(duration: number, position: Vec2 | number, y?: number, height?: number, jumps?: number): ActionInterval;
	export function jumpTo(duration: number, position: Vec2 | number, y?: number, height?: number, jumps?: number): ActionInterval;
	export function bezierBy(t: number, c: Vec2[]): ActionInterval;
	export function bezierTo(t: number, c: Vec2[]): ActionInterval;
	export function scaleTo(duration: number, sx: number, sy?: number): ActionInterval;
	export function scaleBy(duration: number, sx: number, sy?: number | void): ActionInterval;
	export function blink(duration: number, blinks: number): ActionInterval;
	export function fadeTo(duration: number, opacity: number): ActionInterval;
	export function fadeIn(duration: number): ActionInterval;
	export function fadeOut(d: number): ActionInterval;
	export function tintTo(duration: number, red: number, green: number, blue: number): ActionInterval;
	export function tintBy(duration: number, deltaRed: number, deltaGreen: number, deltaBlue: number): ActionInterval;
	export function delayTime(d: number): ActionInterval;
	export function reverseTime(action: FiniteTimeAction): ActionInterval;
	export function targetedAction(target: Node, action: FiniteTimeAction): ActionInterval;
	export function show(): ActionInstant;
	export function hide(): ActionInstant;
	export function toggleVisibility(): ActionInstant;
	export function removeSelf(isNeedCleanUp?: boolean): ActionInstant;
	export function destroySelf(): ActionInstant;
	export function flipX(flip: boolean): ActionInstant;
	export function flipY(flip: boolean): ActionInstant;
	export function place(pos: Vec2 | number, y?: number): ActionInstant;
	export function callFunc(selector: Function, selectorTarget?: any, data?: any): ActionInstant;
	export function tween<T>(target?: T): Tween<T>;
	export function error(msg: any, ...subst: any[]): void;
	export function warn(msg: any, ...subst: any[]): void;
	export function log(msg: string | any, ...subst: any[]): void;
	export var director: Director;
	export var game: Game;
	export var easing: Easing;
	export function rotate3DTo(duration: number, dstAngleX: number | Vec3 | Quat, dstAngleY?: number, dstAngleZ?: number): ActionInterval;
	export function rotate3DBy(duration: number, deltaAngleX: number | Vec3, deltaAngleY?: number, deltaAngleZ?: number): ActionInterval;
	export var systemEvent: SystemEvent;
	export var assetManager: AssetManager;
	export var resources: AssetManager.Bundle;
	export function Class(options?: { name?: string; extends?: Function; ctor?: Function; __ctor__?: Function; properties?: any; statics?: any; mixins?: Function[]; editor?: { executeInEditMode?: boolean; requireComponent?: Function; menu?: string; executionOrder?: number; disallowMultiple?: boolean; playOnFocus?: boolean; inspector?: string; icon?: string; help?: string; }; update?: Function; lateUpdate?: Function; onLoad?: Function; start?: Function; onEnable?: Function; onDisable?: Function; onDestroy?: Function; onFocusInEditor?: Function; onLostFocusInEditor?: Function; resetInEditor?: Function; onRestore?: Function; _getLocalBounds?: Function; }): Function;
	export function Enum<T>(obj: T): T;
	export function handleTouchesBegin(touches: any[]): void;
	export function handleTouchesMove(touches: any[]): void;
	export function handleTouchesEnd(touches: any[]): void;
	export function handleTouchesCancel(touches: any[]): void;
	export function getSetOfTouchesEndOrCancel(touches: any[]): any[];
	export function getGlobalTouchCount(): any;
	export function getGlobalTouches(): any;
	export function getPreTouch(touch: Touch): Touch;
	export function setPreTouch(touch: Touch): void;
	export function getTouchByXY(tx: number, ty: number, pos: Vec2): Touch;
	export function getMouseEvent(location: Vec2, pos: Vec2, eventType: number): Event.EventMouse;
	export function getPointByEvent(event: Touch, pos: Vec2): Vec2;
	export function getTouchesByEvent(event: Touch, pos: Vec2): any[];
	export function registerSystemEvent(element: HTMLElement): void;
	export function update(dt: number): void;
	export function isValid(value: any, strictMode?: boolean): boolean;
	export var view: View;
	export var winSize: Size;
	export var Integer: string;
	export var Float: string;
	export var Boolean: string;
	export var String: string;
	export function deserialize(data: string | any, details?: Details, options?: any): any;
	export function instantiate(original: Prefab): Node;
	export function instantiate<T>(original: T): T;
	export function color(r?: number, g?: number, b?: number, a?: number): Color;
	export function mat4(m00?: number, m01?: number, m02?: number, m03?: number, m10?: number, m11?: number, m12?: number, m13?: number, m20?: number, m21?: number, m22?: number, m23?: number, m30?: number, m31?: number, m32?: number, m33?: number): Mat4;
	export function quat(x?: number | any, y?: number, z?: number, w?: number): Quat;
	export function rect(x?: number, y?: number, w?: number, h?: number): Rect;
	export function size(w: number | Size, h?: number): Size;
	export var EPSILON: number;
	export function clamp(val: number, min: number, max: number): number;
	export function clamp01(val: number): number;
	export function lerp(from: number, to: number, ratio: number): number;
	export function random(): void;
	export function randomRange(min: number, max: number): number;
	export function randomRangeInt(min: number, max: number): number;
	export function pseudoRandom(seed: number): number;
	export function pseudoRandomRange(seed: number, min: number, max: number): number;
	export function pseudoRandomRangeInt(seed: number, min: number, max: number): number;
	export function nextPow2(val: number): number;
	export function repeat(t: number, length: number): number;
	export function repeat(t: number, length: number): number;
	export function repeat(from: number, to: number, value: number): number;
	export function sign(v: number): void;
	export function v2(x?: number | any, y?: number): Vec2;
	export function v3(x?: number | any, y?: number, z?: number): Vec3;
	export function find(path: string, referenceNode?: Node): Node;
	export var dynamicAtlasManager: DynamicAtlasManager;
	export var matrix: any[];
	export function get(i: number, j: number): number;
	export function set(i: number, j: number, value: boolean): void;
	export function reset(): void;
	export class NodePool {
		constructor(poolHandlerComp?: { prototype: Component } | string);
		poolHandlerComp: Function | string;
		size(): number;
		clear(): void;
		put(obj: Node): void;
		get(...params: any[]): Node;
	}
	export class audioEngine {
		static play(clip: AudioClip, loop: boolean, volume: number): number;
		static setLoop(audioID: number, loop: boolean): void;
		static isLoop(audioID: number): boolean;
		static setVolume(audioID: number, volume: number): void;
		static getVolume(audioID: number): number;
		static setCurrentTime(audioID: number, sec: number): boolean;
		static getCurrentTime(audioID: number): number;
		static getDuration(audioID: number): number;
		static getState(audioID: number): audioEngine.AudioState;
		static isPlaying(): boolean;
		static setFinishCallback(audioID: number, callback: Function): void;
		static pause(audioID: number): void;
		static pauseAll(): void;
		static resume(audioID: number): void;
		static resumeAll(): void;
		static stop(audioID: number): void;
		static stopAll(): void;
		static setMaxAudioInstance(num: number): void;
		static getMaxAudioInstance(): number;
		static uncache(clip: AudioClip): void;
		static uncacheAll(): void;
		static playMusic(clip: AudioClip, loop: boolean): number;
		static stopMusic(): void;
		static pauseMusic(): void;
		static resumeMusic(): void;
		static getMusicVolume(): number;
		static setMusicVolume(volume: number): void;
		static isMusicPlaying(): boolean;
		static playEffect(clip: AudioClip, loop: boolean): number;
		static setEffectsVolume(volume: number): void;
		static getEffectsVolume(): number;
		static pauseEffect(audioID: number): void;
		static pauseAllEffects(): void;
		static resumeEffect(audioID: number): void;
		static resumeAllEffects(): void;
		static stopEffect(audioID: number): void;
		static stopAllEffects(): void;
	}
	export class Action {
		clone(): Action;
		isDone(): boolean;
		getTarget(): Node;
		setTarget(target: Node): void;
		getOriginalTarget(): Node;
		getTag(): number;
		setTag(tag: number): void;
		static TAG_INVALID: number;
	}
	export class FiniteTimeAction extends Action {
		getDuration(): number;
		setDuration(duration: number): void;
		reverse(): void;
		clone(): FiniteTimeAction;
	}
	export class ActionInterval extends FiniteTimeAction {
		easing(easeObj: any): ActionInterval;
		repeat(times: number): ActionInterval;
		repeatForever(): ActionInterval;
	}
	export class ActionInstant extends FiniteTimeAction {
	}
	export class ActionManager {
		addAction(action: Action, target: Node, paused: boolean): void;
		removeAllActions(): void;
		removeAllActionsFromTarget(target: Node, forceDelete: boolean): void;
		removeAction(action: Action): void;
		removeActionByTag(tag: number, target?: Node): void;
		removeAllActionsByTag(tag: number, target?: Node): void;
		getActionByTag(tag: number, target: Node): Action;
		getNumberOfRunningActionsInTarget(target: Node): number;
		pauseTarget(target: Node): void;
		resumeTarget(target: Node): void;
		pauseAllRunningActions(): any[];
		resumeTargets(targetsToResume: any[]): void;
		pauseTargets(targetsToPause: any[]): void;
		purgeSharedManager(): void;
		update(dt: number): void;
	}
	export class Tween<T = any> {
		constructor(target?: any);
		static stopAll(): void;
		static stopAllByTag(tag: number): void;
		static stopAllByTarget(target: any): void;
		then(other: Action | Tween<T>): Tween<T>;
		target(target: any): Tween<T>;
		start(): Tween<T>;
		stop(): Tween<T>;
		tag(tag: number): Tween<T>;
		clone(target?: any): Tween<T>;
		union(): Tween;
		bezierTo(duration: number, c1: Vec2, c2: Vec2, to: Vec2): Tween<T>;
		bezierBy(duration: number, c1: Vec2, c2: Vec2, to: Vec2): Tween<T>;
		flipX(): Tween<T>;
		flipY(): Tween<T>;
		blink(duration: number, times: number, opts?: { progress?: Function; easing?: Function | string; }): Tween<T>;
		to<OPTS extends Partial<{ progress: Function, easing: Function | String, onUpdate: Function }>>(duration: number, props: ConstructorType<T>, opts?: OPTS): Tween<T>;
		by<OPTS extends Partial<{ progress: Function, easing: Function | String, onUpdate: Function }>>(duration: number, props: ConstructorType<T>, opts?: OPTS): Tween<T>;
		set(props: ConstructorType<T>): Tween<T>;
		delay(duration: number): Tween<T>;
		call(callback: Function, selectTarget?: object): Tween<T>;
		hide(): Tween<T>;
		show(): Tween<T>;
		removeSelf(): Tween<T>;
		sequence(action: Action | Tween<T>, ...actions: (Action | Tween<T>)[]): Tween<T>;
		parallel(action: Action | Tween<T>, ...actions: (Action | Tween<T>)[]): Tween<T>;
		repeat(repeatTimes: number, action?: Action | Tween<T>): Tween<T>;
		repeatForever(action?: Action | Tween<T>): Tween<T>;
		reverseTime(action?: Action | Tween<T>): Tween<T>;
	}
	export class debug {
		static getError(errorId: number, param?: any): string;
		static isDisplayStats(): boolean;
		static setDisplayStats(displayStats: boolean): void;
	}
	export class Director extends EventTarget {
		convertToGL(uiPoint: Vec2): Vec2;
		convertToUI(glPoint: Vec2): Vec2;
		end(): void;
		getWinSize(): Size;
		getWinSizeInPixels(): Size;
		pause(): void;
		runSceneImmediate(scene: Scene | SceneAsset, onBeforeLoadScene?: Function, onLaunched?: Function): void;
		runScene(scene: Scene | SceneAsset, onBeforeLoadScene?: Function, onLaunched?: Function): void;
		loadScene(sceneName: string, onLaunched?: Function): boolean;
		preloadScene(sceneName: string, onProgress?: (completedCount: number, totalCount: number, item: any) => void, onLoaded?: (error: Error) => void): void;
		resume(): void;
		setDepthTest(on: boolean): void;
		setClearColor(clearColor: Color): void;
		getScene(): Scene;
		getAnimationInterval(): number;
		setAnimationInterval(value: number): void;
		getDeltaTime(): number;
		getTotalTime(): number;
		getTotalFrames(): number;
		isPaused(): boolean;
		getScheduler(): Scheduler;
		setScheduler(scheduler: Scheduler): void;
		getActionManager(): ActionManager;
		setActionManager(actionManager: ActionManager): void;
		getCollisionManager(): CollisionManager;
		getPhysicsManager(): PhysicsManager;
		getPhysics3DManager(): Physics3DManager;
		static EVENT_PROJECTION_CHANGED: string;
		static EVENT_BEFORE_SCENE_LOADING: string;
		static EVENT_BEFORE_SCENE_LAUNCH: string;
		static EVENT_AFTER_SCENE_LAUNCH: string;
		static EVENT_BEFORE_UPDATE: string;
		static EVENT_AFTER_UPDATE: string;
		static EVENT_BEFORE_VISIT: string;
		static EVENT_AFTER_VISIT: string;
		static EVENT_BEFORE_DRAW: string;
		static EVENT_AFTER_DRAW: string;
		static PROJECTION_2D: number;
		static PROJECTION_3D: number;
		static PROJECTION_CUSTOM: number;
		static PROJECTION_DEFAULT: number;
	}
	export class Node extends _BaseNode {
		groupIndex: number;
		group: string;
		position: Vec3;
		x: number;
		y: number;
		z: number;
		rotation: number;
		angle: number;
		eulerAngles: Vec3;
		rotationX: number;
		rotationY: number;
		scale: number;
		scaleX: number;
		scaleY: number;
		scaleZ: number;
		skewX: number;
		skewY: number;
		opacity: number;
		color: Color;
		anchorX: number;
		anchorY: number;
		width: number;
		height: number;
		zIndex: number;
		is3DNode: boolean;
		up: Vec3;
		right: Vec3;
		forward: Vec3;
		constructor(name?: string);
		on<T extends Function>(type: string, callback: T, target?: any, useCapture?: boolean): T;
		once<T extends Function>(type: string, callback: T, target?: any, useCapture?: boolean): T;
		off(type: string, callback?: Function, target?: any, useCapture?: boolean): void;
		targetOff(target: any): void;
		hasEventListener(type: string): boolean;
		emit(type: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any): void;
		dispatchEvent(event: Event): void;
		pauseSystemEvents(recursive: boolean): void;
		resumeSystemEvents(recursive: boolean): void;
		runAction(action: Action): Action;
		pauseAllActions(): void;
		resumeAllActions(): void;
		stopAllActions(): void;
		stopAction(action: Action): void;
		stopActionByTag(tag: number): void;
		getActionByTag(tag: number): Action;
		getNumberOfRunningActions(): number;
		getPosition(out?: Vec2 | Vec3): Vec2;
		setPosition(x: Vec2 | Vec3 | number, y?: number, z?: number): void;
		getScale(out: Vec2 | Vec3): Vec2;
		setScale(x: number | Vec2 | Vec3, y?: number, z?: number): void;
		getRotation(out: Quat): Quat;
		setRotation(quat: Quat | number, y?: number, z?: number, w?: number): void;
		getContentSize(): Size;
		setContentSize(size: Size | number, height?: number): void;
		getAnchorPoint(): Vec2;
		setAnchorPoint(point: Vec2 | number, y?: number): void;
		lookAt(pos: Vec3, up?: Vec3): void;
		getLocalMatrix(out: Mat4): Mat4;
		getWorldMatrix(out: Mat4): Mat4;
		convertToNodeSpaceAR<T extends cc.Vec2 | cc.Vec3>(worldPoint: T, out?: T): T;
		convertToWorldSpaceAR<T extends cc.Vec2 | cc.Vec3>(nodePoint: T, out?: T): T;
		convertToNodeSpace(worldPoint: Vec2): Vec2;
		convertToWorldSpace(nodePoint: Vec2): Vec2;
		getNodeToParentTransform(out?: AffineTransform): AffineTransform;
		getNodeToParentTransformAR(out?: AffineTransform): AffineTransform;
		getNodeToWorldTransform(out?: AffineTransform): AffineTransform;
		getNodeToWorldTransformAR(out?: AffineTransform): AffineTransform;
		getParentToNodeTransform(out?: AffineTransform): AffineTransform;
		getWorldToNodeTransform(out?: AffineTransform): AffineTransform;
		convertTouchToNodeSpace(touch: Touch): Vec2;
		convertTouchToNodeSpaceAR(touch: Touch): Vec2;
		getBoundingBox(): Rect;
		getBoundingBoxToWorld(): Rect;
		groupIndex: number;
		addChild(child: Node, zIndex?: number, name?: string): void;
		cleanup(): void;
		sortAllChildren(): void;
		getDisplayedOpacity(): number;
		getDisplayedColor(): Color;
		cascadeOpacity: boolean;
		isCascadeOpacityEnabled(): boolean;
		setCascadeOpacityEnabled(cascadeOpacityEnabled: boolean): void;
		setOpacityModifyRGB(opacityValue: boolean): void;
		isOpacityModifyRGB(): boolean;
	}
	export class Game extends EventTarget {
		EVENT_HIDE: string;
		EVENT_SHOW: string;
		EVENT_RESTART: string;
		EVENT_GAME_INITED: string;
		EVENT_ENGINE_INITED: string;
		RENDER_TYPE_CANVAS: number;
		RENDER_TYPE_WEBGL: number;
		RENDER_TYPE_OPENGL: number;
		frame: any;
		container: HTMLDivElement;
		canvas: HTMLCanvasElement;
		renderType: number;
		config: any;
		onStart(): void;
		setFrameRate(frameRate: number): void;
		getFrameRate(): number;
		step(): void;
		pause(): void;
		resume(): void;
		isPaused(): boolean;
		restart(): void;
		end(): void;
		on<T extends Function>(type: string, callback: T, target?: any, useCapture?: boolean): T;
		once(type: string, callback: (arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) => void, target?: any): void;
		prepare(cb: Function): void;
		run(config: any, onStart: Function): void;
		addPersistRootNode(node: Node): void;
		removePersistRootNode(node: Node): void;
		isPersistRootNode(node: Node): boolean;
	}
	export class PrivateNode extends Node {
		constructor(name?: string);
	}
	export class Scene extends Node {
		autoReleaseAssets: boolean;
	}
	export class Scheduler {
		enableForTarget(target: any): void;
		setTimeScale(timeScale: number): void;
		getTimeScale(): number;
		update(dt: number): void;
		schedule(callback: Function, target: any, interval: number, repeat: number, delay: number, paused?: boolean): void;
		schedule(callback: Function, target: any, interval: number, paused?: boolean): void;
		scheduleUpdate(target: any, priority: number, paused: boolean): void;
		unschedule(callback: Function, target: any): void;
		unscheduleUpdate(target: any): void;
		unscheduleAllForTarget(target: any): void;
		unscheduleAll(): void;
		unscheduleAllWithMinPriority(minPriority: number): void;
		isScheduled(callback: Function, target: any): boolean;
		pauseAllTargets(): void;
		pauseAllTargetsWithMinPriority(minPriority: number): void;
		resumeTargets(targetsToResume: any[]): void;
		pauseTarget(target: any): void;
		resumeTarget(target: any): void;
		isTargetPaused(target: any): boolean;
		static PRIORITY_SYSTEM: number;
		static PRIORITY_NON_SYSTEM: number;
	}
	export class AnimationClip extends Asset {
		duration: number;
		sample: number;
		speed: number;
		wrapMode: WrapMode;
		curveData: any;
		events: { frame: number, func: string, params: string[] }[];
		static createWithSpriteFrames(spriteFrames: SpriteFrame[], sample: number): AnimationClip;
	}
	export class AnimationState extends Playable {
		constructor(clip: AnimationClip, name?: string);
		curves: any[];
		delay: number;
		repeatCount: number;
		duration: number;
		speed: number;
		wrapMode: WrapMode;
		time: number;
		clip: AnimationClip;
		name: string;
	}
	export class Easing {
		quadIn(t: number): number;
		quadOut(t: number): number;
		quadInOut(t: number): number;
		cubicIn(t: number): number;
		cubicOut(t: number): number;
		cubicInOut(t: number): number;
		quartIn(t: number): number;
		quartOut(t: number): number;
		quartInOut(t: number): number;
		quintIn(t: number): number;
		quintOut(t: number): number;
		quintInOut(t: number): number;
		sineIn(t: number): number;
		sineOut(t: number): number;
		sineInOut(t: number): number;
		expoIn(t: number): number;
		expoOut(t: number): number;
		expoInOut(t: number): number;
		circIn(t: number): number;
		circOut(t: number): number;
		circInOut(t: number): number;
		elasticIn(t: number): number;
		elasticOut(t: number): number;
		elasticInOut(t: number): number;
		backIn(t: number): number;
		backOut(t: number): number;
		backInOut(t: number): number;
		bounceIn(t: number): number;
		bounceOut(t: number): number;
		bounceInOut(t: number): number;
		smooth(t: number): number;
		fade(t: number): number;
	}
	export class Playable {
		isPlaying: boolean;
		isPaused: boolean;
		play(): void;
		stop(): void;
		pause(): void;
		resume(): void;
		step(): void;
	}
	export enum WrapMode {
		Default = 0,
		Normal = 0,
		Reverse = 0,
		Loop = 0,
		LoopReverse = 0,
		PingPong = 0,
		PingPongReverse = 0,
	}
	export class TMXLayerInfo {
		properties: any;
	}
	export class TMXImageLayerInfo {
	}
	export class TMXObjectGroupInfo {
		properties: any[];
	}
	export class TMXTilesetInfo {
		name: string;
		firstGid: number;
		spacing: number;
		margin: number;
		sourceImage: any;
		imageSize: Size;
	}
	export class TMXMapInfo {
		properties: any[];
		orientation: number;
		parentElement: any;
		parentGID: number;
		layerAttrs: any;
		storingCharacters: boolean;
		currentString: string;
		mapWidth: number;
		mapHeight: number;
		tileWidth: number;
		tileHeight: number;
		static ATTRIB_NONE: number;
		static ATTRIB_BASE64: number;
		static ATTRIB_GZIP: number;
		static ATTRIB_ZLIB: number;
	}
	export class TiledLayer extends Component {
		enableCulling(value: boolean): void;
		addUserNode(node: Node): boolean;
		removeUserNode(node: Node): boolean;
		destroyUserNode(node: Node): void;
		getLayerName(): string;
		setLayerName(layerName: string): void;
		getProperty(propertyName: string): any;
		getPositionAt(pos: Vec2 | number, y?: number): Vec2;
		setTilesGIDAt(gids: any[], beginCol: number, beginRow: number, totalCols: number): void;
		setTileGIDAt(gid: number, posOrX: Vec2 | number, flagsOrY: number, flags?: number): void;
		getTiles(): number[];
		getTileGIDAt(pos: Vec2 | number, y?: number): number;
		getLayerOrientation(): number;
		getProperties(): any;
		getTiledTileAt(x: number, y: number, forceCreate: boolean): TiledTile;
		setTiledTileAt(x: number, y: number, tiledTile: TiledTile): TiledTile;
		getTexture(index: any): Texture2D;
		getTextures(): Texture2D;
		setTexture(texture: Texture2D): void;
		setTexture(textures: Texture2D): void;
		getLayerSize(): Size;
		getMapTileSize(): Size;
		getTileSet(index: any): TMXTilesetInfo;
		getTileSet(): TMXTilesetInfo;
		setTileSet(tileset: TMXTilesetInfo): void;
		setTileSets(tilesets: TMXTilesetInfo): void;
	}
	export class TiledMap extends Component {
		tmxAsset: TiledMapAsset;
		getMapSize(): Size;
		getTileSize(): Size;
		getMapOrientation(): number;
		getObjectGroups(): TiledObjectGroup[];
		getObjectGroup(groupName: string): TiledObjectGroup;
		enableCulling(value: boolean): void;
		getProperties(): any[];
		getLayers(): TiledLayer[];
		getLayer(layerName: string): TiledLayer;
		getProperty(propertyName: string): string;
		getPropertiesForGID(GID: number): any;
	}
	export class TiledObjectGroup extends Component {
		getPositionOffset(): Vec2;
		getProperties(): any;
		getGroupName(): string;
		getObject(objectName: string): any;
		getObjects(): any[];
	}
	export class TiledMapAsset extends Asset {
		textures: Texture2D[];
		textureNames: string[];
		textureSizes: Size[];
		imageLayerTextures: Texture2D[];
		imageLayerTextureNames: string[];
	}
	export class TiledTile extends Component {
		x: number;
		y: number;
		gid: number;
	}
	export class ParticleAsset extends Asset {
	}
	export class ParticleSystem extends RenderComponent implements BlendFunc {
		preview: boolean;
		custom: boolean;
		file: ParticleAsset;
		spriteFrame: SpriteFrame;
		texture: string;
		particleCount: number;
		stopped: boolean;
		playOnLoad: boolean;
		autoRemoveOnFinish: boolean;
		active: boolean;
		totalParticles: number;
		duration: number;
		emissionRate: number;
		life: number;
		lifeVar: number;
		startColor: Color;
		startColorVar: Color;
		endColor: Color;
		endColorVar: Color;
		angle: number;
		angleVar: number;
		startSize: number;
		startSizeVar: number;
		endSize: number;
		endSizeVar: number;
		startSpin: number;
		startSpinVar: number;
		endSpin: number;
		endSpinVar: number;
		sourcePos: Vec2;
		posVar: Vec2;
		positionType: ParticleSystem.PositionType;
		emitterMode: ParticleSystem.EmitterMode;
		gravity: Vec2;
		speed: number;
		speedVar: number;
		tangentialAccel: number;
		tangentialAccelVar: number;
		radialAccel: number;
		radialAccelVar: number;
		rotationIsDir: boolean;
		startRadius: number;
		startRadiusVar: number;
		endRadius: number;
		endRadiusVar: number;
		rotatePerS: number;
		rotatePerSVar: number;
		static DURATION_INFINITY: number;
		static START_SIZE_EQUAL_TO_END_SIZE: number;
		static START_RADIUS_EQUAL_TO_END_RADIUS: number;
		stopSystem(): void;
		resetSystem(): void;
		isFull(): boolean;
		setTextureWithRect(texture: Texture2D, rect: Rect): void;
		srcBlendFactor: macro.BlendFactor;
		dstBlendFactor: macro.BlendFactor;
	}
	export class WebView extends Component {
		url: string;
		webviewLoadedEvents: Component.EventHandler[];
		setJavascriptInterfaceScheme(scheme: string): void;
		setOnJSCallback(callback: Function): void;
		evaluateJS(str: string): void;
		destroy(): boolean;
	}
	export class VideoPlayer extends Component {
		resourceType: VideoPlayer.ResourceType;
		remoteURL: string;
		clip: VideoClip;
		currentTime: number;
		volume: number;
		mute: boolean;
		keepAspectRatio: boolean;
		isFullscreen: boolean;
		stayOnBottom: boolean;
		videoPlayerEvent: Component.EventHandler[];
		play(): void;
		resume(): void;
		pause(): void;
		stop(): void;
		getDuration(): number;
		isPlaying(): boolean;
		destroy(): boolean;
	}
	export class Light extends Component {
	}
	export class Camera extends Component {
		zoomRatio: number;
		fov: number;
		orthoSize: number;
		nearClip: number;
		farClip: number;
		ortho: boolean;
		rect: Rect;
		cullingMask: number;
		clearFlags: Camera.ClearFlags;
		backgroundColor: Color;
		depth: number;
		targetTexture: RenderTexture;
		renderStages: number;
		alignWithScreen: boolean;
		static main: Camera;
		static cameras: Camera[];
		static findCamera(node: Node): Camera;
		getScreenToWorldMatrix2D(out: Mat4): Mat4;
		getWorldToScreenMatrix2D(out: Mat4): Mat4;
		getScreenToWorldPoint(screenPosition: Vec3 | Vec2, out?: Vec3 | Vec2): Vec3;
		getWorldToScreenPoint(worldPosition: Vec3 | Vec2, out?: Vec3 | Vec2): Vec3;
		getRay(screenPos: Vec2): geomUtils.Ray;
		containsNode(node: Node): boolean;
		render(rootNode?: Node): void;
		getNodeToCameraTransform(node: Node): AffineTransform;
		getCameraToWorldPoint(point: Vec2, out?: Vec2): Vec2;
		getWorldToCameraPoint(point: Vec2, out?: Vec2): Vec2;
		getCameraToWorldMatrix(out: Mat4): Mat4;
		getWorldToCameraMatrix(out: Mat4): Mat4;
	}
	export class BoxCollider extends Collider implements Collider.Box {
		world: ColliderInfo;
		offset: Vec2;
		size: Size;
	}
	export class CircleCollider extends Collider implements Collider.Circle {
		world: ColliderInfo;
		offset: Vec2;
		radius: number;
	}
	export class Collider extends Component {
		tag: number;
	}
	export class ColliderInfo {
		preAabb: Rect;
		aabb: Rect;
		matrix: Mat4;
		radius: number;
		position: Vec2;
		points: Vec2[];
	}
	export class CollisionManager implements EventTarget {
		enabled: boolean;
		enabledDrawBoundingBox: boolean;
		enabledDebugDraw: boolean;
		hasEventListener(type: string): boolean;
		on<T extends Function>(type: string, callback: T, target?: any, useCapture?: boolean): T;
		off(type: string, callback?: Function, target?: any): void;
		targetOff(target: any): void;
		once(type: string, callback: (arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) => void, target?: any): void;
		dispatchEvent(event: Event): void;
		clear(): void;
	}
	export class Intersection {
		static lineLine(a1: Vec2, a2: Vec2, b1: Vec2, b2: Vec2): boolean;
		static lineRect(a1: Vec2, a2: Vec2, b: Rect): boolean;
		static linePolygon(a1: Vec2, a2: Vec2, b: Vec2[]): boolean;
		static rectRect(a: Rect, b: Rect): boolean;
		static rectPolygon(a: Rect, b: Vec2[]): boolean;
		static polygonPolygon(a: Vec2[], b: Vec2[]): boolean;
		static circleCircle(a: { position: Vec2, radius: number }, b: { position: Vec2, radius: number }): boolean;
		static polygonCircle(polygon: Vec2[], circle: { position: Vec2, radius: number }): boolean;
		static pointInPolygon(point: Vec2, polygon: Vec2[]): boolean;
		static pointLineDistance(point: Vec2, start: Vec2, end: Vec2, isSegment: boolean): number;
	}
	export class PolygonCollider extends Collider implements Collider.Polygon {
		world: ColliderInfo;
		offset: Vec2;
		points: Vec2[];
	}
	export class Animation extends Component implements EventTarget {
		defaultClip: AnimationClip;
		currentClip: AnimationClip;
		playOnLoad: boolean;
		getClips(): AnimationClip[];
		play(name?: string, startTime?: number): AnimationState;
		playAdditive(name?: string, startTime?: number): AnimationState;
		stop(name?: string): void;
		pause(name?: string): void;
		resume(name?: string): void;
		setCurrentTime(time?: number, name?: string): void;
		getAnimationState(name: string): AnimationState;
		hasAnimationState(name: string): boolean;
		addClip(clip: AnimationClip, newName?: string): AnimationState;
		removeClip(clip: AnimationClip, force?: boolean): void;
		sample(name: string): void;
		on(type: string, callback: (event: Event.EventCustom) => void, target?: any, useCapture?: boolean): (event: Event.EventCustom) => void;
		on<T>(type: string, callback: (event: T) => void, target?: any, useCapture?: boolean): (event: T) => void;
		on(type: string, callback: (type: string, state: cc.AnimationState) => void, target?: any, useCapture?: boolean): (type: string, state: cc.AnimationState) => void;
		off(type: string, callback?: Function, target?: any, useCapture?: boolean): void;
		hasEventListener(type: string): boolean;
		targetOff(target: any): void;
		once(type: string, callback: (arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) => void, target?: any): void;
		dispatchEvent(event: Event): void;
		clear(): void;
	}
	export class AudioSource extends Component {
		isPlaying: boolean;
		clip: AudioClip;
		volume: number;
		mute: boolean;
		loop: boolean;
		playOnLoad: boolean;
		preload: boolean;
		play(): void;
		stop(): void;
		pause(): void;
		resume(): void;
		rewind(): void;
		getCurrentTime(): number;
		setCurrentTime(time: number): number;
		getDuration(): number;
	}
	export class BlockInputEvents extends Component {
	}
	export class Button extends Component implements GraySpriteState {
		interactable: boolean;
		enableAutoGrayEffect: boolean;
		transition: Button.Transition;
		normalColor: Color;
		pressedColor: Color;
		hoverColor: Color;
		disabledColor: Color;
		duration: number;
		zoomScale: number;
		normalSprite: SpriteFrame;
		pressedSprite: SpriteFrame;
		hoverSprite: SpriteFrame;
		disabledSprite: SpriteFrame;
		target: Node;
		clickEvents: Component.EventHandler[];
		normalMaterial: Material;
		grayMaterial: Material;
	}
	export class Canvas extends Component {
		static instance: Canvas;
		designResolution: Size;
		fitHeight: boolean;
		fitWidth: boolean;
	}
	export class Component extends Object {
		node: Node;
		uuid: string;
		enabled: boolean;
		enabledInHierarchy: boolean;
		_isOnLoadCalled: number;
		protected update(dt: number): void;
		protected lateUpdate(dt: number): void;
		protected onLoad(): void;
		protected start(): void;
		protected onEnable(): void;
		protected onDisable(): void;
		protected onDestroy(): void;
		protected onFocusInEditor(): void;
		protected onLostFocusInEditor(): void;
		protected resetInEditor(): void;
		addComponent<T extends Component>(type: { new(): T }): T;
		addComponent(className: string): any;
		getComponent<T extends Component>(type: { prototype: T }): T;
		getComponent(className: string): any;
		getComponents<T extends Component>(type: { prototype: T }): T[];
		getComponents(className: string): any[];
		getComponentInChildren<T extends Component>(type: { prototype: T }): T;
		getComponentInChildren(className: string): any;
		getComponentsInChildren<T extends Component>(type: { prototype: T }): T[];
		getComponentsInChildren(className: string): any[];
		_getLocalBounds(out_rect: Rect): void;
		onRestore(): void;
		schedule(callback: Function, interval?: number, repeat?: number, delay?: number): void;
		scheduleOnce(callback: Function, delay?: number): void;
		unschedule(callback_fn: Function): void;
		unscheduleAllCallbacks(): void;
	}
	export class Label extends RenderComponent {
		string: string;
		horizontalAlign: Label.HorizontalAlign;
		verticalAlign: Label.VerticalAlign;
		actualFontSize: number;
		fontSize: number;
		fontFamily: string;
		lineHeight: number;
		overflow: Label.Overflow;
		enableWrapText: boolean;
		font: Font;
		useSystemFont: boolean;
		spacingX: number;
		cacheMode: Label.CacheMode;
		enableBold: boolean;
		enableItalic: boolean;
		enableUnderline: boolean;
		underlineHeight: number;
		static clearCharCache(): void;
	}
	export class LabelOutline extends Component {
		color: Color;
		width: number;
	}
	export class LabelShadow extends Component {
		color: Color;
		offset: Vec2;
		blur: number;
	}
	export class Layout extends Component {
		type: Layout.Type;
		resizeMode: Layout.ResizeMode;
		cellSize: Size;
		startAxis: Layout.AxisDirection;
		paddingLeft: number;
		paddingRight: number;
		paddingTop: number;
		paddingBottom: number;
		spacingX: number;
		spacingY: number;
		verticalDirection: Layout.VerticalDirection;
		horizontalDirection: Layout.HorizontalDirection;
		affectedByScale: boolean;
		updateLayout(): void;
	}
	export class MotionStreak extends Component implements BlendFunc {
		preview: boolean;
		fadeTime: number;
		minSeg: number;
		stroke: number;
		texture: Texture2D;
		color: Color;
		fastMode: boolean;
		reset(): void;
		srcBlendFactor: macro.BlendFactor;
		dstBlendFactor: macro.BlendFactor;
	}
	export class Mask extends RenderComponent {
		type: Mask.Type;
		spriteFrame: SpriteFrame;
		alphaThreshold: number;
		inverted: boolean;
		segements: number;
	}
	export class PageView extends ScrollView {
		sizeMode: PageView.SizeMode;
		direction: PageView.Direction;
		scrollThreshold: number;
		autoPageTurningThreshold: number;
		pageTurningEventTiming: number;
		indicator: PageViewIndicator;
		pageTurningSpeed: number;
		pageEvents: Component.EventHandler[];
		getCurrentPageIndex(): number;
		setCurrentPageIndex(index: number): void;
		getPages(): Node[];
		addPage(page: Node): void;
		insertPage(page: Node, index: number): void;
		removePage(page: Node): void;
		removePageAtIndex(index: number): void;
		removeAllPages(): void;
		scrollToPage(idx: number, timeInSecond: number): void;
	}
	export class PageViewIndicator extends Component {
		spriteFrame: SpriteFrame;
		direction: PageViewIndicator.Direction;
		cellSize: Size;
		spacing: number;
		setPageView(target: PageView): void;
	}
	export class ProgressBar extends Component {
		barSprite: Sprite;
		mode: ProgressBar.Mode;
		totalLength: number;
		progress: number;
		reverse: boolean;
	}
	export class RenderComponent extends Component {
		sharedMaterials: Material[];
		getMaterial(index: number): MaterialVariant;
		getMaterials(): MaterialVariant[];
		setMaterial(index: number, material: Material): Material;
	}
	export class RichText extends Component {
		string: string;
		horizontalAlign: macro.TextAlignment;
		fontSize: number;
		fontFamily: string;
		font: TTFFont;
		useSystemFont: boolean;
		cacheMode: Label.CacheMode;
		maxWidth: number;
		lineHeight: number;
		imageAtlas: SpriteAtlas;
		handleTouchEvent: boolean;
	}
	export class SafeArea extends Component {
		updateArea(): void;
	}
	export class Scrollbar extends Component {
		handle: Sprite;
		direction: Scrollbar.Direction;
		enableAutoHide: boolean;
		autoHideTime: number;
	}
	export class ScrollView extends Component {
		content: Node;
		horizontal: boolean;
		vertical: boolean;
		inertia: boolean;
		brake: number;
		elastic: boolean;
		bounceDuration: number;
		horizontalScrollBar: Scrollbar;
		verticalScrollBar: Scrollbar;
		scrollEvents: Component.EventHandler[];
		cancelInnerEvents: boolean;
		scrollToBottom(timeInSecond?: number, attenuated?: boolean): void;
		scrollToTop(timeInSecond?: number, attenuated?: boolean): void;
		scrollToLeft(timeInSecond?: number, attenuated?: boolean): void;
		scrollToRight(timeInSecond?: number, attenuated?: boolean): void;
		scrollToTopLeft(timeInSecond?: number, attenuated?: boolean): void;
		scrollToTopRight(timeInSecond?: number, attenuated?: boolean): void;
		scrollToBottomLeft(timeInSecond?: number, attenuated?: boolean): void;
		scrollToBottomRight(timeInSecond?: number, attenuated?: boolean): void;
		scrollToOffset(offset: Vec2, timeInSecond?: number, attenuated?: boolean): void;
		getScrollOffset(): Vec2;
		getMaxScrollOffset(): Vec2;
		scrollToPercentHorizontal(percent: number, timeInSecond?: number, attenuated?: boolean): void;
		scrollTo(anchor: Vec2, timeInSecond?: number, attenuated?: boolean): void;
		scrollToPercentVertical(percent: number, timeInSecond?: number, attenuated?: boolean): void;
		stopAutoScroll(): void;
		setContentPosition(position: Vec2): void;
		getContentPosition(): Vec2;
		isScrolling(): boolean;
		isAutoScrolling(): boolean;
		hasNestedViewGroup(): boolean;
	}
	export class Slider extends Component {
		handle: Button;
		direction: Slider.Direction;
		progress: number;
		slideEvents: Component.EventHandler[];
	}
	export class Sprite extends RenderComponent implements BlendFunc {
		spriteFrame: SpriteFrame;
		type: Sprite.Type;
		fillType: Sprite.FillType;
		fillCenter: Vec2;
		fillStart: number;
		fillRange: number;
		trim: boolean;
		sizeMode: Sprite.SizeMode;
		setState(state: Sprite.State): void;
		getState(): Sprite.State;
		srcBlendFactor: macro.BlendFactor;
		dstBlendFactor: macro.BlendFactor;
	}
	export class Toggle extends Button implements GraySpriteState {
		isChecked: boolean;
		toggleGroup: ToggleGroup;
		checkMark: Sprite;
		checkEvents: Component.EventHandler[];
		check(): void;
		uncheck(): void;
		normalMaterial: Material;
		grayMaterial: Material;
	}
	export class ToggleContainer extends Component {
		allowSwitchOff: boolean;
		checkEvents: Component.EventHandler[];
		toggleItems: Toggle[];
	}
	export class ToggleGroup extends Component {
		allowSwitchOff: boolean;
		toggleItems: any[];
	}
	export class ViewGroup extends Component {
	}
	export class Widget extends Component {
		target: Node;
		isAlignTop: boolean;
		isAlignVerticalCenter: boolean;
		isAlignBottom: boolean;
		isAlignLeft: boolean;
		isAlignHorizontalCenter: boolean;
		isAlignRight: boolean;
		isStretchWidth: boolean;
		isStretchHeight: boolean;
		top: number;
		bottom: number;
		left: number;
		right: number;
		horizontalCenter: number;
		verticalCenter: number;
		isAbsoluteHorizontalCenter: boolean;
		isAbsoluteVerticalCenter: boolean;
		isAbsoluteTop: boolean;
		isAbsoluteBottom: boolean;
		isAbsoluteLeft: boolean;
		isAbsoluteRight: boolean;
		alignMode: Widget.AlignMode;
		updateAlignment(): void;
		isAlignOnce: boolean;
	}
	export class SubContextView extends Component {
		reset(): void;
		updateSubContextViewport(): void;
	}
	export class WXSubContextView extends Component {
	}
	export class SwanSubContextView extends Component {
	}
	export class Touch {
		getLocation(): Vec2;
		getLocationX(): number;
		getLocationY(): number;
		getPreviousLocation(): Vec2;
		getStartLocation(): Vec2;
		getDelta(): Vec2;
		getLocationInView(): Vec2;
		getPreviousLocationInView(): Vec2;
		getStartLocationInView(): Vec2;
		getID(): number;
		setTouchInfo(id: number, x: number, y: number): void;
	}
	export class EventTarget extends CallbacksInvoker {
		hasEventListener(type: string): boolean;
		on<T extends Function>(type: string, callback: T, target?: any, useCapture?: boolean): T;
		off(type: string, callback?: Function, target?: any): void;
		targetOff(target: any): void;
		once(type: string, callback: (arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) => void, target?: any): void;
		dispatchEvent(event: Event): void;
		clear(): void;
	}
	export class Event {
		constructor(type: string, bubbles: boolean);
		type: string;
		bubbles: boolean;
		target: any;
		currentTarget: any;
		eventPhase: number;
		unuse(): string;
		reuse(): string;
		stopPropagation(): void;
		stopPropagationImmediate(): void;
		isStopped(): boolean;
		getCurrentTarget(): Node;
		getType(): string;
		static NO_TYPE: string;
		static TOUCH: string;
		static MOUSE: string;
		static KEYBOARD: string;
		static ACCELERATION: string;
		static NONE: number;
		static CAPTURING_PHASE: number;
		static AT_TARGET: number;
		static BUBBLING_PHASE: number;
	}
	export class SystemEvent extends EventTarget {
		setAccelerometerEnabled(isEnable: boolean): void;
		setAccelerometerInterval(interval: number): void;
	}
	export class AssetManager {
		pipeline: cc.AssetManager.Pipeline;
		fetchPipeline: cc.AssetManager.Pipeline;
		transformPipeline: cc.AssetManager.Pipeline;
		bundles: AssetManager.Cache<AssetManager.Bundle>;
		assets: AssetManager.Cache<cc.Asset>;
		dependUtil: cc.AssetManager.DependUtil;
		cacheAsset: boolean;
		force: boolean;
		utils: cc.AssetManager.Helper;
		downloader: cc.AssetManager.Downloader;
		parser: cc.AssetManager.Parser;
		builtins: cc.AssetManager.Builtins;
		packManager: cc.AssetManager.PackManager;
		cacheManager: cc.AssetManager.CacheManager | null;
		presets: Record<string, Record<string, any>>;
		main: cc.AssetManager.Bundle;
		resources: cc.AssetManager.Bundle;
		internal: cc.AssetManager.Bundle;
		init(options: Record<string, any>): void;
		getBundle(name: string): cc.AssetManager.Bundle;
		removeBundle(bundle: cc.AssetManager.Bundle): void;
		loadAny(requests: string | string[] | Record<string, any> | Record<string, any>[], options: Record<string, any>, onProgress: (finished: number, total: number, item: cc.AssetManager.RequestItem) => void, onComplete: (err: Error, data: any) => void): void;
		loadAny(requests: string | string[] | Record<string, any> | Record<string, any>[], onProgress: (finished: number, total: number, item: cc.AssetManager.RequestItem) => void, onComplete: (err: Error, data: any) => void): void;
		loadAny(requests: string | string[] | Record<string, any> | Record<string, any>[], options: Record<string, any>, onComplete: (err: Error, data: any) => void): void;
		loadAny(requests: string | string[] | Record<string, any> | Record<string, any>[], onComplete: (err: Error, data: any) => void): void;
		loadAny(requests: string | string[] | Record<string, any> | Record<string, any>[], options: Record<string, any>): void;
		loadAny(requests: string | string[] | Record<string, any> | Record<string, any>[]): void;
		preloadAny(requests: string | string[] | Record<string, any> | Record<string, any>[], options: Record<string, any>, onProgress: (finished: number, total: number, item: cc.AssetManager.RequestItem) => void, onComplete: (err: Error, items: cc.AssetManager.RequestItem[]) => void): void;
		preloadAny(requests: string | string[] | Record<string, any> | Record<string, any>[], onProgress: (finished: number, total: number, item: cc.AssetManager.RequestItem) => void, onComplete: (err: Error, items: cc.AssetManager.RequestItem[]) => void): void;
		preloadAny(requests: string | string[] | Record<string, any> | Record<string, any>[], options: Record<string, any>, onComplete: (err: Error, items: cc.AssetManager.RequestItem[]) => void): void;
		preloadAny(requests: string | string[] | Record<string, any> | Record<string, any>[], onComplete: (err: Error, items: cc.AssetManager.RequestItem[]) => void): void;
		preloadAny(requests: string | string[] | Record<string, any> | Record<string, any>[], options: Record<string, any>): void;
		preloadAny(requests: string | string[] | Record<string, any> | Record<string, any>[]): void;
		postLoadNative(asset: cc.Asset, options: Record<string, any>, onComplete: (err: Error) => void): void;
		postLoadNative(asset: cc.Asset, onComplete: (err: Error) => void): void;
		postLoadNative(asset: cc.Asset, options: Record<string, any>): void;
		postLoadNative(asset: cc.Asset): void;
		loadRemote<T extends cc.Asset>(url: string, options: Record<string, any>, onComplete: (err: Error, asset: T) => void): void;
		loadRemote<T extends cc.Asset>(url: string, onComplete: (err: Error, asset: T) => void): void;
		loadRemote<T extends cc.Asset>(url: string, options: Record<string, any>): void;
		loadRemote<T extends cc.Asset>(url: string): void;
		loadScript(url: string | string[], options: Record<string, any>, onComplete: (err: Error) => void): void;
		loadScript(url: string | string[], onComplete: (err: Error) => void): void;
		loadScript(url: string | string[], options: Record<string, any>): void;
		loadScript(url: string | string[]): void;
		loadBundle(nameOrUrl: string, options: Record<string, any>, onComplete: (err: Error, bundle: cc.AssetManager.Bundle) => void): void;
		loadBundle(nameOrUrl: string, onComplete: (err: Error, bundle: cc.AssetManager.Bundle) => void): void;
		loadBundle(nameOrUrl: string, options: Record<string, any>): void;
		loadBundle(nameOrUrl: string): void;
		releaseAsset(asset: cc.Asset): void;
		releaseAll(): void;
	}
	export class loader {
		static onProgress: any;
		static load(resources: string | string[] | { uuid?: string, url?: string, type?: string }, completeCallback?: Function): void;
		static load(resources: string | string[] | { uuid?: string, url?: string, type?: string }, progressCallback: (completedCount: number, totalCount: number, item: any) => void, completeCallback: Function | null): void;
		static getXMLHttpRequest(): XMLHttpRequest;
		static getItem(id: any): any;
		static loadRes(url: string, type: typeof cc.Asset, progressCallback: (completedCount: number, totalCount: number, item: any) => void, completeCallback: ((error: Error, resource: any) => void) | null): void;
		static loadRes(url: string, type: typeof cc.Asset, completeCallback: (error: Error, resource: any) => void): void;
		static loadRes(url: string, type: typeof cc.Asset): void;
		static loadRes(url: string, progressCallback: (completedCount: number, totalCount: number, item: any) => void, completeCallback: ((error: Error, resource: any) => void) | null): void;
		static loadRes(url: string, completeCallback: (error: Error, resource: any) => void): void;
		static loadRes(url: string): void;
		static loadResArray(url: string[], type: typeof cc.Asset, progressCallback: (completedCount: number, totalCount: number, item: any) => void, completeCallback: ((error: Error, resource: any[]) => void) | null): void;
		static loadResArray(url: string[], type: typeof cc.Asset, completeCallback: (error: Error, resource: any[]) => void): void;
		static loadResArray(url: string[], type: typeof cc.Asset): void;
		static loadResArray(url: string[], progressCallback: (completedCount: number, totalCount: number, item: any) => void, completeCallback: ((error: Error, resource: any[]) => void) | null): void;
		static loadResArray(url: string[], completeCallback: (error: Error, resource: any[]) => void): void;
		static loadResArray(url: string[]): void;
		static loadResArray(url: string[], type: typeof cc.Asset[]): void;
		static loadResDir(url: string, type: typeof cc.Asset, progressCallback: (completedCount: number, totalCount: number, item: any) => void, completeCallback: ((error: Error, resource: any[], urls: string[]) => void) | null): void;
		static loadResDir(url: string, type: typeof cc.Asset, completeCallback: (error: Error, resource: any[], urls: string[]) => void): void;
		static loadResDir(url: string, type: typeof cc.Asset): void;
		static loadResDir(url: string, progressCallback: (completedCount: number, totalCount: number, item: any) => void, completeCallback: ((error: Error, resource: any[], urls: string[]) => void) | null): void;
		static loadResDir(url: string, completeCallback: (error: Error, resource: any[], urls: string[]) => void): void;
		static loadResDir(url: string): void;
		static getRes(url: string, type?: Function): any;
		static getDependsRecursively(owner: Asset | string): any[];
		static assetLoader: any;
		static md5Pipe: any;
		static downloader: any;
		static loader: any;
		static addDownloadHandlers(extMap: any): void;
		static addLoadHandlers(extMap: any): void;
		static release(asset: Asset | string | any[]): void;
		static releaseAsset(asset: Asset): void;
		static releaseRes(url: string, type?: Function): void;
		static releaseResDir(): void;
		static releaseAll(): void;
		static removeItem(id: any): boolean;
		static setAutoRelease(assetOrUrlOrUuid: Asset | string, autoRelease: boolean): void;
		static setAutoReleaseRecursively(assetOrUrlOrUuid: Asset | string, autoRelease: boolean): void;
		static isAutoRelease(assetOrUrl: Asset | string): boolean;
	}
	export class url {
		static raw(url: string): string;
	}
	export class LoadingItems {
	}
	export class Asset extends Object {
		url: string;
		loaded: boolean;
		nativeUrl: string;
		refCount: number;
		static preventDeferredLoadDependents: boolean;
		static preventPreloadNativeObject: boolean;
		toString(): string;
		createNode(callback: (error: string, node: any) => void): void;
		addRef(): cc.Asset;
		decRef(): cc.Asset;
	}
	export class macro {
		static DOWNLOAD_MAX_CONCURRENT: number;
		static RAD: number;
		static DEG: number;
		static REPEAT_FOREVER: number;
		static FLT_EPSILON: number;
		static MIN_ZINDEX: number;
		static MAX_ZINDEX: number;
		static ONE: number;
		static ZERO: number;
		static SRC_ALPHA: number;
		static SRC_ALPHA_SATURATE: number;
		static SRC_COLOR: number;
		static DST_ALPHA: number;
		static DST_COLOR: number;
		static ONE_MINUS_SRC_ALPHA: number;
		static ONE_MINUS_SRC_COLOR: number;
		static ONE_MINUS_DST_ALPHA: number;
		static ONE_MINUS_DST_COLOR: number;
		static ONE_MINUS_CONSTANT_ALPHA: number;
		static ONE_MINUS_CONSTANT_COLOR: number;
		static ORIENTATION_PORTRAIT: number;
		static ORIENTATION_LANDSCAPE: number;
		static ORIENTATION_AUTO: number;
		static FIX_ARTIFACTS_BY_STRECHING_TEXEL_TMX: number;
		static DIRECTOR_STATS_POSITION: Vec2;
		static ENABLE_STACKABLE_ACTIONS: number;
		static TOUCH_TIMEOUT: number;
		static BATCH_VERTEX_COUNT: number;
		static ENABLE_TILEDMAP_CULLING: boolean;
		static ENABLE_TRANSPARENT_CANVAS: boolean;
		static ENABLE_WEBGL_ANTIALIAS: boolean;
		static ENABLE_CULLING: boolean;
		static CLEANUP_IMAGE_CACHE: boolean;
		static SHOW_MESH_WIREFRAME: boolean;
		static SHOW_MESH_NORMAL: boolean;
		static ENABLE_MULTI_TOUCH: boolean;
		static ALLOW_IMAGE_BITMAP: boolean;
		static ENABLE_NATIVE_TTF_RENDERER: boolean;
		static SUPPORT_TEXTURE_FORMATS: string[];
	}
	export class Graphics extends RenderComponent {
		lineWidth: number;
		lineJoin: Graphics.LineJoin;
		lineCap: Graphics.LineCap;
		strokeColor: Color;
		fillColor: Color;
		miterLimit: number;
		moveTo(x?: number, y?: number): void;
		lineTo(x?: number, y?: number): void;
		bezierCurveTo(c1x?: number, c1y?: number, c2x?: number, c2y?: number, x?: number, y?: number): void;
		quadraticCurveTo(cx?: number, cy?: number, x?: number, y?: number): void;
		arc(cx?: number, cy?: number, r?: number, startAngle?: number, endAngle?: number, counterclockwise?: boolean): void;
		ellipse(cx?: number, cy?: number, rx?: number, ry?: number): void;
		circle(cx?: number, cy?: number, r?: number): void;
		rect(x?: number, y?: number, w?: number, h?: number): void;
		roundRect(x?: number, y?: number, w?: number, h?: number, r?: number): void;
		fillRect(x?: number, y?: number, w?: number, h?: number): void;
		clear(clean?: boolean): void;
		close(): void;
		stroke(): void;
		fill(): void;
	}
	export class MeshRenderer extends RenderComponent {
		mesh: Mesh;
		receiveShadows: boolean;
		shadowCastingMode: MeshRenderer.ShadowCastingMode;
		enableAutoBatch: boolean;
	}
	export class Mesh extends Asset implements EventTarget {
		subMeshes: InputAssembler[];
		init(vertexFormat: gfx.VertexFormat, vertexCount: number, dynamic?: boolean, index?: boolean): void;
		setVertices(name: string, values: Vec2[] | Vec3[] | Color[] | number[] | Uint8Array | Float32Array): void;
		setIndices(indices: number[] | Uint16Array | Uint8Array, index?: number, dynamic?: boolean): void;
		setPrimitiveType(type: number, index: number): void;
		clear(): void;
		setBoundingBox(min: Vec3, max: Vec3): void;
		copyAttribute(primitiveIndex: number, attributeName: string, buffer: ArrayBuffer, stride: number, offset: number): boolean;
		copyIndices(primitiveIndex: number, outputArray: DataView): boolean;
		hasEventListener(type: string): boolean;
		on<T extends Function>(type: string, callback: T, target?: any, useCapture?: boolean): T;
		off(type: string, callback?: Function, target?: any): void;
		targetOff(target: any): void;
		once(type: string, callback: (arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) => void, target?: any): void;
		dispatchEvent(event: Event): void;
	}
	export class BufferRange {
		offset: number;
		length: number;
	}
	export class VertexFormat {
		data: BufferRange;
		formats: VertexFormat;
		vertexBundleIndices: number[];
		data: BufferRange;
		indexUnit: number;
		topology: number;
	}
	export class constructor {
		setAccelerometerEnabled(isEnable: boolean): void;
		setAccelerometerInterval(interval: number): void;
	}
	export enum VerticalTextAlignment {
		TOP = 0,
		CENTER = 0,
		BOTTOM = 0,
	}
	export class Object {
		name: string;
		isValid: boolean;
		destroy(): boolean;
	}
	export enum Flags {
		DontSave = 0,
		EditorOnly = 0,
		HideInHierarchy = 0,
	}
	export class screen {
		init(): void;
		fullScreen(): boolean;
		requestFullScreen(element: Element, onFullScreenChange: Function, onFullScreenError: Function): void;
		exitFullScreen(): boolean;
		autoFullScreen(element: Element, onFullScreenChange: Function): void;
	}
	export class sys {
		static LANGUAGE_ENGLISH: string;
		static LANGUAGE_CHINESE: string;
		static LANGUAGE_FRENCH: string;
		static LANGUAGE_ITALIAN: string;
		static LANGUAGE_GERMAN: string;
		static LANGUAGE_SPANISH: string;
		static LANGUAGE_DUTCH: string;
		static LANGUAGE_RUSSIAN: string;
		static LANGUAGE_KOREAN: string;
		static LANGUAGE_JAPANESE: string;
		static LANGUAGE_HUNGARIAN: string;
		static LANGUAGE_PORTUGUESE: string;
		static LANGUAGE_ARABIC: string;
		static LANGUAGE_NORWEGIAN: string;
		static LANGUAGE_POLISH: string;
		static LANGUAGE_TURKISH: string;
		static LANGUAGE_UKRAINIAN: string;
		static LANGUAGE_ROMANIAN: string;
		static LANGUAGE_BULGARIAN: string;
		static LANGUAGE_UNKNOWN: string;
		static OS_OPENHARMONY: string;
		static OS_IOS: string;
		static OS_ANDROID: string;
		static OS_WINDOWS: string;
		static OS_MARMALADE: string;
		static OS_LINUX: string;
		static OS_BADA: string;
		static OS_BLACKBERRY: string;
		static OS_OSX: string;
		static OS_WP8: string;
		static OS_WINRT: string;
		static OS_UNKNOWN: string;
		static UNKNOWN: number;
		static WIN32: number;
		static LINUX: number;
		static MACOS: number;
		static ANDROID: number;
		static IPHONE: number;
		static IPAD: number;
		static BLACKBERRY: number;
		static NACL: number;
		static EMSCRIPTEN: number;
		static TIZEN: number;
		static WINRT: number;
		static WP8: number;
		static OPENHARMONY: number;
		static MOBILE_BROWSER: number;
		static DESKTOP_BROWSER: number;
		static EDITOR_PAGE: number;
		static EDITOR_CORE: number;
		static WECHAT_GAME: number;
		static QQ_PLAY: number;
		static FB_PLAYABLE_ADS: number;
		static BAIDU_GAME: number;
		static VIVO_GAME: number;
		static OPPO_GAME: number;
		static HUAWEI_GAME: number;
		static XIAOMI_GAME: number;
		static JKW_GAME: number;
		static ALIPAY_GAME: number;
		static WECHAT_GAME_SUB: number;
		static BAIDU_GAME_SUB: number;
		static QTT_GAME: number;
		static BYTEDANCE_GAME: number;
		static BYTEDANCE_GAME_SUB: number;
		static LINKSURE: number;
		static TAOBAO: number;
		static TAOBAO_MINIGAME: number;
		static BROWSER_TYPE_WECHAT: string;
		static BROWSER_TYPE_ANDROID: string;
		static BROWSER_TYPE_IE: string;
		static BROWSER_TYPE_EDGE: string;
		static BROWSER_TYPE_QQ: string;
		static BROWSER_TYPE_MOBILE_QQ: string;
		static BROWSER_TYPE_UC: string;
		static BROWSER_TYPE_UCBS: string;
		static BROWSER_TYPE_360: string;
		static BROWSER_TYPE_BAIDU_APP: string;
		static BROWSER_TYPE_BAIDU: string;
		static BROWSER_TYPE_MAXTHON: string;
		static BROWSER_TYPE_OPERA: string;
		static BROWSER_TYPE_OUPENG: string;
		static BROWSER_TYPE_MIUI: string;
		static BROWSER_TYPE_FIREFOX: string;
		static BROWSER_TYPE_SAFARI: string;
		static BROWSER_TYPE_CHROME: string;
		static BROWSER_TYPE_LIEBAO: string;
		static BROWSER_TYPE_QZONE: string;
		static BROWSER_TYPE_SOUGOU: string;
		static BROWSER_TYPE_HUAWEI: string;
		static BROWSER_TYPE_UNKNOWN: string;
		static isNative: boolean;
		static isBrowser: boolean;
		static glExtension(name: any): boolean;
		static getMaxJointMatrixSize(): void;
		static getSafeAreaRect(): Rect;
		static isMobile: boolean;
		static platform: number;
		static languageCode: string;
		static language: string;
		static os: string;
		static osVersion: string;
		static osMainVersion: number;
		static browserType: string | void;
		static browserVersion: string | void;
		static windowPixelResolution: Size;
		static localStorage: any;
		static capabilities: any;
		static getNetworkType(): sys.NetworkType;
		static getBatteryLevel(): number;
		static garbageCollect(): void;
		static restartVM(): void;
		static isObjectValid(obj: any): boolean;
		static dump(): void;
		static openURL(url: string): void;
		static now(): number;
	}
	export class visibleRect {
		static init(visibleRect: Rect): void;
		static topLeft: Vec2;
		static topRight: Vec2;
		static top: Vec2;
		static bottomLeft: Vec2;
		static bottomRight: Vec2;
		static bottom: Vec2;
		static center: Vec2;
		static left: Vec2;
		static right: Vec2;
		static width: number;
		static height: number;
	}
	export class View extends EventTarget {
		setTargetDensityDPI(densityDPI: string): void;
		getTargetDensityDPI(): string;
		resizeWithBrowserSize(enabled: boolean): void;
		setResizeCallback(callback: Function | void): void;
		setOrientation(orientation: number): void;
		adjustViewportMeta(enabled: boolean): void;
		enableRetina(enabled: boolean): void;
		isRetinaEnabled(): boolean;
		enableAntiAlias(enabled: boolean): void;
		isAntiAliasEnabled(): boolean;
		enableAutoFullScreen(enabled: boolean): void;
		isAutoFullScreenEnabled(): boolean;
		getCanvasSize(): Size;
		getFrameSize(): Size;
		setFrameSize(width: number, height: number): void;
		getVisibleSize(): Size;
		getVisibleSizeInPixel(): Size;
		getVisibleOrigin(): Vec2;
		getVisibleOriginInPixel(): Vec2;
		getResolutionPolicy(): ResolutionPolicy;
		setResolutionPolicy(resolutionPolicy: ResolutionPolicy | number): void;
		setDesignResolutionSize(width: number, height: number, resolutionPolicy: ResolutionPolicy | number): void;
		getDesignResolutionSize(): Size;
		setRealPixelResolution(width: number, height: number, resolutionPolicy: ResolutionPolicy | number): void;
		setViewportInPoints(x: number, y: number, w: number, h: number): void;
		setScissorInPoints(x: number, y: number, w: number, h: number): void;
		isScissorEnabled(): boolean;
		getScissorRect(): Rect;
		getViewportRect(): Rect;
		getScaleX(): number;
		getScaleY(): number;
		getDevicePixelRatio(): number;
		convertToLocationInView(tx: number, ty: number, relatedPos: any): Vec2;
	}
	export class ContainerStrategy {
		preApply(view: View): void;
		apply(view: View, designedResolution: Size): void;
		postApply(view: View): void;
	}
	export class ContentStrategy {
		preApply(view: View): void;
		apply(view: View, designedResolution: Size): any;
		postApply(view: View): void;
	}
	export class EqualToFrame extends ContainerStrategy {
	}
	export class ProportionalToFrame extends ContainerStrategy {
	}
	export class EqualToWindow extends EqualToFrame {
	}
	export class ProportionalToWindow extends ProportionalToFrame {
	}
	export class OriginalContainer extends ContainerStrategy {
	}
	export class ResolutionPolicy {
		constructor(containerStg: ContainerStrategy, contentStg: ContentStrategy);
		preApply(view: View): void;
		apply(view: View, designedResolution: Size): any;
		postApply(view: View): void;
		setContainerStrategy(containerStg: ContainerStrategy): void;
		setContentStrategy(contentStg: ContentStrategy): void;
		static EXACT_FIT: number;
		static NO_BORDER: number;
		static SHOW_ALL: number;
		static FIXED_HEIGHT: number;
		static FIXED_WIDTH: number;
		static UNKNOWN: number;
	}
	export class CallbacksInvoker {
		hasEventListener(key: string, callback?: Function, target?: any): boolean;
		removeAll(keyOrTarget: string | any): void;
		off(key: string, callback: Function, target?: any): void;
		emit(key: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any): void;
	}
	export class Details {
		uuidObjList: any[];
		uuidPropList: (String | Number)[];
		uuidList: string[];
		init(data: any): void;
		reset(): void;
		push(obj: any, propName: string, uuid: string): void;
		uuidList: string[];
		uuidObjList: any[];
		uuidPropList: string[];
		reset(): void;
		push(obj: any, propName: string, uuid: string): void;
	}
	export class renderer {
		static renderEngine: any;
		static drawCalls: number;
	}
	export class WorldManifold {
		points: Vec2[];
		normal: Vec2;
	}
	export class ManifoldPoint {
		localPoint: Vec2;
		normalImpulse: number;
		tangentImpulse: number;
	}
	export class Manifold {
		type: number;
		localPoint: Vec2;
		localNormal: Vec2;
		points: ManifoldPoint[];
	}
	export class PhysicsImpulse {
		normalImpulses: any;
		tangentImpulses: any;
	}
	export class PhysicsContact {
		getWorldManifold(): WorldManifold;
		getManifold(): Manifold;
		getImpulse(): PhysicsImpulse;
		colliderA: Collider;
		colliderB: Collider;
		disabled: boolean;
		disabledOnce: boolean;
		isTouching(): boolean;
		setTangentSpeed(tangentSpeed: number): void;
		getTangentSpeed(): number;
		setFriction(friction: number): void;
		getFriction(): number;
		resetFriction(): void;
		setRestitution(restitution: number): void;
		getRestitution(): number;
		resetRestitution(): void;
	}
	export enum RigidBodyType {
		Static = 0,
		Kinematic = 0,
		Dynamic = 0,
		Animated = 0,
	}
	export enum RayCastType {
		Closest = 0,
		Any = 0,
		AllClosest = 0,
		All = 0,
	}
	export class PhysicsManager implements EventTarget {
		static PTM_RATIO: number;
		static VELOCITY_ITERATIONS: number;
		static POSITION_ITERATIONS: number;
		static FIXED_TIME_STEP: number;
		static MAX_ACCUMULATOR: number;
		enabledAccumulator: boolean;
		testPoint(point: Vec2): PhysicsCollider;
		testAABB(rect: Rect): PhysicsCollider[];
		rayCast(p1: Vec2, p2: Vec2, type: RayCastType): PhysicsRayCastResult[];
		enabled: boolean;
		debugDrawFlags: number;
		gravity: Vec2;
		hasEventListener(type: string): boolean;
		on<T extends Function>(type: string, callback: T, target?: any, useCapture?: boolean): T;
		off(type: string, callback?: Function, target?: any): void;
		targetOff(target: any): void;
		once(type: string, callback: (arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) => void, target?: any): void;
		dispatchEvent(event: Event): void;
		clear(): void;
	}
	export class PhysicsRayCastResult {
		collider: PhysicsCollider;
		point: Vec2;
		normal: Vec2;
		fraction: number;
	}
	export class RigidBody extends Component {
		enabledContactListener: boolean;
		onBeginContact(contact: PhysicsContact, selfCollider: PhysicsCollider, otherCollider: PhysicsCollider): void;
		onEndContact(contact: PhysicsContact, selfCollider: PhysicsCollider, otherCollider: PhysicsCollider): void;
		onPreSolve(contact: PhysicsContact, selfCollider: PhysicsCollider, otherCollider: PhysicsCollider): void;
		onPostSolve(contact: PhysicsContact, selfCollider: PhysicsCollider, otherCollider: PhysicsCollider): void;
		bullet: boolean;
		type: RigidBodyType;
		allowSleep: boolean;
		gravityScale: number;
		linearDamping: number;
		angularDamping: number;
		linearVelocity: Vec2;
		angularVelocity: number;
		fixedRotation: boolean;
		awake: boolean;
		awakeOnLoad: boolean;
		active: boolean;
		getLocalPoint(worldPoint: Vec2, out: Vec2): Vec2;
		getWorldPoint(localPoint: Vec2, out: Vec2): Vec2;
		getWorldVector(localVector: Vec2, out: Vec2): Vec2;
		getLocalVector(worldVector: Vec2, out: Vec2): Vec2;
		getWorldPosition(out: Vec2): Vec2;
		getWorldRotation(): number;
		getLocalCenter(): Vec2;
		getWorldCenter(): Vec2;
		getLinearVelocityFromWorldPoint(worldPoint: Vec2, out: Vec2): Vec2;
		getMass(): number;
		getInertia(): number;
		getJointList(): Joint[];
		applyForce(force: Vec2, point: Vec2, wake: boolean): void;
		applyForceToCenter(force: Vec2, wake: boolean): void;
		applyTorque(torque: number, wake: boolean): void;
		applyLinearImpulse(impulse: Vec2, point: Vec2, wake: boolean): void;
		applyAngularImpulse(impulse: number, wake: boolean): void;
		syncPosition(enableAnimated: boolean): void;
		syncRotation(enableAnimated: boolean): void;
	}
	export class AudioClip extends Asset implements EventTarget {
		duration: number;
		hasEventListener(type: string): boolean;
		on<T extends Function>(type: string, callback: T, target?: any, useCapture?: boolean): T;
		off(type: string, callback?: Function, target?: any): void;
		targetOff(target: any): void;
		once(type: string, callback: (arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) => void, target?: any): void;
		dispatchEvent(event: Event): void;
		clear(): void;
	}
	export class BitmapFont extends Font {
	}
	export class BufferAsset extends Asset {
	}
	export class Font extends Asset {
	}
	export class JsonAsset extends Asset {
		json: any;
	}
	export class LabelAtlas extends BitmapFont {
	}
	export class RenderTexture extends Texture2D {
		initWithSize(width?: number, height?: number, depthStencilFormat?: number): void;
		readPixels(data?: Uint8Array, x?: number, y?: number, w?: number, h?: number): Uint8Array;
	}
	export class Prefab extends Asset {
		data: Node;
		optimizationPolicy: Prefab.OptimizationPolicy;
		asyncLoadAssets: boolean;
		readonly: boolean;
		compileCreateFunction(): void;
	}
	export class SceneAsset extends Asset {
		scene: Scene;
		asyncLoadAssets: boolean;
	}
	export class _Script extends Asset {
	}
	export class _JavaScript extends Asset {
	}
	export class TypeScript extends Asset {
	}
	export class SpriteAtlas extends Asset {
		getTexture(): Texture2D;
		getSpriteFrame(key: string): SpriteFrame;
		getSpriteFrames(): SpriteFrame[];
	}
	export class TTFFont extends Font {
	}
	export class SpriteFrame extends Asset implements EventTarget {
		insetTop: number;
		insetBottom: number;
		insetLeft: number;
		insetRight: number;
		constructor(filename?: string | Texture2D, rect?: Rect, rotated?: boolean, offset?: Vec2, originalSize?: Size);
		textureLoaded(): boolean;
		isRotated(): boolean;
		setRotated(bRotated: boolean): void;
		isFlipX(): boolean;
		isFlipY(): boolean;
		setFlipX(flipX: boolean): void;
		setFlipY(flipY: boolean): void;
		getRect(): Rect;
		setRect(rect: Rect): void;
		getOriginalSize(): Size;
		setOriginalSize(size: Size): void;
		getTexture(): Texture2D;
		getOffset(): Vec2;
		setOffset(offsets: Vec2): void;
		clone(): SpriteFrame;
		setTexture(texture: Texture2D, rect?: Rect, rotated?: boolean, offset?: Vec2, originalSize?: Size): boolean;
		ensureLoadTexture(): void;
		clearTexture(): void;
		hasEventListener(type: string): boolean;
		on<T extends Function>(type: string, callback: T, target?: any, useCapture?: boolean): T;
		off(type: string, callback?: Function, target?: any): void;
		targetOff(target: any): void;
		once(type: string, callback: (arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) => void, target?: any): void;
		dispatchEvent(event: Event): void;
		clear(): void;
	}
	export class TextAsset extends Asset {
		text: string;
	}
	export class Texture2D extends Asset implements EventTarget {
		genMipmaps: boolean;
		packable: boolean;
		loaded: boolean;
		width: number;
		height: number;
		getImpl(): void;
		update(options: { image: DOMImageElement; genMipmaps: boolean; format: Texture2D.PixelFormat; minFilter: Texture2D.Filter; magFilter: Texture2D.Filter; wrapS: WrapMode; wrapT: WrapMode; premultiplyAlpha: boolean; }): void;
		initWithElement(element: HTMLImageElement | HTMLCanvasElement): void;
		initWithData(data: ArrayBufferView, pixelFormat: number, pixelsWidth: number, pixelsHeight: number): boolean;
		getHtmlElementObj(): HTMLImageElement;
		destroy(): boolean;
		getPixelFormat(): number;
		hasPremultipliedAlpha(): boolean;
		handleLoadedTexture(premultiplied?: boolean): void;
		description(): string;
		releaseTexture(): void;
		setWrapMode(wrapS: Texture2D.WrapMode, wrapT: Texture2D.WrapMode): void;
		setFilters(minFilter: Texture2D.Filter, magFilter: Texture2D.Filter): void;
		setFlipY(flipY: boolean): void;
		setPremultiplyAlpha(premultiply: boolean): void;
		hasEventListener(type: string): boolean;
		on<T extends Function>(type: string, callback: T, target?: any, useCapture?: boolean): T;
		off(type: string, callback?: Function, target?: any): void;
		targetOff(target: any): void;
		once(type: string, callback: (arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) => void, target?: any): void;
		dispatchEvent(event: Event): void;
		clear(): void;
	}
	export class VideoClip extends Asset implements EventTarget {
		hasEventListener(type: string): boolean;
		on<T extends Function>(type: string, callback: T, target?: any, useCapture?: boolean): T;
		off(type: string, callback?: Function, target?: any): void;
		targetOff(target: any): void;
		once(type: string, callback: (arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) => void, target?: any): void;
		dispatchEvent(event: Event): void;
		clear(): void;
	}
	export class Color extends ValueType {
		static WHITE: Color;
		static BLACK: Color;
		static TRANSPARENT: Color;
		static GRAY: Color;
		static RED: Color;
		static GREEN: Color;
		static BLUE: Color;
		static YELLOW: Color;
		static ORANGE: Color;
		static CYAN: Color;
		static MAGENTA: Color;
		static copy(out: Color, a: Color): Color;
		static clone(a: Color): Color;
		static set(out: Color, r?: number, g?: number, b?: number, a?: number): Color;
		static fromHex(out: Color, hex: number): Color;
		static fromHEX(out: Color, hex: string): Color;
		static add(out: Color, a: Color, b: Color): Color;
		static subtract(out: Color, a: Color, b: Color): Color;
		static multiply(out: Color, a: Color, b: Color): Color;
		static divide(out: Color, a: Color, b: Color): Color;
		static scale(out: Color, a: Color, b: number): Color;
		static lerp(out: Color, a: Color, b: Color, t: number): Color;
		static toArray<Out extends IWritableArrayLike<number>>(out: Out, a: IColorLike, ofs?: number): Out;
		static fromArray<Out extends IColorLike>(arr: IWritableArrayLike<number>, out: Out, ofs?: number): Out;
		static premultiplyAlpha<Out extends IColorLike>(out: Out, a: IColorLike);
		constructor(r?: number, g?: number, b?: number, a?: number);
		clone(): Color;
		equals(other: Color): boolean;
		lerp(to: Color, ratio: number, out?: Color): Color;
		toString(): string;
		r: number;
		g: number;
		b: number;
		a: number;
		getR(): number;
		setR(red: number): Color;
		getG(): number;
		setG(green: number): Color;
		getB(): number;
		setB(blue: number): Color;
		getA(): number;
		setA(alpha: number): Color;
		toCSS(opt?: string): string;
		fromHEX(hexString: string): Color;
		toHEX(fmt?: string): string;
		toRGBValue(): number;
		fromHSV(h: number, s: number, v: number): Color;
		toHSV(): any;
		set(color: Color): Color;
		multiply(other: Color): Color;
	}
	export class Mat3 extends ValueType {
		static IDENTITY: Mat3;
		static toArray<Out extends IWritableArrayLike<number>>(out: Out, mat: IMat3Like, ofs?: number): Out;
		static fromArray<Out extends IMat3Like>(out: Out, arr: IWritableArrayLike<number>, ofs?: number): Out;
		m: Float64Array | Float32Array;
		constructor(m00?: number | Float32Array, m01?: number, m02?: number, m03?: number, m04?: number, m05?: number, m06?: number, m07?: number, m08?: number);
	}
	export class Mat4 extends ValueType {
		mul(other: Mat4, out?: Mat4): Mat4;
		mulScalar(number: number, out?: Mat4): Mat4;
		sub(other: Mat4, out?: Mat4): Mat4;
		static IDENTITY: Mat4;
		static clone<Out extends IMat4Like>(a: Out): Mat4;
		static copy<Out extends IMat4Like>(out: Out, a: Out): Out;
		static identity<Out extends IMat4Like>(out: Out): Out;
		static transpose<Out extends IMat4Like>(out: Out, a: Out): Out;
		static invert<Out extends IMat4Like>(out: Out, a: Out): Out;
		static determinant<Out extends IMat4Like>(a: Out): number;
		static multiply<Out extends IMat4Like>(out: Out, a: Out, b: Out): Out;
		static transform<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, a: Out, v: VecLike): Out;
		static translate<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, a: Out, v: VecLike): Out;
		static scale<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, a: Out, v: VecLike): Out;
		static rotate<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, a: Out, rad: number, axis: VecLike): Out;
		static rotateX<Out extends IMat4Like>(out: Out, a: Out, rad: number): Out;
		static rotateY<Out extends IMat4Like>(out: Out, a: Out, rad: number): Out;
		static rotateZ<Out extends IMat4Like>(out: Out, a: Out, rad: number): Out;
		static fromTranslation<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, v: VecLike): Out;
		static fromScaling<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, v: VecLike): Out;
		static fromRotation<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, rad: number, axis: VecLike): Out;
		static fromXRotation<Out extends IMat4Like>(out: Out, rad: number): Out;
		static fromYRotation<Out extends IMat4Like>(out: Out, rad: number): Out;
		static fromZRotation<Out extends IMat4Like>(out: Out, rad: number): Out;
		static fromRT<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, q: Quat, v: VecLike): Out;
		static getTranslation<Out extends IMat4Like, VecLike extends IVec3Like>(out: VecLike, mat: Out): VecLike;
		static getScaling<Out extends IMat4Like, VecLike extends IVec3Like>(out: VecLike, mat: Out): VecLike;
		static getRotation<Out extends IMat4Like>(out: Quat, mat: Out): Quat;
		static toRTS<Out extends IMat4Like, VecLike extends IVec3Like>(mat: Out, q: Quat, v: VecLike, s: VecLike): void;
		static fromRTS<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, q: Quat, v: VecLike, s: VecLike): Out;
		static fromRTSOrigin<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, q: Quat, v: VecLike, s: VecLike, o: VecLike): Out;
		static fromQuat<Out extends IMat4Like>(out: Out, q: Quat): Out;
		static frustum<Out extends IMat4Like>(out: Out, left: number, right: number, bottom: number, top: number, near: number, far: number): Out;
		static perspective<Out extends IMat4Like>(out: Out, fovy: number, aspect: number, near: number, far: number): Out;
		static ortho<Out extends IMat4Like>(out: Out, left: number, right: number, bottom: number, top: number, near: number, far: number): Out;
		static lookAt<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, eye: VecLike, center: VecLike, up: VecLike): Out;
		static inverseTranspose<Out extends IMat4Like>(out: Out, a: Out): Out;
		static add<Out extends IMat4Like>(out: Out, a: Out, b: Out): Out;
		static subtract<Out extends IMat4Like>(out: Out, a: Out, b: Out): Out;
		static multiplyScalar<Out extends IMat4Like>(out: Out, a: Out, b: number): Out;
		static multiplyScalarAndAdd<Out extends IMat4Like>(out: Out, a: Out, b: Out, scale: number): Out;
		static strictEquals<Out extends IMat4Like>(a: Out, b: Out): boolean;
		static equals<Out extends IMat4Like>(a: Out, b: Out, epsilon?: number): boolean;
		static toArray<Out extends IWritableArrayLike<number>>(out: Out, mat: IMat4Like, ofs?: number): Out;
		static fromArray<Out extends IMat4Like>(out: Out, arr: IWritableArrayLike<number>, ofs?: number): Out;
		m: Float64Array | Float32Array;
		constructor(m00?: number, m01?: number, m02?: number, m03?: number, m10?: number, m11?: number, m12?: number, m13?: number, m20?: number, m21?: number, m22?: number, m23?: number, m30?: number, m31?: number, m32?: number, m33?: number);
		clone(): Mat4;
		set(srcObj: Mat4): Mat4;
		equals(other: Mat4): boolean;
		fuzzyEquals(other: Mat4): boolean;
		toString(): string;
		identity(): Mat4;
		transpose(out?: Mat4): Mat4;
		invert(out?: Mat4): Mat4;
		adjoint(out?: Mat4): Mat4;
		determinant(): number;
		add(other: Mat4, out?: Mat4): Mat4;
		subtract(other: Mat4): Mat4;
		multiply(other: Mat4): Mat4;
		multiplyScalar(number: number): Mat4;
		translate(v: Vec3, out?: Mat4): Mat4;
		scale(v: Vec3, out?: Mat4): Mat4;
		rotate(rad: number, axis: Vec3, out?: Mat4): Mat4;
		getTranslation(out: Vec3): Vec3;
		getScale(out: Vec3): Vec3;
		getRotation(out: Quat): Quat;
		fromRTS(q: Quat, v: Vec3, s: Vec3): Mat4;
		fromQuat(q: Quat): Mat4;
	}
	export class Quat extends ValueType {
		constructor(x?: number, y?: number, z?: number, w?: number);
		mul(other: Quat, out?: Quat): Quat;
		static clone<Out extends IQuatLike>(a: Out): Quat;
		static copy<Out extends IQuatLike, QuatLike extends IQuatLike>(out: Out, a: QuatLike): Out;
		static set<Out extends IQuatLike>(out: Out, x: number, y: number, z: number, w: number): Out;
		static identity<Out extends IQuatLike>(out: Out): Out;
		static rotationTo<Out extends IQuatLike, VecLike extends IVec3Like>(out: Out, a: VecLike, b: VecLike): Out;
		static getAxisAngle<Out extends IQuatLike, VecLike extends IVec3Like>(outAxis: VecLike, q: Out): number;
		static multiply<Out extends IQuatLike, QuatLike_1 extends IQuatLike, QuatLike_2 extends IQuatLike>(out: Out, a: QuatLike_1, b: QuatLike_2): Out;
		static multiplyScalar<Out extends IQuatLike>(out: Out, a: Out, b: number): Out;
		static scaleAndAdd<Out extends IQuatLike>(out: Out, a: Out, b: Out, scale: number): Out;
		static rotateX<Out extends IQuatLike>(out: Out, a: Out, rad: number): Out;
		static rotateY<Out extends IQuatLike>(out: Out, a: Out, rad: number): Out;
		static rotateZ<Out extends IQuatLike>(out: Out, a: Out, rad: number): Out;
		static rotateAround<Out extends IQuatLike, VecLike extends IVec3Like>(out: Out, rot: Out, axis: VecLike, rad: number): Out;
		static rotateAroundLocal<Out extends IQuatLike, VecLike extends IVec3Like>(out: Out, rot: Out, axis: VecLike, rad: number): Out;
		static calculateW<Out extends IQuatLike>(out: Out, a: Out): Out;
		static dot<Out extends IQuatLike>(a: Out, b: Out): number;
		static lerp<Out extends IQuatLike>(out: Out, a: Out, b: Out, t: number): Out;
		static slerp<Out extends IQuatLike, QuatLike_1 extends IQuatLike, QuatLike_2 extends IQuatLike>(out: Out, a: QuatLike_1, b: QuatLike_2, t: number): Out;
		static sqlerp<Out extends IQuatLike>(out: Out, a: Out, b: Out, c: Out, d: Out, t: number): Out;
		static invert<Out extends IQuatLike, QuatLike extends IQuatLike>(out: Out, a: QuatLike): Out;
		static conjugate<Out extends IQuatLike>(out: Out, a: Out): Out;
		static len<Out extends IQuatLike>(a: Out): number;
		static lengthSqr<Out extends IQuatLike>(a: Out): number;
		static normalize<Out extends IQuatLike>(out: Out, a: Out): Out;
		static fromAxes<Out extends IQuatLike, VecLike extends IVec3Like>(out: Out, xAxis: VecLike, yAxis: VecLike, zAxis: VecLike): Out;
		static fromViewUp<Out extends IQuatLike>(out: Out, view: Vec3, up?: Vec3): Out;
		static fromAxisAngle<Out extends IQuatLike, VecLike extends IVec3Like>(out: Out, axis: VecLike, rad: number): Out;
		static fromMat3<Out extends IQuatLike>(out: Out, mat: Mat3): Out;
		static fromEuler<Out extends IQuatLike>(out: Out, x: number, y: number, z: number): Out;
		static toAxisX<Out extends IQuatLike, VecLike extends IVec3Like>(out: VecLike, q: Out): VecLike;
		static toAxisY<Out extends IQuatLike, VecLike extends IVec3Like>(out: VecLike, q: Out): VecLike;
		static toAxisZ<Out extends IQuatLike, VecLike extends IVec3Like>(out: VecLike, q: Out): VecLike;
		static toEuler<Out extends IVec3Like>(out: Out, q: IQuatLike, outerZ?: boolean): Out;
		static strictEquals<Out extends IQuatLike>(a: Out, b: Out): boolean;
		static equals<Out extends IQuatLike>(a: Out, b: Out, epsilon?: number): boolean;
		static toArray<Out extends IWritableArrayLike<number>>(out: Out, q: IQuatLike, ofs?: number): Out;
		static fromArray<Out extends IQuatLike>(out: Out, arr: IWritableArrayLike<number>, ofs?: number): Out;
		x: number;
		y: number;
		z: number;
		w: number;
		clone(): Quat;
		set(newValue: Quat): Quat;
		equals(other: Quat): boolean;
		toEuler(out: Vec3): Vec3;
		fromEuler(euler: Vec3): Quat;
		lerp(to: Quat, ratio: number, out?: Quat): Quat;
		multiply(other: Quat): Quat;
		rotateAround(rot: Quat, axis: Vec3, rad: number, out?: Quat): Quat;
	}
	export class Rect extends ValueType {
		constructor(x?: number, y?: number, w?: number, h?: number);
		static fromMinMax(v1: Vec2, v2: Vec2): Rect;
		x: number;
		y: number;
		width: number;
		height: number;
		clone(): Rect;
		equals(other: Rect): boolean;
		lerp(to: Rect, ratio: number, out?: Rect): Rect;
		intersects(rect: Rect): boolean;
		intersection(out: Rect, rectB: Rect): Rect;
		contains(point: Vec2): boolean;
		containsRect(rect: Rect): boolean;
		union(out: Rect, rectB: Rect): Rect;
		transformMat4(out: Rect, mat: Mat4): void;
		toString(): string;
		xMin: number;
		yMin: number;
		xMax: number;
		yMax: number;
		center: Vec2;
		origin: Vec2;
		size: Size;
	}
	export class Size {
		constructor(width: number | Size, height?: number);
		static ZERO: Size;
		width: number;
		height: number;
		clone(): Size;
		equals(other: Size): boolean;
		lerp(to: Rect, ratio: number, out?: Size): Size;
		toString(): string;
	}
	export class ValueType {
		clone(): ValueType;
		equals(other: ValueType): boolean;
		lerp(to: ValueType, ratio: number): ValueType;
		set(source: ValueType): void;
		toString(): string;
	}
	export class Vec2 extends ValueType {
		mag(): number;
		magSqr(): number;
		subSelf(vector: Vec2): Vec2;
		sub(vector: Vec2, out?: Vec2): Vec2;
		mulSelf(num: number): Vec2;
		mul(num: number, out?: Vec2): Vec2;
		divSelf(num: number): Vec2;
		div(num: number, out?: Vec2): Vec2;
		scaleSelf(vector: Vec2): Vec2;
		scale(vector: Vec2, out?: Vec2): Vec2;
		negSelf(): Vec2;
		neg(out?: Vec2): Vec2;
		static ONE: Vec2;
		static ZERO: Vec2;
		static ZERO_R: Vec2;
		static UP: Vec2;
		static UP_R: Vec2;
		static RIGHT: Vec2;
		static RIGHT_R: Vec2;
		static clone<Out extends IVec2Like>(a: Out): Vec2;
		static copy<Out extends IVec2Like>(out: Out, a: Out): Out;
		static set<Out extends IVec2Like>(out: Out, x: number, y: number): Out;
		static add<Out extends IVec2Like>(out: Out, a: Out, b: Out): Out;
		static subtract<Out extends IVec2Like>(out: Out, a: Out, b: Out): Out;
		static multiply<Out extends IVec2Like>(out: Out, a: Out, b: Out): Out;
		static divide<Out extends IVec2Like>(out: Out, a: Out, b: Out): Out;
		static ceil<Out extends IVec2Like>(out: Out, a: Out): Out;
		static floor<Out extends IVec2Like>(out: Out, a: Out): Out;
		static min<Out extends IVec2Like>(out: Out, a: Out, b: Out): Out;
		static max<Out extends IVec2Like>(out: Out, a: Out, b: Out): Out;
		static round<Out extends IVec2Like>(out: Out, a: Out): Out;
		static multiplyScalar<Out extends IVec2Like>(out: Out, a: Out, b: number): Out;
		static scaleAndAdd<Out extends IVec2Like>(out: Out, a: Out, b: Out, scale: number): Out;
		static distance<Out extends IVec2Like>(a: Out, b: Out): number;
		static squaredDistance<Out extends IVec2Like>(a: Out, b: Out): number;
		static len<Out extends IVec2Like>(a: Out): number;
		static lengthSqr<Out extends IVec2Like>(a: Out): number;
		static negate<Out extends IVec2Like>(out: Out, a: Out): Out;
		static inverse<Out extends IVec2Like>(out: Out, a: Out): Out;
		static inverseSafe<Out extends IVec2Like>(out: Out, a: Out): Out;
		static normalize<Out extends IVec2Like, Vec2Like extends IVec2Like>(out: Out, a: Vec2Like): Out;
		static dot<Out extends IVec2Like>(a: Out, b: Out): number;
		static cross<Out extends IVec2Like>(out: Vec2, a: Out, b: Out): Vec2;
		static lerp<Out extends IVec2Like>(out: Out, a: Out, b: Out, t: number): Out;
		static random<Out extends IVec2Like>(out: Out, scale?: number): Out;
		static transformMat3<Out extends IVec2Like, MatLike extends IMat3Like>(out: Out, a: Out, mat: IMat3Like): Out;
		static transformMat4<Out extends IVec2Like, MatLike extends IMat4Like>(out: Out, a: Out, mat: MatLike): Out;
		static strictEquals<Out extends IVec2Like>(a: Out, b: Out): boolean;
		static equals<Out extends IVec2Like>(a: Out, b: Out, epsilon?: number): boolean;
		static angle<Out extends IVec2Like>(a: Out, b: Out): number;
		static toArray<Out extends IWritableArrayLike<number>>(out: Out, v: IVec2Like, ofs?: number): Out;
		static fromArray<Out extends IVec2Like>(out: Out, arr: IWritableArrayLike<number>, ofs?: number): Out;
		x: number;
		y: number;
		constructor(x?: number, y?: number);
		clone(): Vec2;
		set(newValue: Vec2): Vec2;
		equals(other: Vec2): boolean;
		fuzzyEquals(other: Vec2, variance: number): boolean;
		toString(): string;
		lerp(to: Vec2, ratio: number, out?: Vec2): Vec2;
		clampf(min_inclusive: Vec2, max_inclusive: Vec2): Vec2;
		add(vector: Vec2, out?: Vec2): Vec2;
		addSelf(vector: Vec2): Vec2;
		subtract(vector: Vec2): Vec2;
		multiplyScalar(num: number): Vec2;
		multiply(vector: Vec2): Vec2;
		divide(num: number): Vec2;
		negate(): Vec2;
		dot(vector?: Vec2): number;
		cross(vector?: Vec2): number;
		len(): number;
		lengthSqr(): number;
		normalizeSelf(): Vec2;
		normalize(out?: Vec2): Vec2;
		angle(vector: Vec2): number;
		signAngle(vector: Vec2): number;
		rotate(radians: number, out?: Vec2): Vec2;
		rotateSelf(radians: number): Vec2;
		project(vector: Vec2): Vec2;
		transformMat4(m: Mat4, out?: Vec2): Vec2;
		maxAxis(): number;
	}
	export class Vec3 extends ValueType {
		mag(): number;
		magSqr(): number;
		subSelf(vector: Vec3): Vec3;
		sub(vector: Vec3, out?: Vec3): Vec3;
		mulSelf(num: number): Vec3;
		mul(num: number, out?: Vec3): Vec3;
		divSelf(num: number): Vec3;
		div(num: number, out?: Vec3): Vec3;
		scaleSelf(vector: Vec3): Vec3;
		scale(vector: Vec3, out?: Vec3): Vec3;
		negSelf(): Vec3;
		neg(out?: Vec3): Vec3;
		static ONE: Vec3;
		static ZERO: Vec3;
		static UP: Vec3;
		static RIGHT: Vec3;
		static FORWARD: Vec3;
		static zero<Out extends IVec3Like>(out: Out): Out;
		static clone<Out extends IVec3Like>(a: Out): Vec3;
		static copy<Out extends IVec3Like, Vec3Like extends IVec3Like>(out: Out, a: Vec3Like): Out;
		static set<Out extends IVec3Like>(out: Out, x: number, y: number, z: number): Out;
		static add<Out extends IVec3Like>(out: Out, a: Out, b: Out): Out;
		static subtract<Out extends IVec3Like>(out: Out, a: Out, b: Out): Out;
		static multiply<Out extends IVec3Like, Vec3Like_1 extends IVec3Like, Vec3Like_2 extends IVec3Like>(out: Out, a: Vec3Like_1, b: Vec3Like_2): Out;
		static divide<Out extends IVec3Like>(out: Out, a: Out, b: Out): Out;
		static ceil<Out extends IVec3Like>(out: Out, a: Out): Out;
		static floor<Out extends IVec3Like>(out: Out, a: Out): Out;
		static min<Out extends IVec3Like>(out: Out, a: Out, b: Out): Out;
		static max<Out extends IVec3Like>(out: Out, a: Out, b: Out): Out;
		static round<Out extends IVec3Like>(out: Out, a: Out): Out;
		static multiplyScalar<Out extends IVec3Like, Vec3Like extends IVec3Like>(out: Out, a: Vec3Like, b: number): Out;
		static scaleAndAdd<Out extends IVec3Like>(out: Out, a: Out, b: Out, scale: number): Out;
		static distance<Out extends IVec3Like>(a: Out, b: Out): number;
		static squaredDistance<Out extends IVec3Like>(a: Out, b: Out): number;
		static len<Out extends IVec3Like>(a: Out): number;
		static lengthSqr<Out extends IVec3Like>(a: Out): number;
		static negate<Out extends IVec3Like>(out: Out, a: Out): Out;
		static inverse<Out extends IVec3Like>(out: Out, a: Out): Out;
		static inverseSafe<Out extends IVec3Like>(out: Out, a: Out): Out;
		static normalize<Out extends IVec3Like, Vec3Like extends IVec3Like>(out: Out, a: Vec3Like): Out;
		static dot<Out extends IVec3Like>(a: Out, b: Out): number;
		static cross<Out extends IVec3Like, Vec3Like_1 extends IVec3Like, Vec3Like_2 extends IVec3Like>(out: Out, a: Vec3Like_1, b: Vec3Like_2): Out;
		static lerp<Out extends IVec3Like>(out: Out, a: Out, b: Out, t: number): Out;
		static random<Out extends IVec3Like>(out: Out, scale?: number): Out;
		static transformMat4<Out extends IVec3Like, Vec3Like extends IVec3Like, MatLike extends IMat4Like>(out: Out, a: Vec3Like, mat: MatLike): Out;
		static transformMat4Normal<Out extends IVec3Like, MatLike extends IMat4Like>(out: Out, a: Out, mat: MatLike): Out;
		static transformMat3<Out extends IVec3Like, MatLike extends IMat3Like>(out: Out, a: Out, mat: MatLike): Out;
		static transformAffine<Out extends IVec3Like, VecLike extends IVec3Like, MatLike extends IMat4Like>(out: Out, v: VecLike, mat: MatLike): Out;
		static transformQuat<Out extends IVec3Like, VecLike extends IVec3Like, QuatLike extends IQuatLike>(out: Out, a: VecLike, q: QuatLike): Out;
		static transformRTS<Out extends IVec3Like, VecLike extends IVec3Like, QuatLike extends IQuatLike>(out: Out, a: VecLike, r: QuatLike, t: VecLike, s: VecLike): Out;
		static transformInverseRTS<Out extends IVec3Like, VecLike extends IVec3Like, QuatLike extends IQuatLike>(out: Out, a: VecLike, r: QuatLike, t: VecLike, s: VecLike): Out;
		static rotateX<Out extends IVec3Like>(out: Out, v: Out, o: Out, a: number): Out;
		static rotateY<Out extends IVec3Like>(out: Out, v: Out, o: Out, a: number): Out;
		static rotateZ<Out extends IVec3Like>(out: Out, v: Out, o: Out, a: number): Out;
		static strictEquals<Out extends IVec3Like>(a: Out, b: Out): boolean;
		static equals<Out extends IVec3Like>(a: Out, b: Out, epsilon?: number): boolean;
		static angle<Out extends IVec3Like>(a: Out, b: Out): number;
		static projectOnPlane<Out extends IVec3Like>(out: Out, a: Out, n: Out): Out;
		static project<Out extends IVec3Like>(out: Out, a: Out, b: Out): Out;
		static toArray<Out extends IWritableArrayLike<number>>(out: Out, v: IVec3Like, ofs?: number): Out;
		static fromArray<Out extends IVec3Like>(out: Out, arr: IWritableArrayLike<number>, ofs?: number): Out;
		x: number;
		y: number;
		z: number;
		constructor(x?: Vec3 | number, y?: number, z?: number);
		clone(): Vec3;
		set(newValue: Vec3): Vec3;
		equals(other: Vec3): boolean;
		fuzzyEquals(other: Vec3, variance: number): boolean;
		toString(): string;
		lerp(to: Vec3, ratio: number, out?: Vec3): Vec3;
		clampf(min_inclusive: Vec3, max_inclusive: Vec3): Vec3;
		addSelf(vector: Vec3): Vec3;
		add(vector: Vec3, out?: Vec3): Vec3;
		subtract(vector: Vec3): Vec3;
		multiplyScalar(num: number): Vec3;
		multiply(vector: Vec3): Vec3;
		divide(num: number): Vec3;
		negate(): Vec3;
		dot(vector?: Vec3): number;
		cross(vector: Vec3, out?: Vec3): Vec3;
		len(): number;
		lengthSqr(): number;
		normalizeSelf(): Vec3;
		normalize(out?: Vec3): Vec3;
		transformMat4(m: Mat4, out?: Vec3): Vec3;
		maxAxis(): number;
		angle(vector: Vec3): number;
		project(vector: Vec3): Vec3;
		signAngle(vector: Vec3 | Vec2): number;
		rotate(radians: number, out?: Vec3): Vec2;
		rotateSelf(radians: number): Vec3;
	}
	export class Vec4 extends ValueType {
		subSelf(vector: Vec4): Vec4;
		sub(vector: Vec4, out?: Vec4): Vec4;
		mulSelf(num: number): Vec4;
		mul(num: number, out?: Vec4): Vec4;
		divSelf(num: number): Vec4;
		div(num: number, out?: Vec4): Vec4;
		scaleSelf(vector: Vec4): Vec4;
		scale(vector: Vec4, out?: Vec4): Vec4;
		negSelf(): Vec4;
		neg(out?: Vec4): Vec4;
		static clone<Out extends IVec4Like>(a: Out): Vec4;
		static copy<Out extends IVec4Like>(out: Out, a: Out): Out;
		static set<Out extends IVec4Like>(out: Out, x: number, y: number, z: number, w: number): Out;
		static add<Out extends IVec4Like>(out: Out, a: Out, b: Out): Out;
		static subtract<Out extends IVec4Like>(out: Out, a: Out, b: Out): Out;
		static multiply<Out extends IVec4Like>(out: Out, a: Out, b: Out): Out;
		static divide<Out extends IVec4Like>(out: Out, a: Out, b: Out): Out;
		static ceil<Out extends IVec4Like>(out: Out, a: Out): Out;
		static floor<Out extends IVec4Like>(out: Out, a: Out): Out;
		static min<Out extends IVec4Like>(out: Out, a: Out, b: Out): Out;
		static max<Out extends IVec4Like>(out: Out, a: Out, b: Out): Out;
		static round<Out extends IVec4Like>(out: Out, a: Out): Out;
		static multiplyScalar<Out extends IVec4Like>(out: Out, a: Out, b: number): Out;
		static scaleAndAdd<Out extends IVec4Like>(out: Out, a: Out, b: Out, scale: number): Out;
		static distance<Out extends IVec4Like>(a: Out, b: Out): number;
		static squaredDistance<Out extends IVec4Like>(a: Out, b: Out): number;
		static len<Out extends IVec4Like>(a: Out): number;
		static lengthSqr<Out extends IVec4Like>(a: Out): number;
		static negate<Out extends IVec4Like>(out: Out, a: Out): Out;
		static inverse<Out extends IVec4Like>(out: Out, a: Out): Out;
		static inverseSafe<Out extends IVec4Like>(out: Out, a: Out): Out;
		static normalize<Out extends IVec4Like>(out: Out, a: Out): Out;
		static dot<Out extends IVec4Like>(a: Out, b: Out): number;
		static lerp<Out extends IVec4Like>(out: Out, a: Out, b: Out, t: number): Out;
		static random<Out extends IVec4Like>(out: Out, scale?: number): Out;
		static transformMat4<Out extends IVec4Like, MatLike extends IMat4Like>(out: Out, a: Out, mat: MatLike): Out;
		static transformAffine<Out extends IVec4Like, VecLike extends IVec4Like, MatLike extends IMat4Like>(out: Out, v: VecLike, mat: MatLike): Out;
		static transformQuat<Out extends IVec4Like, QuatLike extends IQuatLike>(out: Out, a: Out, q: QuatLike): Out;
		static strictEquals<Out extends IVec4Like>(a: Out, b: Out): boolean;
		static equals<Out extends IVec4Like>(a: Out, b: Out, epsilon?: number): boolean;
		static toArray<Out extends IWritableArrayLike<number>>(out: Out, v: IVec4Like, ofs?: number): Out;
		static fromArray<Out extends IVec4Like>(out: Out, arr: IWritableArrayLike<number>, ofs?: number): Out;
		x: number;
		y: number;
		z: number;
		w: number;
		constructor(x?: number, y?: number, z?: number, w?: number);
		clone(): Vec4;
		set(newValue: Vec4): Vec4;
		equals(other: Vec4, epsilon?: number): boolean;
		equals4f(x: number, y: number, z: number, w: number, epsilon?: number): boolean;
		strictEquals(other: Vec4): boolean;
		strictEquals4f(x: number, y: number, z: number, w: number): boolean;
		lerp(to: Vec4, ratio: number): Vec4;
		toString(): string;
		clampf(minInclusive: Vec4, maxInclusive: Vec4): Vec4;
		addSelf(vector: Vec4): Vec4;
		add(vector: Vec4, out?: Vec4): Vec4;
		subtract(vector: Vec4, out?: Vec4): Vec4;
		multiplyScalar(num: number): Vec4;
		multiply(vector: Vec4): Vec4;
		divide(num: number): Vec4;
		negate(): Vec4;
		dot(vector?: Vec4): number;
		cross(vector: Vec4, out?: Vec4): Vec4;
		len(): number;
		lengthSqr(): number;
		normalizeSelf(): Vec4;
		normalize(out?: Vec4): Vec4;
		transformMat4(m: Mat4, out?: Vec4): Vec4;
		maxAxis(): number;
	}
	export class AffineTransform {
		static create(a: number, b: number, c: number, d: number, tx: number, ty: number): AffineTransform;
		static identity(): AffineTransform;
		static clone(t: AffineTransform): AffineTransform;
		static concat(out: AffineTransform, t1: AffineTransform, t2: AffineTransform): AffineTransform;
		static invert(out: AffineTransform, t: AffineTransform): AffineTransform;
		static invert(out: AffineTransform, mat: Mat4): AffineTransform;
		static transformVec2(out: Vec2, point: Vec2 | number, transOrY: AffineTransform | number, t?: AffineTransform): Vec2;
		static transformSize(out: Size, size: Size, t: AffineTransform): Size;
		static transformRect(out: Rect, rect: Rect, anAffineTransform: AffineTransform): Rect;
		static transformObb(out_bl: Vec2, out_tl: Vec2, out_tr: Vec2, out_br: Vec2, rect: Rect, anAffineTransform: AffineTransform): void;
	}
	export class path {
		static join(): string;
		static extname(pathStr: string): any;
		static mainFileName(fileName: string): string;
		static basename(pathStr: string, extname?: string): any;
		static dirname(pathStr: string): any;
		static changeExtname(pathStr: string, extname?: string): string;
	}
	export class _BaseNode extends Object implements EventTarget {
		name: string;
		uuid: string;
		children: Node[];
		childrenCount: number;
		active: boolean;
		activeInHierarchy: boolean;
		constructor(name?: string);
		parent: Node;
		getParent(): Node;
		setParent(value: Node): void;
		attr(attrs: any): void;
		getChildByUuid(uuid: string): Node;
		getChildByName(name: string): Node;
		insertChild(child: Node, siblingIndex: number): void;
		getSiblingIndex(): number;
		setSiblingIndex(index: number): void;
		walk(prefunc: (target: _BaseNode) => void, postfunc: (target: _BaseNode) => void): void;
		removeFromParent(cleanup?: boolean): void;
		removeChild(child: Node, cleanup?: boolean): void;
		removeAllChildren(cleanup?: boolean): void;
		isChildOf(parent: Node): boolean;
		getComponent<T extends Component>(type: { prototype: T }): T;
		getComponent(className: string): any;
		getComponents<T extends Component>(type: { prototype: T }): T[];
		getComponents(className: string): any[];
		getComponentInChildren<T extends Component>(type: { prototype: T }): T;
		getComponentInChildren(className: string): any;
		getComponentsInChildren<T extends Component>(type: { prototype: T }): T[];
		getComponentsInChildren(className: string): any[];
		addComponent<T extends Component>(type: { new(): T }): T;
		addComponent(className: string): any;
		removeComponent(component: string | Function | Component): void;
		destroyAllChildren(): void;
		hasEventListener(type: string): boolean;
		on<T extends Function>(type: string, callback: T, target?: any, useCapture?: boolean): T;
		off(type: string, callback?: Function, target?: any): void;
		targetOff(target: any): void;
		once(type: string, callback: (arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) => void, target?: any): void;
		dispatchEvent(event: Event): void;
		clear(): void;
	}
	export class BlendFunc {
		srcBlendFactor: macro.BlendFactor;
		dstBlendFactor: macro.BlendFactor;
	}
	export class GraySpriteState {
		normalMaterial: Material;
		grayMaterial: Material;
	}
	export class misc {
		static clampf(value: number, min_inclusive: number, max_inclusive: number): number;
		static clamp01(value: number): number;
		static lerp(a: number, b: number, r: number): number;
		static degreesToRadians(angle: number): number;
		static radiansToDegrees(angle: number): number;
	}
	export class AnimationCurve {
		keyFrames: Keyframe[];
		preWrapMode: WrapMode;
		postWrapMode: WrapMode;
	}
	export class Burst {
		time: number;
		minCount: number;
		maxCount: number;
		repeatCount: number;
		repeatInterval: number;
		count: CurveRange;
	}
	export class ParticleSystem3D extends RenderComponent {
		duration: number;
		capacity: number;
		loop: boolean;
		playOnAwake: boolean;
		prewarm: boolean;
		simulationSpace: ParticleSystem3DAssembler.Space;
		simulationSpeed: number;
		startDelay: CurveRange;
		startLifetime: CurveRange;
		startColor: GradientRange;
		scaleSpace: ParticleSystem3DAssembler.Space;
		startSize: CurveRange;
		startSpeed: CurveRange;
		startRotation: CurveRange;
		gravityModifier: CurveRange;
		rateOverTime: CurveRange;
		rateOverDistance: CurveRange;
		bursts: Burst[];
		shapeModule: ShapeModule;
		colorOverLifetimeModule: ColorOverLifetimeModule;
		sizeOvertimeModule: SizeOvertimeModule;
		velocityOvertimeModule: VelocityOvertimeModule;
		forceOvertimeModule: ForceOvertimeModule;
		limitVelocityOvertimeModule: LimitVelocityOvertimeModule;
		rotationOvertimeModule: RotationOvertimeModule;
		textureAnimationModule: TextureAnimationModule;
		trailModule: TrailModule;
		renderMode: ParticleSystem3DAssembler.RenderMode;
		velocityScale: number;
		lengthScale: number;
		mesh: Mesh;
		particleMaterial: Material;
		trailMaterial: Material;
		play(): void;
		pause(): void;
		stop(): void;
		clear(): void;
	}
	export class MapUtils {
	}
	export class SkeletonAnimation extends Animation {
	}
	export class SkinnedMeshRenderer extends MeshRenderer {
		skeleton: sp.Skeleton;
		rootBone: Node;
	}
	export class SkeletonAnimationClip extends AnimationClip {
	}
	export class EditBox extends Component {
		string: string;
		textLabel: Label;
		placeholderLabel: Label;
		background: Sprite;
		backgroundImage: SpriteFrame;
		returnType: EditBox.KeyboardReturnType;
		inputFlag: EditBox.InputFlag;
		inputMode: EditBox.InputMode;
		fontSize: number;
		lineHeight: number;
		fontColor: Color;
		placeholder: string;
		placeholderFontSize: number;
		placeholderFontColor: Color;
		maxLength: number;
		stayOnTop: boolean;
		tabIndex: number;
		editingDidBegan: Component.EventHandler[];
		textChanged: Component.EventHandler[];
		editingDidEnded: Component.EventHandler[];
		editingReturn: Component.EventHandler[];
		setFocus(): void;
		focus(): void;
		blur(): void;
		isFocused(): void;
		destroy(): boolean;
	}
	export class PhysicsCircleCollider extends PhysicsCollider implements Collider.Circle {
		offset: Vec2;
		radius: number;
	}
	export class PhysicsChainCollider extends PolygonCollider {
		loop: boolean;
		points: Vec2[];
	}
	export class PhysicsBoxCollider extends PhysicsCollider implements Collider.Box {
		offset: Vec2;
		size: Size;
	}
	export class PhysicsCollider extends Collider {
		density: number;
		sensor: boolean;
		friction: number;
		restitution: number;
		body: RigidBody;
		apply(): void;
		getAABB(): void;
	}
	export class PhysicsPolygonCollider extends PhysicsCollider implements Collider.Polygon {
		offset: Vec2;
		points: Vec2[];
	}
	export class DistanceJoint extends Joint {
		distance: number;
		frequency: number;
		dampingRatio: number;
	}
	export class MotorJoint extends Joint {
		anchor: Vec2;
		connectedAnchor: Vec2;
		linearOffset: Vec2;
		angularOffset: number;
		maxForce: number;
		maxTorque: number;
		correctionFactor: number;
	}
	export class Joint extends Component {
		anchor: Vec2;
		connectedAnchor: Vec2;
		connectedBody: RigidBody;
		collideConnected: boolean;
		apply(): void;
		getWorldAnchor(): Vec2;
		getWorldConnectedAnchor(): Vec2;
		getReactionForce(timeStep: number): Vec2;
		getReactionTorque(timeStep: number): number;
	}
	export class MouseJoint extends Joint {
		anchor: Vec2;
		connectedAnchor: Vec2;
		mouseRegion: Node;
		target: Vec2;
		frequency: number;
		0: number;
		maxForce: number;
	}
	export class PrismaticJoint extends Joint {
		localAxisA: Vec2;
		referenceAngle: number;
		enableLimit: boolean;
		enableMotor: boolean;
		lowerLimit: number;
		upperLimit: number;
		maxMotorForce: number;
		motorSpeed: number;
	}
	export class RevoluteJoint extends Joint {
		referenceAngle: number;
		lowerAngle: number;
		upperAngle: number;
		maxMotorTorque: number;
		motorSpeed: number;
		enableLimit: boolean;
		enableMotor: boolean;
		getJointAngle(): number;
	}
	export class RopeJoint extends Joint {
		maxLength: number;
	}
	export class WheelJoint extends Joint {
		localAxisA: Vec2;
		maxMotorTorque: number;
		motorSpeed: number;
		enableMotor: boolean;
		frequency: number;
		dampingRatio: number;
	}
	export class WeldJoint extends Joint {
		referenceAngle: number;
		frequency: number;
		dampingRatio: number;
	}
	export class EffectAsset extends Asset {
	}
	export class Material extends Asset {
		static getBuiltinMaterial(name: string): Material;
		static createWithBuiltin(effectName: string, techniqueIndex?: number): Material;
		static create(effectAsset: EffectAsset, techniqueIndex?: number): Material;
		setProperty(name: string, val: any, passIdx?: number, directly?: boolean): void;
		getProperty(name: string, passIdx: number): any;
		define(name: string, val: boolean | number, passIdx?: number, force?: boolean): void;
		getDefine(name: string, passIdx?: number): boolean;
		setCullMode(cullMode: number, passIdx: number): void;
		setDepth(depthTest: boolean, depthWrite: boolean, depthFunc: number, passIdx: number): void;
		setBlend(enabled: boolean, blendEq: number, blendSrc: number, blendDst: number, blendAlphaEq: number, blendSrcAlpha: number, blendDstAlpha: number, blendColor: number, passIdx: number): void;
		setStencilEnabled(stencilTest: number, passIdx: number): void;
		setStencil(stencilTest: number, stencilFunc: number, stencilRef: number, stencilMask: number, stencilFailOp: number, stencilZFailOp: number, stencilZPassOp: number, stencilWriteMask: number, passIdx: number): void;
	}
	export class MaterialVariant extends Material {
		static createWithBuiltin(materialName: string, owner: cc.RenderComponent): MaterialVariant | null;
		static create(material: Material, owner: cc.RenderComponent): MaterialVariant | null;
	}
	export class TrailModule {
		enable: boolean;
		mode: trailModule.TrailMode;
		lifeTime: CurveRange;
		minParticleDistance: number;
		space: ParticleSystem3DAssembler.Space;
		existWithParticles: boolean;
		textureMode: trailModule.TextureMode;
		widthFromParticle: boolean;
		widthRatio: CurveRange;
		colorFromParticle: boolean;
		colorOverTrail: GradientRange;
		colorOvertime: GradientRange;
	}
	export class ColorOvertimeModule {
		enable: boolean;
	}
	export class CurveRange {
		mode: debug.DebugMode;
		curve: AnimationCurve;
		curveMin: AnimationCurve;
		curveMax: AnimationCurve;
		constant: number;
		constantMin: number;
		constantMax: number;
		multiplier: number;
	}
	export class ForceOvertimeModule {
		enable: boolean;
		space: ParticleSystem3DAssembler.Space;
		x: CurveRange;
		y: CurveRange;
		z: CurveRange;
	}
	export class GradientRange {
		mode: debug.DebugMode;
		color: Color;
		colorMin: Color;
		colorMax: Color;
		gradient: Gradient;
		gradientMin: Gradient;
		gradientMax: Gradient;
	}
	export class ColorKey {
		color: Color;
		time: number;
	}
	export class AlphaKey {
		alpha: number;
		time: number;
	}
	export class Gradient {
		colorKeys: ColorKey[];
		alphaKeys: AlphaKey[];
		mode: debug.DebugMode;
	}
	export class OptimizedCurve {
	}
	export class RotationOvertimeModule {
		enable: boolean;
		separateAxes: boolean;
		x: CurveRange;
		y: CurveRange;
		z: CurveRange;
	}
	export class SizeOvertimeModule {
		enable: boolean;
		separateAxes: boolean;
		size: CurveRange;
		x: CurveRange;
		y: CurveRange;
		z: CurveRange;
	}
	export class TextureAnimationModule {
		enable: boolean;
		mode: debug.DebugMode;
		numTilesX: number;
		numTilesY: number;
		animation: Animation;
		randomRow: boolean;
		rowIndex: number;
		frameOverTime: CurveRange;
		startFrame: CurveRange;
		cycleCount: number;
	}
	export class VelocityOvertimeModule {
		enable: boolean;
		space: ParticleSystem3DAssembler.Space;
		x: CurveRange;
		y: CurveRange;
		z: CurveRange;
		speedModifier: CurveRange;
	}
	export class LimitVelocityOvertimeModule {
		enable: boolean;
		space: ParticleSystem3DAssembler.Space;
		separateAxes: boolean;
		limit: CurveRange;
		limitX: CurveRange;
		limitY: CurveRange;
		limitZ: CurveRange;
		dampen: number;
	}
	export class ShapeModule {
		enable: boolean;
		shapeType: shapeModule.ShapeType;
		emitFrom: shapeModule.EmitLocation;
		radius: number;
		radiusThickness: number;
		angle: number;
		arc: number;
		arcMode: shapeModule.ArcMode;
		arcSpread: number;
		arcSpeed: CurveRange;
		length: number;
		boxThickness: Vec3;
		position: Vec3;
		rotation: Vec3;
		scale: Vec3;
		alignToDirection: boolean;
		randomDirectionAmount: number;
		sphericalDirectionAmount: number;
	}
	export enum ERigidBodyType {
		DYNAMIC = 0,
		STATIC = 0,
		KINEMATIC = 0,
	}
	export class Physics3DManager {
		enabled: boolean;
		allowSleep: boolean;
		maxSubStep: number;
		deltaTime: number;
		useFixedTime: boolean;
		gravity: Vec3;
		defaultMaterial: PhysicsMaterial | void;
		update(deltaTime: number): void;
		raycast(worldRay: geomUtils.Ray, groupIndexOrName: number | string, maxDistance: number, queryTrigger: boolean): PhysicsRayResult[];
		raycastClosest(worldRay: geomUtils.Ray, groupIndexOrName: number | string, maxDistance: number, queryTrigger: boolean): PhysicsRayResult;
	}
	export class ITriggerEvent {
		type: string;
		selfCollider: Collider3D;
		otherCollider: Collider3D;
	}
	export class IContactEquation {
		contactA: Vec3;
		contactB: Vec3;
		normal: Vec3;
	}
	export class ICollisionEvent {
		type: string;
		selfCollider: Collider3D;
		otherCollider: Collider3D;
		contacts: IContactEquation[];
	}
	export class PhysicsRayResult {
		hitPoint: Vec3;
		distance: number;
		collider: Collider3D;
		_assign(hitPoint: Vec3, distance: number, collider: Collider3D): void;
		clone(): void;
	}
	export class IRigidBody {
		rigidBody: RigidBody3D;
		mass: number;
		linearDamping: number;
		angularDamping: number;
		isKinematic: boolean;
		useGravity: boolean;
		fixedRotation: boolean;
		linearFactor: IVec3Like;
		angularFactor: IVec3Like;
		allowSleep: boolean;
		isAwake: boolean;
		isSleepy: boolean;
		isSleeping: boolean;
		wakeUp(): void;
		sleep(): void;
		getLinearVelocity(out: IVec3Like): void;
		setLinearVelocity(out: IVec3Like): void;
		getAngularVelocity(out: IVec3Like): void;
		setAngularVelocity(out: IVec3Like): void;
		applyForce(force: IVec3Like, relativePoint: IVec3Like): void;
		applyLocalForce(force: IVec3Like, relativePoint: IVec3Like): void;
		applyImpulse(force: IVec3Like, relativePoint: IVec3Like): void;
		applyLocalImpulse(force: IVec3Like, relativePoint: IVec3Like): void;
		applyTorque(torque: IVec3Like): void;
		applyLocalTorque(torque: IVec3Like): void;
	}
	export class IVec3Like {
		x: number;
		y: number;
		z: number;
	}
	export class IQuatLike {
		x: number;
		y: number;
		z: number;
		w: number;
	}
	export class IBaseShape {
		collider: Collider3D;
		attachedRigidBody: RigidBody3D | void;
		material: any;
		isTrigger: boolean;
		center: IVec3Like;
	}
	export class IBoxShape {
		size: IVec3Like;
	}
	export class ISphereShape {
		radius: number;
	}
	export class IRaycastOptions {
		groupIndex: number;
		queryTrigger: boolean;
		maxDistance: number;
	}
	export class ICollisionDetect {
		raycastClosest(worldRay: geomUtils.Ray, options: IRaycastOptions, out: PhysicsRayResult): boolean;
		raycast(worldRay: geomUtils.Ray, options: IRaycastOptions, pool: RecyclePool, resultes: PhysicsRayResult[]): boolean;
	}
	export class IPhysicsWorld {
	}
	export class DynamicAtlasManager {
		enabled: boolean;
		maxAtlasCount: number;
		atlasCount: number;
		textureBleeding: boolean;
		textureSize: number;
		maxFrameSize: number;
		minFrameSize: number;
		insertSpriteFrame(spriteFrame: SpriteFrame): any;
		reset(): void;
		showDebug(show: boolean): Node;
	}
	export class PhysicsMaterial extends Asset {
		friction: number;
		restitution: number;
	}
	export class ConstantForce extends Component {
		force: Vec3;
		localForce: Vec3;
		torque: Vec3;
		localTorque: Vec3;
	}
	export class RigidBody3D extends Component {
		allowSleep: boolean;
		mass: number;
		linearDamping: number;
		angularDamping: number;
		isKinematic: boolean;
		useGravity: boolean;
		fixedRotation: boolean;
		linearFactor: Vec3;
		angularFactor: Vec3;
		isAwake: boolean;
		isSleepy: boolean;
		isSleeping: boolean;
		rigidBody: IRigidBody;
		applyForce(force: Vec3, relativePoint: Vec3): void;
		applyLocalForce(force: Vec3, localPoint: Vec3): void;
		applyImpulse(impulse: Vec3, relativePoint: Vec3): void;
		applyLocalImpulse(impulse: Vec3, localPoint: Vec3): void;
		applyTorque(torque: Vec3): void;
		applyLocalTorque(torque: Vec3): void;
		wakeUp(): void;
		sleep(): void;
		getLinearVelocity(out: Vec3): void;
		setLinearVelocity(value: Vec3): void;
		getAngularVelocity(out: Vec3): void;
		setAngularVelocity(value: Vec3): void;
	}
	export class BoxCollider3D extends Collider3D {
		size: Vec3;
		boxShape: IBoxShape;
	}
	export class Collider3D extends Component implements EventTarget {
		sharedMaterial: PhysicsMaterial;
		isTrigger: boolean;
		center: Vec3;
		attachedRigidbody: RigidBody3D | void;
		shape: IBaseShape;
		on<T extends Function>(type: string, callback: T, target?: any, useCapture?: boolean): T;
		off(type: string, callback?: Function, target?: any): void;
		once(type: string, callback: (event: ITriggerEvent | ICollisionEvent) => void, target?: any): void;
		hasEventListener(type: string): boolean;
		targetOff(target: any): void;
		dispatchEvent(event: Event): void;
		clear(): void;
	}
	export class SphereCollider3D extends Collider3D {
		radius: number;
		sphereShape: ISphereShape;
	}
	export namespace audioEngine {
		export enum AudioState {
			ERROR = 0,
			INITIALZING = 0,
			PLAYING = 0,
			PAUSED = 0,
			STOPPED = 0,
		}
	}
	export namespace debug {
		export enum DebugMode {
			NONE = 0,
			INFO = 0,
			WARN = 0,
			ERROR = 0,
			INFO_FOR_WEB_PAGE = 0,
			WARN_FOR_WEB_PAGE = 0,
			ERROR_FOR_WEB_PAGE = 0,
		}
	}
	export namespace Node {
		export enum _LocalDirtyFlag {
			POSITION = 0,
			SCALE = 0,
			ROTATION = 0,
			SKEW = 0,
			TRS = 0,
			RS = 0,
			TRS = 0,
			PHYSICS_POSITION = 0,
			PHYSICS_SCALE = 0,
			PHYSICS_ROTATION = 0,
			PHYSICS_TRS = 0,
			PHYSICS_RS = 0,
			ALL_POSITION = 0,
			ALL_SCALE = 0,
			ALL_ROTATION = 0,
			ALL_TRS = 0,
			ALL = 0,
		}
	}
	export namespace Node {
		export class EventType {
			static TOUCH_START: string;
			static TOUCH_MOVE: string;
			static TOUCH_END: string;
			static TOUCH_CANCEL: string;
			static MOUSE_DOWN: string;
			static MOUSE_MOVE: string;
			static MOUSE_ENTER: string;
			static MOUSE_LEAVE: string;
			static MOUSE_UP: string;
			static MOUSE_WHEEL: string;
			static POSITION_CHANGED: string;
			static ROTATION_CHANGED: string;
			static SCALE_CHANGED: string;
			static SIZE_CHANGED: string;
			static ANCHOR_CHANGED: string;
			static COLOR_CHANGED: string;
			static CHILD_ADDED: string;
			static CHILD_REMOVED: string;
			static CHILD_REORDER: string;
			static GROUP_CHANGED: string;
			static SIBLING_ORDER_CHANGED: string;
		}
	}
	export namespace TiledMap {
		export enum Orientation {
			ORTHO = 0,
			HEX = 0,
			ISO = 0,
		}
	}
	export namespace TiledMap {
		export enum Property {
			NONE = 0,
			MAP = 0,
			LAYER = 0,
			OBJECTGROUP = 0,
			OBJECT = 0,
			TILE = 0,
		}
	}
	export namespace TiledMap {
		export enum TileFlag {
			HORIZONTAL = 0,
			VERTICAL = 0,
			DIAGONAL = 0,
			FLIPPED_ALL = 0,
			FLIPPED_MASK = 0,
		}
	}
	export namespace TiledMap {
		export enum StaggerAxis {
			STAGGERAXIS_X = 0,
			STAGGERAXIS_Y = 0,
		}
	}
	export namespace TiledMap {
		export enum RenderOrder {
			STAGGERINDEX_ODD = 0,
			STAGGERINDEX_EVEN = 0,
			RightDown = 0,
			RightUp = 0,
			LeftDown = 0,
			LeftUp = 0,
		}
	}
	export namespace TiledMap {
		export enum TMXObjectType {
			RECT = 0,
			ELLIPSE = 0,
			POLYGON = 0,
			POLYLINE = 0,
			IMAGE = 0,
			TEXT = 0,
		}
	}
	export namespace ParticleSystem {
		export enum EmitterMode {
			GRAVITY = 0,
			RADIUS = 0,
		}
	}
	export namespace ParticleSystem {
		export enum PositionType {
			FREE = 0,
			RELATIVE = 0,
			GROUPED = 0,
		}
	}
	export namespace WebView {
		export enum EventType {
			LOADED = 0,
			LOADING = 0,
			ERROR = 0,
		}
	}
	export namespace VideoPlayer {
		export enum EventType {
			PLAYING = 0,
			PAUSED = 0,
			STOPPED = 0,
			COMPLETED = 0,
			META_LOADED = 0,
			CLICKED = 0,
			READY_TO_PLAY = 0,
		}
	}
	export namespace VideoPlayer {
		export enum ResourceType {
			REMOTE = 0,
			LOCAL = 0,
		}
	}
	export namespace Light {
		export enum Type {
			DIRECTIONAL = 0,
			POINT = 0,
			SPOT = 0,
			AMBIENT = 0,
		}
	}
	export namespace Light {
		export enum ShadowType {
			NONE = 0,
			HARD = 0,
			SOFT_PCF3X3 = 0,
			SOFT_PCF5X5 = 0,
		}
	}
	export namespace Camera {
		export enum ClearFlags {
			COLOR = 0,
			DEPTH = 0,
			STENCIL = 0,
		}
	}
	export namespace Collider {
		export class Box {
			offset: Vec2;
			size: Size;
		}
	}
	export namespace Collider {
		export class Circle {
			offset: Vec2;
			radius: number;
		}
	}
	export namespace Collider {
		export class Polygon {
			offset: Vec2;
			points: Vec2[];
		}
	}
	export namespace Animation {
		export class EventType {
			static PLAY: string;
			static STOP: string;
			static PAUSE: string;
			static RESUME: string;
			static LASTFRAME: string;
			static FINISHED: string;
		}
	}
	export namespace Button {
		export enum Transition {
			NONE = 0,
			COLOR = 0,
			SPRITE = 0,
			SCALE = 0,
		}
	}
	export namespace Component {
		export class EventHandler {
			target: Node;
			component: string;
			handler: string;
			customEventData: string;
			static emitEvents(events: EventHandler[], ...params: any[]): void;
			emit(params: any[]): void;
		}
	}
	export namespace Label {
		export enum HorizontalAlign {
			LEFT = 0,
			CENTER = 0,
			RIGHT = 0,
		}
	}
	export namespace Label {
		export enum VerticalAlign {
			TOP = 0,
			CENTER = 0,
			BOTTOM = 0,
		}
	}
	export namespace Label {
		export enum Overflow {
			NONE = 0,
			CLAMP = 0,
			SHRINK = 0,
			RESIZE_HEIGHT = 0,
		}
	}
	export namespace Label {
		export enum Type {
			TTF = 0,
			BMFont = 0,
			SystemFont = 0,
		}
	}
	export namespace Label {
		export enum CacheMode {
			NONE = 0,
			BITMAP = 0,
			CHAR = 0,
		}
	}
	export namespace Layout {
		export enum Type {
			NONE = 0,
			HORIZONTAL = 0,
			VERTICAL = 0,
			GRID = 0,
		}
	}
	export namespace Layout {
		export enum ResizeMode {
			NONE = 0,
			CONTAINER = 0,
			CHILDREN = 0,
		}
	}
	export namespace Layout {
		export enum AxisDirection {
			HORIZONTAL = 0,
			VERTICAL = 0,
		}
	}
	export namespace Layout {
		export enum VerticalDirection {
			BOTTOM_TO_TOP = 0,
			TOP_TO_BOTTOM = 0,
		}
	}
	export namespace Layout {
		export enum HorizontalDirection {
			LEFT_TO_RIGHT = 0,
			RIGHT_TO_LEFT = 0,
		}
	}
	export namespace Mask {
		export enum Type {
			RECT = 0,
			ELLIPSE = 0,
			IMAGE_STENCIL = 0,
		}
	}
	export namespace PageView {
		export enum SizeMode {
			Unified = 0,
			Free = 0,
		}
	}
	export namespace PageView {
		export enum Direction {
			Horizontal = 0,
			Vertical = 0,
		}
	}
	export namespace PageView {
		export enum EventType {
			PAGE_TURNING = 0,
		}
	}
	export namespace PageViewIndicator {
		export enum Direction {
			HORIZONTAL = 0,
			VERTICAL = 0,
		}
	}
	export namespace ProgressBar {
		export enum Mode {
			HORIZONTAL = 0,
			VERTICAL = 0,
			FILLED = 0,
		}
	}
	export namespace Scrollbar {
		export enum Direction {
			HORIZONTAL = 0,
			VERTICAL = 0,
		}
	}
	export namespace ScrollView {
		export enum EventType {
			SCROLL_TO_TOP = 0,
			SCROLL_TO_BOTTOM = 0,
			SCROLL_TO_LEFT = 0,
			SCROLL_TO_RIGHT = 0,
			SCROLLING = 0,
			BOUNCE_TOP = 0,
			BOUNCE_BOTTOM = 0,
			BOUNCE_LEFT = 0,
			BOUNCE_RIGHT = 0,
			SCROLL_ENDED = 0,
			TOUCH_UP = 0,
			AUTOSCROLL_ENDED_WITH_THRESHOLD = 0,
			SCROLL_BEGAN = 0,
		}
	}
	export namespace Slider {
		export enum Direction {
			Horizontal = 0,
			Vertical = 0,
		}
	}
	export namespace Sprite {
		export enum Type {
			SIMPLE = 0,
			SLICED = 0,
			TILED = 0,
			FILLED = 0,
			MESH = 0,
		}
	}
	export namespace Sprite {
		export enum FillType {
			HORIZONTAL = 0,
			VERTICAL = 0,
			RADIAL = 0,
		}
	}
	export namespace Sprite {
		export enum SizeMode {
			CUSTOM = 0,
			TRIMMED = 0,
			RAW = 0,
		}
	}
	export namespace Sprite {
		export enum State {
			NORMAL = 0,
			GRAY = 0,
		}
	}
	export namespace Widget {
		export enum AlignMode {
			ONCE = 0,
			ON_WINDOW_RESIZE = 0,
			ALWAYS = 0,
		}
	}
	export namespace Event {
		export class EventMouse extends Event {
			setScrollData(scrollX: number, scrollY: number): void;
			getScrollX(): number;
			getScrollY(): number;
			setLocation(x: number, y: number): void;
			getLocation(): Vec2;
			getLocationInView(): Vec2;
			getPreviousLocation(): Vec2;
			getDelta(): Vec2;
			getDeltaX(): number;
			getDeltaY(): number;
			setButton(button: number): void;
			getButton(): number;
			getLocationX(): number;
			getLocationY(): number;
			static NONE: number;
			static DOWN: number;
			static UP: number;
			static MOVE: number;
			static SCROLL: number;
			static BUTTON_LEFT: number;
			static BUTTON_RIGHT: number;
			static BUTTON_MIDDLE: number;
			static BUTTON_4: number;
			static BUTTON_5: number;
			static BUTTON_6: number;
			static BUTTON_7: number;
			static BUTTON_8: number;
		}
	}
	export namespace Event {
		export class EventTouch extends Event {
			constructor(touchArr: any[], bubbles: boolean);
			touch: Touch;
			getEventCode(): number;
			getTouches(): any[];
			setLocation(x: number, y: number): void;
			getLocation(): Vec2;
			getLocationInView(): Vec2;
			getPreviousLocation(): Vec2;
			getStartLocation(): Vec2;
			getID(): number;
			getDelta(): Vec2;
			getDeltaX(): number;
			getDeltaY(): number;
			getLocationX(): number;
			getLocationY(): number;
		}
	}
	export namespace Event {
		export class EventAcceleration extends Event {
		}
	}
	export namespace Event {
		export class EventKeyboard extends Event {
			keyCode: number;
		}
	}
	export namespace Event {
		export class EventCustom extends Event {
			constructor(type: string, bubbles: boolean);
			detail: any;
			setUserData(data: any): void;
			getUserData(): any;
			getEventName(): string;
		}
	}
	export namespace SystemEvent {
		export class EventType {
			static KEY_DOWN: string;
			static KEY_UP: string;
			static DEVICEMOTION: string;
		}
	}
	export namespace Graphics {
		export enum LineCap {
			BUTT = 0,
			ROUND = 0,
			SQUARE = 0,
		}
	}
	export namespace Graphics {
		export enum LineJoin {
			BEVEL = 0,
			ROUND = 0,
			MITER = 0,
		}
	}
	export namespace MeshRenderer {
		export enum ShadowCastingMode {
			OFF = 0,
			ON = 0,
		}
	}
	export namespace macro {
		export enum KEY {
			none = 0,
			back = 0,
			menu = 0,
			backspace = 0,
			tab = 0,
			enter = 0,
			shift = 0,
			ctrl = 0,
			alt = 0,
			pause = 0,
			capslock = 0,
			escape = 0,
			space = 0,
			pageup = 0,
			pagedown = 0,
			end = 0,
			home = 0,
			left = 0,
			up = 0,
			right = 0,
			down = 0,
			select = 0,
			insert = 0,
			Delete = 0,
			a = 0,
			b = 0,
			c = 0,
			d = 0,
			e = 0,
			f = 0,
			g = 0,
			h = 0,
			i = 0,
			j = 0,
			k = 0,
			l = 0,
			m = 0,
			n = 0,
			o = 0,
			p = 0,
			q = 0,
			r = 0,
			s = 0,
			t = 0,
			u = 0,
			v = 0,
			w = 0,
			x = 0,
			y = 0,
			z = 0,
			num0 = 0,
			num1 = 0,
			num2 = 0,
			num3 = 0,
			num4 = 0,
			num5 = 0,
			num6 = 0,
			num7 = 0,
			num8 = 0,
			num9 = 0,
			'*' = 0,
			'+' = 0,
			'-' = 0,
			numdel = 0,
			'/' = 0,
			f1 = 0,
			f2 = 0,
			f3 = 0,
			f4 = 0,
			f5 = 0,
			f6 = 0,
			f7 = 0,
			f8 = 0,
			f9 = 0,
			f10 = 0,
			f11 = 0,
			f12 = 0,
			numlock = 0,
			scrolllock = 0,
			';' = 0,
			semicolon = 0,
			equal = 0,
			'=' = 0,
			',' = 0,
			comma = 0,
			dash = 0,
			'.' = 0,
			period = 0,
			forwardslash = 0,
			grave = 0,
			'[' = 0,
			openbracket = 0,
			backslash = 0,
			']' = 0,
			closebracket = 0,
			quote = 0,
			dpadLeft = 0,
			dpadRight = 0,
			dpadUp = 0,
			dpadDown = 0,
			dpadCenter = 0,
		}
	}
	export namespace macro {
		export enum ImageFormat {
			JPG = 0,
			PNG = 0,
			TIFF = 0,
			WEBP = 0,
			PVR = 0,
			ETC = 0,
			S3TC = 0,
			ATITC = 0,
			TGA = 0,
			RAWDATA = 0,
			UNKNOWN = 0,
		}
	}
	export namespace macro {
		export enum BlendFactor {
			ONE = 0,
			ZERO = 0,
			SRC_ALPHA = 0,
			SRC_COLOR = 0,
			DST_ALPHA = 0,
			DST_COLOR = 0,
			ONE_MINUS_SRC_ALPHA = 0,
			ONE_MINUS_SRC_COLOR = 0,
			ONE_MINUS_DST_ALPHA = 0,
			ONE_MINUS_DST_COLOR = 0,
		}
	}
	export namespace macro {
		export enum TextAlignment {
			LEFT = 0,
			CENTER = 0,
			RIGHT = 0,
		}
	}
	export namespace sys {
		export enum NetworkType {
			NONE = 0,
			LAN = 0,
			WWAN = 0,
		}
	}
	export namespace geomUtils {
		export class Aabb {
			create(px: number, py: number, pz: number, w: number, h: number, l: number): Aabb;
			clone(a: Aabb): Aabb;
			copy(out: Aabb, a: Aabb): Aabb;
			fromPoints(out: Aabb, minPos: Vec3, maxPos: Vec3): Aabb;
			set(out: Aabb, px: number, py: number, pz: number, w: number, h: number, l: number): Aabb;
			center: Vec3;
			halfExtents: Vec3;
			_type: number;
			getBoundary(minPos: Vec3, maxPos: Vec3): void;
			transform(m: Mat4, pos: Vec3, rot: Quat, scale: Vec3, out?: Aabb): void;
		}
	}
	export namespace geomUtils {
		export enum enums {
			SHAPE_RAY = 0,
			SHAPE_LINE = 0,
			SHAPE_SPHERE = 0,
			SHAPE_AABB = 0,
			SHAPE_OBB = 0,
			SHAPE_PLANE = 0,
			SHAPE_TRIANGLE = 0,
			SHAPE_FRUSTUM = 0,
			SHAPE_FRUSTUM_ACCURATE = 0,
		}
	}
	export namespace geomUtils {
		export class Frustum {
			accurate: boolean;
			static create(): Frustum;
			static clone(f: Frustum): Frustum;
			copy(out: Frustum, f: Frustum): Frustum;
			planes: geomUtils.Plane[];
			planes: Vec3[];
			update(m: Mat4, inv: Mat4): void;
			transform(mat: Mat4): void;
		}
	}
	export namespace geomUtils {
		export class Line {
			create(sx: number, sy: number, sz: number, ex: number, ey: number, ez: number): Line;
			clone(a: Line): Line;
			copy(out: Line, a: Line): Line;
			fromPoints(out: Line, start: Vec3, end: Vec3): Line;
			set(out: Line, sx: number, sy: number, sz: number, ex: number, ey: number, ez: number): Line;
			len(a: Line): number;
			s: Vec3;
			e: Vec3;
			length(): number;
		}
	}
	export namespace geomUtils {
		export class Obb {
			type: number;
			create(cx: number, cy: number, cz: number, hw: number, hh: number, hl: number, ox_1: number, ox_2: number, ox_3: number, oy_1: number, oy_2: number, oy_3: number, oz_1: number, oz_2: number, oz_3: number): Obb;
			clone(a: Obb): Obb;
			copy(out: Obb, a: Obb): Obb;
			fromPoints(out: Obb, minPos: Vec3, maxPos: Vec3): Obb;
			set(cx: number, cy: number, cz: number, hw: number, hh: number, hl: number, ox_1: number, ox_2: number, ox_3: number, oy_1: number, oy_2: number, oy_3: number, oz_1: number, oz_2: number, oz_3: number): Obb;
			center: Vec3;
			halfExtents: Vec3;
			orientation: Mat3;
			getBoundary(minPos: Vec3, maxPos: Vec3): void;
			transform(m: Mat4, pos: Vec3, rot: Quat, scale: Vec3, out: Obb): void;
			translateAndRotate(m: Mat4, rot: Quat, out: Obb): void;
			setScale(scale: Vec3, out: Obb): void;
		}
	}
	export namespace geomUtils {
		export class intersect {
			static ray_cast(root: Node, worldRay: geomUtils.Ray, handler: Function, filter: Function): any[];
			static ray_plane(ray: geomUtils.Ray, plane: geomUtils.Plane): number;
			static line_plane(line: Line, plane: geomUtils.Plane): number;
			static ray_triangle(ray: geomUtils.Ray, triangle: geomUtils.Triangle, doubleSided: boolean): number;
			static line_triangle(line: Line, triangle: geomUtils.Triangle, outPt: Vec3): number;
			static line_quad(p: Vec3, q: Vec3, a: Vec3, b: Vec3, c: Vec3, d: Vec3, outPt: Vec3): number;
			static ray_sphere(ray: geomUtils.Ray, sphere: geomUtils.Sphere): number;
			static ray_aabb(ray: geomUtils.Ray, aabb: Aabb): number;
			static ray_obb(ray: geomUtils.Ray, obb: Obb): number;
			static aabb_aabb(aabb1: Aabb, aabb2: Aabb): number;
			static aabb_obb(aabb: Aabb, obb: Obb): number;
			static aabb_plane(aabb: Aabb, plane: geomUtils.Plane): number;
			static aabb_frustum(aabb: Aabb, frustum: Frustum): number;
			static aabb_frustum_accurate(aabb: Aabb, frustum: Frustum): number;
			static obb_point(obb: Obb, point: geomUtils.Vec3): boolean;
			static obb_plane(obb: Obb, plane: geomUtils.Plane): number;
			static obb_frustum(obb: Obb, frustum: Frustum): number;
			static obb_frustum_accurate(obb: Obb, frustum: Frustum): number;
			static obb_obb(obb1: Obb, obb2: Obb): number;
			static sphere_plane(sphere: geomUtils.Sphere, plane: geomUtils.Plane): number;
			static sphere_frustum(sphere: geomUtils.Sphere, frustum: Frustum): number;
			static sphere_frustum_accurate(sphere: geomUtils.Sphere, frustum: Frustum): number;
			static sphere_sphere(sphere0: geomUtils.Sphere, sphere1: geomUtils.Sphere): boolean;
			static sphere_aabb(sphere: geomUtils.Sphere, aabb: Aabb): boolean;
			static sphere_obb(sphere: geomUtils.Sphere, obb: Obb): boolean;
			static resolve(g1: any, g2: any, outPt: any): void;
		}
	}
	export namespace geomUtils {
		export class Plane {
			create(nx: number, ny: number, nz: number, d: number): Plane;
			clone(p: Plane): Plane;
			copy(out: Plane, p: Plane): Plane;
			fromPoints(out: Plane, a: Vec3, b: Vec3, c: Vec3): Plane;
			set(out: Plane, nx: number, ny: number, nz: number, d: number): Plane;
			fromNormalAndPoint(out: Plane, normal: Vec3, point: Vec3): Plane;
			normalize(out: Plane, a: Plane): Plane;
			n: Vec3;
			d: number;
			transform(mat: Mat4): void;
		}
	}
	export namespace geomUtils {
		export class Ray {
			create(ox: number, oy: number, oz: number, dx: number, dy: number, dz: number): Ray;
			clone(a: Ray): Ray;
			copy(out: Ray, a: Ray): Ray;
			fromPoints(out: Ray, origin: Vec3, target: Vec3): Ray;
			set(out: Ray, ox: number, oy: number, oz: number, dx: number, dy: number, dz: number): Ray;
			o: Vec3;
			d: Vec3;
			computeHit(out: IVec3Like, distance: number): void;
		}
	}
	export namespace geomUtils {
		export class Sphere {
			create(cx: any, cy: any, cz: any, r: any): Sphere;
			clone(p: Sphere): Sphere;
			copy(out: Sphere, a: Sphere): Sphere;
			fromPoints(out: any, minPos: any, maxPos: any): Sphere;
			set(out: Sphere, cx: any, cy: any, cz: any, r: number): Sphere;
			center: Vec3;
			radius: number;
			clone(): void;
			copy(a: any): void;
			getBoundary(minPos: Vec3, maxPos: Vec3): void;
			transform(m: any, pos: any, rot: any, scale: any, out: any): void;
			setScale(scale: any, out: any): void;
		}
	}
	export namespace geomUtils {
		export class Triangle {
			create(ax: number, ay: number, az: number, bx: number, by: number, bz: number, cx: number, cy: number, cz: number): Triangle;
			clone(t: Triangle): Triangle;
			copy(out: Triangle, t: Triangle): Triangle;
			fromPoints(out: Triangle, a: Vec3, b: Vec3, c: Vec3): Triangle;
			set(out: Triangle, ax: number, ay: number, az: number, bx: number, by: number, bz: number, cx: number, cy: number, cz: number): Plane;
			a: Vec3;
			b: Vec3;
			c: Vec3;
		}
	}
	export namespace PhysicsManager {
		export enum DrawBits {
			e_aabbBit = 0,
			e_jointBit = 0,
			e_shapeBit = 0,
		}
	}
	export namespace RenderTexture {
		export enum DepthStencilFormat {
			RB_FMT_D24S8 = 0,
			RB_FMT_S8 = 0,
			RB_FMT_D16 = 0,
		}
	}
	export namespace Prefab {
		export enum OptimizationPolicy {
			AUTO = 0,
			SINGLE_INSTANCE = 0,
			MULTI_INSTANCE = 0,
		}
	}
	export namespace Texture2D {
		export enum PixelFormat {
			RGB565 = 0,
			RGB5A1 = 0,
			RGBA4444 = 0,
			RGB888 = 0,
			RGBA8888 = 0,
			RGBA32F = 0,
			A8 = 0,
			I8 = 0,
			AI88 = 0,
			RGB_PVRTC_2BPPV1 = 0,
			RGBA_PVRTC_2BPPV1 = 0,
			RGB_A_PVRTC_2BPPV1 = 0,
			RGB_PVRTC_4BPPV1 = 0,
			RGBA_PVRTC_4BPPV1 = 0,
			RGB_A_PVRTC_4BPPV1 = 0,
			RGB_ETC1 = 0,
			RGBA_ETC1 = 0,
			RGB_ETC2 = 0,
			RGBA_ETC2 = 0,
		}
	}
	export namespace Texture2D {
		export enum WrapMode {
			REPEAT = 0,
			CLAMP_TO_EDGE = 0,
			MIRRORED_REPEAT = 0,
		}
	}
	export namespace Texture2D {
		export enum Filter {
			LINEAR = 0,
			NEAREST = 0,
		}
	}
	export namespace AnimationCurve {
		export enum WrapMode {
			Default = 0,
			Once = 0,
			Loop = 0,
			PingPong = 0,
			ClampForever = 0,
			time = 0,
			value = 0,
			inTangent = 0,
			outTangent = 0,
		}
	}
	export namespace ParticleSystem3DAssembler {
		export enum Space {
		}
	}
	export namespace ParticleSystem3DAssembler {
		export enum RenderMode {
		}
	}
	export namespace shapeModule {
		export enum ShapeType {
			Box = 0,
			Circle = 0,
			Cone = 0,
			Sphere = 0,
			Hemisphere = 0,
		}
	}
	export namespace shapeModule {
		export enum EmitLocation {
			Base = 0,
			Edge = 0,
			Shell = 0,
			Volume = 0,
		}
	}
	export namespace shapeModule {
		export enum ArcMode {
			Random = 0,
			Loop = 0,
			PingPong = 0,
		}
	}
	export namespace trailModule {
		export enum TrailMode {
		}
	}
	export namespace trailModule {
		export enum TextureMode {
		}
	}
	export namespace primitive {
		export enum PolyhedronType {
			Tetrahedron = 0,
			Octahedron = 0,
			Dodecahedron = 0,
			Icosahedron = 0,
			Rhombicuboctahedron = 0,
			TriangularPrism = 0,
			PentagonalPrism = 0,
			HexagonalPrism = 0,
			SquarePyramid = 0,
			PentagonalPyramid = 0,
			TriangularDipyramid = 0,
			PentagonalDipyramid = 0,
			ElongatedSquareDipyramid = 0,
			ElongatedPentagonalDipyramid = 0,
			ElongatedPentagonalCupola = 0,
		}
	}
	export namespace primitive {
		export class VertexData {
			positions: number[];
			normals: number[];
			uvs: number[];
			indices: number[];
			minPos: Vec3;
			maxPos: Vec3;
			boundingRadius: number;
		}
	}
	export namespace EditBox {
		export enum KeyboardReturnType {
			DEFAULT = 0,
			DONE = 0,
			SEND = 0,
			SEARCH = 0,
			GO = 0,
			NEXT = 0,
		}
	}
	export namespace EditBox {
		export enum InputMode {
			ANY = 0,
			EMAIL_ADDR = 0,
			NUMERIC = 0,
			PHONE_NUMBER = 0,
			URL = 0,
			DECIMAL = 0,
			SINGLE_LINE = 0,
		}
	}
	export namespace EditBox {
		export enum InputFlag {
			PASSWORD = 0,
			SENSITIVE = 0,
			INITIAL_CAPS_WORD = 0,
			INITIAL_CAPS_SENTENCE = 0,
			INITIAL_CAPS_ALL_CHARACTERS = 0,
			DEFAULT = 0,
		}
	}
	export namespace Material {
		export enum BUILTIN_NAME {
			SPRITE = 0,
			GRAY_SPRITE = 0,
			UNLIT = 0,
		}
	}
	export namespace textureAnimationModule {
		export enum Mode {
		}
	}
	export namespace textureAnimationModule {
		export enum Animation {
		}
	}
}
declare namespace jsb {
	export module reflection {
		export function callStaticMethod(className: string, methodName: string, methodSignature: string, ...parameters: any): any;
	}
	export type DownloaderTask = { requestURL: string, storagePath: string, identifier: string };
	export class Downloader {
		createDownloadFileTask(requestURL: string, storagePath: string, identifier?: string): DownloaderTask;
		setOnFileTaskSuccess(onSucceed: (task: DownloaderTask) => void): void;
		setOnTaskProgress(onProgress: (task: DownloaderTask, bytesReceived: number, totalBytesReceived: number, totalBytesExpected: number) => void): void;
		setOnTaskError(onError: (task: DownloaderTask, errorCode: number, errorCodeInternal: number, errorStr: string) => void): void;
	}
	export interface ManifestAsset {
		md5: string;
		path: string;
		compressed: boolean;
		size: number;
		downloadState: number;
	}
	export class Manifest {
		constructor(manifestUrl: string);
		constructor(content: string, manifestRoot: string);
		parseFile(manifestUrl: string): void;
		parseJSONString(content: string, manifestRoot: string): void;
		getManifestRoot(): string;
		getManifestFileUrl(): string;
		getVersionFileUrl(): string;
		getSearchPaths(): [string];
		getVersion(): string;
		getPackageUrl(): boolean;
		setUpdating(isUpdating: boolean): void;
		isUpdating(): boolean;
		isVersionLoaded(): boolean;
		isLoaded(): boolean;
	}
	export class EventAssetsManager {
		static ERROR_NO_LOCAL_MANIFEST: number;
		static ERROR_DOWNLOAD_MANIFEST: number;
		static ERROR_PARSE_MANIFEST: number;
		static NEW_VERSION_FOUND: number;
		static ALREADY_UP_TO_DATE: number;
		static UPDATE_PROGRESSION: number;
		static ASSET_UPDATED: number;
		static ERROR_UPDATING: number;
		static UPDATE_FINISHED: number;
		static UPDATE_FAILED: number;
		static ERROR_DECOMPRESS: number;
		constructor(eventName: string, manager: AssetsManager, eventCode: number,
			assetId?: string, message?: string, curleCode?: number, curlmCode?: number);
		getAssetsManagerEx(): AssetsManager;
		isResuming(): boolean;
		getDownloadedFiles(): number;
		getDownloadedBytes(): number;
		getTotalFiles(): number;
		getTotalBytes(): number;
		getPercent(): number;
		getPercentByFile(): number;
		getEventCode(): number;
		getMessage(): string;
		getAssetId(): string;
		getCURLECode(): number;
		getCURLMCode(): number;
	}
	export module AssetsManager {
		export enum State {
			UNINITED,
			UNCHECKED,
			PREDOWNLOAD_VERSION,
			DOWNLOADING_VERSION,
			VERSION_LOADED,
			PREDOWNLOAD_MANIFEST,
			DOWNLOADING_MANIFEST,
			MANIFEST_LOADED,
			NEED_UPDATE,
			READY_TO_UPDATE,
			UPDATING,
			UNZIPPING,
			UP_TO_DATE,
			FAIL_TO_UPDATE,
		}
	}
	export class AssetsManager {
		constructor(manifestUrl: string, storagePath: string, versionCompareHandle?: (versionA: string, versionB: string) => number);
		static create(manifestUrl: string, storagePath: string): AssetsManager;
		getState(): AssetsManager.State;
		getStoragePath(): string
		getMaxConcurrentTask(): number;
		checkUpdate(): void;
		prepareUpdate(): void;
		update(): void;
		isResuming(): boolean;
		getDownloadedFiles(): number;
		getDownloadedBytes(): number;
		getTotalFiles(): number;
		getTotalBytes(): number;
		downloadFailedAssets(): void;
		getLocalManifest(): Manifest;
		loadLocalManifest(manifestUrl: string): boolean;
		loadLocalManifest(localManifest: Manifest, storagePath: string): boolean;
		getRemoteManifest(): Manifest;
		loadRemoteManifest(remoteManifest: Manifest): boolean;
		setVersionCompareHandle(versionCompareHandle?: (versionA: string, versionB: string) => number): void;
		setVerifyCallback(verifyCallback: (path: string, asset: ManifestAsset) => boolean): void;
		setEventCallback(eventCallback: (event: EventAssetsManager) => void): void;
	}
	export module fileUtils {
		export function isAbsolutePath(path: string): boolean;
		export function fullPathForFilename(filename: string): string;
		export function getStringFromFile(filename: string): string;
		export function removeFile(filepath: string): boolean;
		export function isDirectoryExist(dirPath: string): boolean;
		export function normalizePath(filepath: string): string;
		export function getDefaultResourceRootPath(): string;
		export function loadFilenameLookup(filepath: string): void;
		export function isPopupNotify(): boolean;
		export function setPopupNotify(notify: boolean): void;
		export function getValueVectorFromFile(filepath: string): Array<any>;
		export function getSearchPaths(): Array<string>;
		export function getFileDir(filepath: string): string;
		export function writeToFile(valueMap: any): boolean;
		export function getOriginalSearchPaths(): Array<string>;
		export function listFiles(filepath: string): Array<string>;
		export function getValueMapFromFile(filepath: string): any;
		export function getFileSize(filepath: string): number;
		export function getValueMapFromData(filedata: string, filesize: number): any;
		export function removeDirectory(dirPath: string): boolean;
		export function setSearchPaths(searchPath: Array<string>): void;
		export function writeStringToFile(dataStr: string, fullPath: string): boolean;
		export function setSearchResolutionsOrder(searchResolutionsOrder: Array<string>): void;
		export function addSearchResolutionsOrder(order: string, front: boolean): void;
		export function addSearchPath(path: string, front: boolean): void;
		export function writeValueVectorToFile(vecData: Array<any>, fullPath: string): boolean;
		export function isFileExist(filename: string): boolean;
		export function purgeCachedEntries(): void;
		export function fullPathFromRelativeFile(filename: string, relativeFile: string): string;
		export function getSuitableFOpen(filenameUtf8: string): string;
		export function writeValueMapToFile(dict: any, fullPath: string): string;
		export function getFileExtension(filePath: string): string;
		export function setWritablePath(writablePath: string): void;
		export function setDefaultResourceRootPath(filepath: string): void;
		export function getSearchResolutionsOrder(): Array<string>;
		export function createDirectory(dirPath: string): string;
		export function listFilesRecursively(dirPath: string, files: Array<string>): void;
		export function getWritablePath(): string;
	}
}
