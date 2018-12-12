class ScollerPageTools {
	public scroll: eui.Scroller;
	private _startPixel: number = 0;//点击记录
	private _moVPixel: number = 0;
	private _pageIndex: number = 0;
	private _isCurPage: boolean = false;
	private _pageSize: number;
	private _distance: number;
	private _direction: number = 0;
	private _flag: boolean = true;
	private _callBack: Function;
	/**
	 * @param distance:页与页之间的距离
	 * @param direction:0:垂直方向,1水平方向 默认垂直方向
	 * @param callFunc:每次翻页回掉函数
	 */
	public constructor(sc: eui.Scroller, distance: number, direction: number, pageSize: number, callFunc?: Function) {
		this.scroll = sc;
		this._distance = distance;
		this._direction = direction;
		this._pageSize = pageSize;
		this._callBack = callFunc;
		this.scroll.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
		this.scroll.addEventListener(eui.UIEvent.CHANGE_END, this.onTouchEnd, this);
		this.scroll.throwSpeed = 0;
	}

	private initStartDirection() {
		if (this._direction == 1) {
			this._startPixel = this.scroll.viewport.scrollH;
		} else {
			this._startPixel = this.scroll.viewport.scrollV;
		}
	}
	private initEndDirection() {
		if (this._direction == 1) {
			this._moVPixel = this.scroll.viewport.scrollH;
		} else {
			this._moVPixel = this.scroll.viewport.scrollV;
		}
	}
	private timeFlag: boolean = true;
	private recordTime: number = 0;
	private sTime: number = 0;
	private moveStart(timeStamp: number): boolean {
		if (this.timeFlag == true) {
			this.recordTime = timeStamp;
			this.timeFlag = false;
		}
		this.sTime = timeStamp - this.recordTime;
		return false;
	}

	private onTouchBegin(e: egret.TouchEvent) {
		egret.startTick(this.moveStart, this);
		this.initStartDirection();
	}

	private onTouchEnd() {
		this.initEndDirection();
		if (this._flag == false) { return; }
		this._flag = false;
		this._isCurPage = false;
		egret.stopTick(this.moveStart, this);
		this.timeFlag = true;
		if (this.sTime < 1000) {
			if (this._startPixel < this._moVPixel && this._pageIndex < (this._pageSize - 1)) {
				this._pageIndex++;
			} else if (this._startPixel > this._moVPixel) {
				if (this._pageIndex != 0) {
					this._pageIndex--;
				}
			} else {
				this._isCurPage = true;
			}
		} else {
			if (this._startPixel < this._moVPixel && this._pageIndex < (this._pageSize - 1)) {
				if (this._moVPixel - this._startPixel > this._distance / 4) {
					this._pageIndex++;
				}
			} else if (this._startPixel > this._moVPixel) {
				if (this._startPixel - this._moVPixel > this._distance / 4) {
					this._pageIndex--;
				}
			} else {
				this._isCurPage = true;
			}
		}
		this.moveView();
	}

	private completeFunc() {
		this._flag = true;
		if (!this._isCurPage) {
			if (this._callBack) {
				this._callBack();
			}
			this.changePageIndex(this._pageIndex);
		}
	}

	private moveView() {
		if (this._pageIndex < 0) {
			this._pageIndex = 0;
			return;
		} else if (this._pageIndex > (this._pageSize - 1)) {
			this._pageIndex = this._pageSize - 1;
			return;
		}
		if (this._direction == 1) {
			egret.Tween.get(this.scroll.viewport).to({ scrollH: this._pageIndex * this._distance }, 300).call(() => this.completeFunc(), this);
			return;
		}
		egret.Tween.get(this.scroll.viewport).to({ scrollV: this._pageIndex * this._distance }, 300).call(() => this.completeFunc(), this);
	}


	public changePageIndex(index: number) {
		for (let i = 0; i < this._gp_point.numChildren; i++) {
			let rect = this._gp_point.getChildAt(i) as eui.Rect;
			if (i == index) {
				rect.fillColor = 0xffffff;
			} else {
				rect.fillColor = 0x000000;
			}
		}
	}
	private _gp_point: eui.Group;
	public initPagePoint(num: number, group: eui.Group) {
		this._gp_point = group;
		for (let i = 0; i < num; i++) {
			let rect = new eui.Rect();
			rect.width = rect.height = 20;
			this._gp_point.addChild(rect);
			let layout = new eui.HorizontalLayout();
			layout.horizontalAlign = egret.HorizontalAlign.CENTER;
			layout.verticalAlign = egret.VerticalAlign.MIDDLE;
			layout.gap = 10;
			this._gp_point.layout = layout;
		}
	}
	public baseGc() {
		this.scroll.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
		this.scroll.removeEventListener(eui.UIEvent.CHANGE_END, this.onTouchEnd, this);
	}
}