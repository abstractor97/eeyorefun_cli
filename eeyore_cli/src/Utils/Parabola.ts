class Parabola {
	private _a: number;
	private _b: number;
	private _c: number;
	private curvature: number;
	private speed: number;
	private _startX: number;
	private _startY: number;
	private _currX: number;
	private _rate: number;

	private _lastPos: Point;
	private _ePos: Point;

	private _isRotation: boolean;
	private _addScale: number;
	private _view: egret.DisplayObject;
	private _overCallBack: Function;
	public constructor(view: egret.DisplayObject, ePos: Point, overCallBack?: Function, speed: number = 1500, scale: number = 1, isRotation: boolean = false) {
		this._view = view;
		this._overCallBack = overCallBack;
		this._isRotation = isRotation;

		this.curvature = 0.01;
		this.speed = speed;
		this._a = this.curvature;
		this._b = 0;
		this._c = 0;

		this._startX = this._view.x;
		this._startY = this._view.y;
		this._currX = 0;
		this._ePos = new Point(ePos.x - this._startX, ePos.y - this._startY);
		this._lastPos = new Point(this._view.x, this._view.y);
		this._b = (this._ePos.y - this._a * this._ePos.x * this._ePos.x) / this._ePos.x;
		this._rate = this._ePos.x > 0 ? 1 : -1;

		var _times = this._ePos.x / (this._rate * Math.sqrt(this.speed / (this._b * this._b + 1)));
		this._addScale = -(1 - scale) / _times;
		egret.Ticker.getInstance().register(this.runTimeCall, this);
	}
	public runTimeCall(dt: number) {
		if (!this._view) {
			this.baseGC();
			return;
		}
		// 切线 y'=2ax+b
		var tangent = 2 * this._a * this._currX + this._b; // = y / x
		// y*y + x*x = speed
		// (tangent * x)^2 + x*x = speed
		// x = Math.sqr(speed / (tangent * tangent + 1));
		var _add = this._rate * Math.sqrt(this.speed / (tangent * tangent + 1));
		this._currX = this._currX + _add;

		// 防止过界
		if ((this._rate == 1 && this._currX > this._ePos.x) || (this._rate == -1 && this._currX < this._ePos.x)) {
			this._currX = this._ePos.x;
		}

		var x = this._currX;
		var y = this._a * x * x + this._b * x;

		var _newPos = new Point(this._startX + x, this._startY + y);

		if (this._addScale != 0) {
			this._view.scaleX = this._view.scaleY += this._addScale;
		}

		if (this._isRotation && this._lastPos) {
			this._view.rotation = StaticFun.getAngle(this._lastPos, _newPos) + 90;
		}
		if (this._currX !== this._ePos.x) {
			this._view.x = _newPos.x;
			this._view.y = _newPos.y;
			this._lastPos = _newPos;
		} else {
			if (this._overCallBack) {
				this._overCallBack(this._view);
			}
			this._overCallBack = null;
			this.baseGC();
		}
	}
	public baseGC() {
		this._view = null;
		this._overCallBack = null;
		egret.Ticker.getInstance().unregister(this.runTimeCall, this);
	}
}
