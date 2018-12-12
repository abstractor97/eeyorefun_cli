

module game {

	export class ControllerPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand {

		public constructor() {
			super();
		}
		public execute(notification: puremvc.INotification): void {
			//核心逻辑
			this.facade.registerCommand(StaticEvent.N_C_LOAD_FIRST, LoadingFirstCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_RESOURCE_GROUP, LoadResourceGroupCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_TITLE_SCENE, LoadTitleSceneCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_CONNECT_SERVER, LoadConnectServerCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_GAME_REGISTER_UID, LoadRegistUidCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_MAIN_SCENE, LoadMainSceneCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_RISK_SCENE, LoadRiskSceneCommand);
			this.facade.registerCommand(StaticEvent.N_C_HTTP_SEND_DATA, HttpResponseCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_WORKBAR_INFO_VIEW, LoadWorkBarInfoCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_MAIN_SALE_SCENE, LoadMainSaleSceneCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_STORE_INFO_VIEW, LoadStoreInfoCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_STORE_CHANGE_HERO_VIEW, LoadChangeHeroCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_HARRY_DATA, LoadHarryCommand);
			//辅助模块

			this.facade.registerCommand(StaticEvent.N_C_LOAD_EVENT_ADV_VIEW, LoadEventAdvCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_GET_GOOD_VIEW, LoadGetGoodAniCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_RANK_LIST_VIEW, LoadRankCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_COMBAT_VIEW, LoadCombatViewCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_FIRE_RESULT, LoadCombatResultCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_MALL_RES, LoadShopCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_EMAIL_RES, LoadEmailCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_TASK_RES, LoadTaskCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_GUIDE_RES, LoadGuideCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_ACTIVITY_RES, LoadActivityCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_SIGN_RES, LoadSignCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_SEVEN_LOGIN_RES, LoadSevenLoginCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_CAMP_MELEE_INDEX_VIEW, LoadCampMeleeIndexCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_FRIEND_INVITE_VIEW, LoadFriendInvitCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_FIRST_PAY_RES, LoadFirstPayCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_CARD_PAY_RES, LoadCardPayCommand );
			//英雄模块
			this.facade.registerCommand(StaticEvent.N_C_LOAD_HERO_MODULE_ROLE_VIEW, LoadHeroRoleCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_HERO_MODULE_COLLECT_VIEW, LoadHeroCollectCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_HERO_MODULE_LINE_UP_VIEW, LoadLineUpCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_HERO_CHOOSE_LIST, LoadHeroListCommad);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_CAMP_CHOOSE, LoadCampChooseCommand);

			this.facade.registerCommand(StaticEvent.N_C_LOAD_DEPOT_SCENE, LoadDepotSceneCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_TAVERN_SCENE, LoadTavernCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_TAVERN_RESULT_SCENE, LoadTavernResultCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_BAZAAR_VIEW, LoadBazaarCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_AD_VIEW, LoadShowAdCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_RACE_VIEW, LoadRaceCommand);
			//其他
			this.facade.registerCommand(StaticEvent.N_C_LOAD_BASE_INFO, LoadBaseInfoCommand);
			this.facade.registerCommand(StaticEvent.N_C_LOAD_FRIEND_VIEW, LoadFriendCommand);
			this.facade.registerCommand(StaticEvent.SOCKET_REC + StaticEvent.SOCKET_MSGID_1002 + StaticEvent.SOCKET_CMD_10403, OffLineCommand);
			//            (new GameCommand()).register();
			//            (new SceneCommand()).register();
			//socket
			this.facade.registerCommand(StaticEvent.N_C_SOCKET_COMMAND, SocketCommand);
			this.facade.registerCommand(StaticEvent.N_C_SOCKET_RECEIVE_DATA, SocketRecDataCommand);
			this.facade.registerCommand(StaticEvent.N_C_SOCKET_SEND_DATA, SocketSendDataCommand);
		}
	}
}


