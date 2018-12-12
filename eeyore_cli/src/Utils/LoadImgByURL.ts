class LoadImgByURL implements IBaseGC {
	private _onLoadCom: Function;
	private _onProgress: Function;
	private _onLoadError: Function;
	private _imgURL: string;
	private imageLoader: egret.ImageLoader
	public constructor(url: string, onLoadCom: Function, onLoadError?: Function) {
		// url = "/L3FxYXBwLzEwMTIzNzcyOC9DRUE0QzAxQjMyRTBCMUM0Njg2RjgyOTg2MkI0NEM5MC8xMDA=";
		this._imgURL = StaticData.configVO.headImgURL + url;
		DebugLog.getInstance().showLog("loadImg:" + this._imgURL);
		if (url == "") return;
		this._onLoadCom = onLoadCom;
		this._onLoadError = onLoadError;
		this.imageLoader = new egret.ImageLoader();
		this.imageLoader.addEventListener(egret.Event.COMPLETE, this.loadCompleteHandler, this);
		this.imageLoader.addEventListener(egret.ProgressEvent.PROGRESS, this.loadProgress, this);
		this.imageLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.loadImgError, this);
		this.imageLoader.load(this._imgURL);
	}
	public baseGC() {
		this.imageLoader.removeEventListener(egret.Event.COMPLETE, this.loadCompleteHandler, this);
		this.imageLoader.removeEventListener(egret.ProgressEvent.PROGRESS, this.loadProgress, this);
		this.imageLoader.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.loadImgError, this);
		this._onLoadCom = null;
		this._onLoadError = null;
	}
	private loadProgress(event: egret.ProgressEvent) {
		var _per: number = event.bytesLoaded / event.bytesTotal;
		if (this._onProgress) {
			this._onProgress(_per);
		}
	}
	private loadCompleteHandler(event: egret.Event): void {
		var imageLoader = <egret.ImageLoader>event.currentTarget;
		this._onLoadCom(imageLoader.data);
		this.baseGC();
	}
	private loadImgError(E: Event): void {
		DebugLog.getInstance().showLog("无法加载资源:" + this._imgURL);
		if (this._onLoadError != null) {
			this._onLoadError(this._imgURL);
		}
		this.baseGC();
	}
}