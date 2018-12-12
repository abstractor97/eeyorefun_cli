class CirTimeMask extends BaseEUICompent {
	private _radius: number;
	private _flag: number;
	private _angle: number = 0;
	private _timeMask: egret.Sprite;
	private _time: number;
	private _myTimer: MyTimer;
	private _callBack: Function;
	private _allTime: number;
	public constructor(radius: number, time: number, callBack) {
		super();
		this._radius = radius;
		this._time = time;
		this._allTime = time;
		this._callBack = callBack;
		this._myTimer = new MyTimer();
		this._myTimer.setTimer(this.drawCirMask.bind(this), 1);
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		this._timeMask = new egret.Sprite;
		this.addChild(this._timeMask);
		this.changeGraphics();
	}
	public changeGraphics(): void {
		this._timeMask.graphics.clear();
		this._timeMask.graphics.beginFill(0X000000, 0.5);
		this._timeMask.graphics.moveTo(0, 0);
		this._timeMask.graphics.lineTo(0, 0);
		this._timeMask.graphics.lineStyle();
		this._timeMask.graphics.drawArc(0, 0, this._radius, Math.PI * 3 / 2, this._angle * Math.PI / 180 + Math.PI * 3 / 2, this._flag == -1);
		this._timeMask.graphics.lineTo(0, 0);
		this._timeMask.graphics.endFill();
	}
	public drawCirMask() {
		this._time -= 10;
		this._angle = (this._allTime - this._time) / this._allTime * 360;
		this.changeGraphics();
		if (this._time < 0) {
			this._timeMask.graphics.clear();
			if (this._myTimer) {
				this._myTimer.gc();
			}
			StaticFun.removeDis(this);
			this._myTimer = null;
			this._callBack();
		}

	}
}