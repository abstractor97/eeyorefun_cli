class ShowTextPrint {
	private _txt: eui.Label;
	private _content: string;
	private _callBack: Function;
	public constructor(txt: eui.Label, content: string, callBack?: Function) {
		this._txt = txt;
		this._content = content;
		this._callBack = callBack;
		this.startClewShowAni();
	}
	private _myTime: MyTimer;
	private _clewShowIndex: number;
	private _isShowClewAll: boolean;

	private startClewShowAni() {
		if (!this._myTime) {
			this._myTime = new MyTimer();
		}
		this._isShowClewAll = false;
		this._clewShowIndex = 0;
		this._txt.text = "";
		this._myTime.setTimer(this.showClewStr.bind(this), 50);
	}
	private showClewStr() {
		this._clewShowIndex++;
		if (this._clewShowIndex > this._content.length) {
			this.showAllClewStr();
			return;
		}
		this._txt.text = this._content.substring(0, this._clewShowIndex);
	}
	public get isShowClewAll(): boolean {
		return this._isShowClewAll;
	}
	public showAllClewStr() {
		this._txt.text = this._content;
		this._isShowClewAll = true;
		if (this._callBack) {
			this._callBack();
		}
		this.gc();
	}
	public gc() {
		if (this._myTime) {
			this._myTime.gc();
		}
		this._myTime = null;
		this._txt = null;
		this._callBack = null;
	}
}