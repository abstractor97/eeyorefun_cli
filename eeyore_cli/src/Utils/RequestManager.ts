class RequestManager {
	private static _instance: RequestManager;
	private _funList: Object = new Object();
	private _countNum: number = 0;

	private _funStr: string = "fun_";
	private _loadTypeStr: string = "load_";
	public constructor() {
		if (RequestManager._instance != null) {
			return;
		}
	}
	public static getInstance(): RequestManager {
		if (RequestManager._instance == null) {
			RequestManager._instance = new RequestManager();
		}
		return RequestManager._instance;
	}
	public addCallBack(fun: Function, type: string): number {
		var _num: number = this.getCallBackID();
		this._funList[this._funStr + _num] = fun;
		this._funList[this._loadTypeStr + _num] = type;
		return _num;
	}
	public getLoadType(id: number): string {
		return this._funList[this._loadTypeStr + id];
	}

	public getCallBack(id: number): Function {
		return this._funList[this._funStr + id];
	}
	public delCallBack(id: number) {
		delete this._funList[this._funStr + id];
		delete this._funList[this._loadTypeStr + id];
	}
	public getCallBackID(): number {
		return ++this._countNum;
	}

}