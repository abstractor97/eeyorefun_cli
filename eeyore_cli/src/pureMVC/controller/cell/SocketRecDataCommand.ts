class SocketRecDataCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
	public constructor() {
		super();
	}
	public execute(notification: puremvc.INotification): void {
		var _obj: Object = notification.getBody() as Object;
		var _socketRecVO: SocketRecVO = new SocketRecVO(_obj);

		if (_socketRecVO.result == StaticData.CODE_0) {
			this.sendNotification(StaticEvent.SOCKET_REC + _socketRecVO.msgid + _socketRecVO.cmd, _socketRecVO);
			var _fun: Function = RequestManager.getInstance().getCallBack(_socketRecVO.seq);
			if (_fun != null) {
				_fun(_socketRecVO);
			}
		} else if (_socketRecVO.result == StaticData.CODE_7033) {
			AlertCtrl.getInstance().showAlert(_socketRecVO.errmsg, this.showShareView.bind(this), function () { });
		} else if (_socketRecVO.result == StaticData.CODE_7001) {
			AlertCtrl.getInstance().showAlert("金币不足,是否前往购买?", this.showPayView.bind(this), function () { });
		} else if (_socketRecVO.result == StaticData.CODE_7002) {
			AlertCtrl.getInstance().showAlert(StaticData.langConfig.getLangStrByID(110054), this.showPayView.bind(this), function () { });
		} else if (_socketRecVO.result == StaticData.CODE_7038) {
			EventManager.getInstance().sendEvent(EventManager.EVENT_ADD_POWER);
		} else if (_socketRecVO.errmsg != "") {
			AlertCtrl.getInstance().showAlert(_socketRecVO.errmsg);
		}
		if (_socketRecVO.seq != 0) {
			var _loadType = RequestManager.getInstance().getLoadType(_socketRecVO.seq);
			if (_loadType != LoadingViewMediator.LOAD_TYPE_NONE) {
				this.sendNotification(StaticEvent.N_M_LOADING_DEL, new LoadingVO("", "", false, _socketRecVO.seq));
			}
			RequestManager.getInstance().delCallBack(_socketRecVO.seq);
		}
	};
	private showShareView() {
		this.facade.sendNotification(StaticEvent.N_M_SHARE_VIEW_SHOW);
	}
	private showPayView() {
		// this.facade.sendNotification(StaticEvent.N_M_PAY_VIEW_SHOW);
		this.facade.sendNotification(StaticEvent.N_C_LOAD_MALL_RES, ShopMediator.MALL_TYPE_NORMAL);
	}
}