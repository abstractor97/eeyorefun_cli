class MovieClipCellDis extends BaseDisplayContainer {
	private _ani_dis: egret.MovieClip;
	private _scaleTime: number = 1;
	private _frame_rate: number = 1;
	public constructor(aniFileName: string) {
		super();
		this.showMovieClip(aniFileName);
	}
	private showMovieClip(aniFileName: string) {
		var _aniNameList: string[] = StaticFun.getAniMcList(aniFileName);
		var _aniData = RES.getRes(_aniNameList[0]);
		var _aniTexture = RES.getRes(_aniNameList[1]);
		
		var mcDataFactory = new egret.MovieClipDataFactory(_aniData, _aniTexture);
		this._ani_dis = new egret.MovieClip(mcDataFactory.generateMovieClipData(aniFileName));
		this._frame_rate = this._ani_dis.frameRate;
		this._ani_dis.smoothing = false;
		this.addChild(this._ani_dis);
	}
	private _loopCallBackFun: Function;
	public setLoopCallBack(loopCallBack: Function) {
		this._loopCallBackFun = loopCallBack;
		this._ani_dis.addEventListener(egret.Event.LOOP_COMPLETE, this.animationEventHandler, this);
	}
	private animationEventHandler(event?: egret.Event): void {
		var _ani_name: string = this._ani_dis.currentLabel;
		if (this._loopCallBackFun) this._loopCallBackFun(_ani_name);
	}
	public setTimeScale(scaleTime: number) {
		this._scaleTime = scaleTime;
		this._ani_dis.frameRate = this._frame_rate * this._scaleTime;
	}
	public setPlayAni(aniName?: string, times: number = -1) {
		if (!aniName) {
			this._ani_dis.gotoAndPlay(1);
			return;
		}
		this._ani_dis.gotoAndPlay(aniName, -1);
	}
	public baseGC() {
		this._ani_dis.removeEventListener(egret.Event.LOOP_COMPLETE, this.animationEventHandler, this);
		StaticFun.removeDis(this._ani_dis);
		this._ani_dis = null;
		this._loopCallBackFun = null;
	}
}