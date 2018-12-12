/**
 *
 * @author 
 *
 */
class StaticData {

	// 打铁所需总时间
	public static TOTAL_COAST: number = 20000;

	public static GAME_W: number = 640;
	public static GAME_H: number = 1136;
	public static GAME_frameRate: number = 30;
	public static CODE_0: number = 0;
	public static CODE_7001: number = 7001;//金币不足提示充值
	public static CODE_7002: number = 7002;//钻石不足提示充值
	public static CODE_7033: number = 7033;//仓库空位不足提示开启
	public static CODE_7038: number = 7038;//体力不足提示购买
	public static CODE_7012: number = 7012;//角色位已满

	public static RANDOM_NUM: number;;
	public static STAGE_W: number;
	public static STAGE_H: number;
	public static IS_LOG: boolean = false;
	public static IS_DEBUG: boolean = false;
	public static S_ID: string;
	public static ROOM_ID: number = 0;//好友房间号
	public static PLAT_ID: number;
	public static configVO: ConfigVO;
	public static roleConfigVO: RoleConfigVO;
	public static langConfig: LangConfigData;
	public static EQUIP_MAX_LEVEL: number = 9;
	public static OPEN_KEY: string;
	public static OPEN_ID: string;
	public static APP_ID: number;
	public static tempNum: number = 0;
	public static IPX_H: number = 1300;//判断是否为iphoneX
	public static IPX_REDUCE_H: number = 50;//如果为iphoneX顶部下沉高度
	public static WORKBAR_MADE_MAX: number = 8;//单个工作台队列最大容量
	public static HERO_EXTENDS_MAX: number = 12;//英雄单次继承数量
	public static WORKBAR_BUY_MADE_BOX: number = 2;//花钱只能买2个工作位
	public static WORKBAR_MAX_LEVEL: number = 10;//锻造台最大等级
	public static RES_TitleScene: string = "titleSceneRes";//标题资源
	public static RES_mainScene: string = "mainSceneRes";//主界面锻造铺资源
	public static RES_SaleScene: string = "mainSaleSceneRes";//主界面销售铺资源
	public static RES_bazaarScene: string = "bazaarSceneRes";//集市
	public static RES_riskScene: string = "riskRes";//冒险资源
	public static RES_common: string = "commonRes";//公共资源
	public static RES_race: string = "raceRes";//竞技场资源
	public static RES_workBar: string = "workBarRes";//工作台详情资源
	public static RES_formulaRes: string = "formulaRes";//新增配方资源
	public static RES_duangFlagRes: string = "duangFlagRes";//打铁界面资源
	public static RES_combat: string = "combatRes";
	public static RES_chat: string = "chatRes";
	public static RES_science: string = "scienceRes";
	public static RES_email: string = "emailRes";
	public static RES_breed: string = "breedRes_";
	public static RES_tavern: string = "tavernRes";//酒馆主界面
	public static RES_tavernResult: string = "tavernResultRes";//酒馆抽卡结果界面

	public static RES_result: string = "resultRes";//结算资源
	public static RES_clean: string = "cleanRes";//净化
	public static RES_cleanList: string = "cleanListRes";//已净化列表
	public static RES_guideRes: string = "guideRes";
	public static RES_buyAniRes: string = "buyAniRes";
	public static RES_shopRes: string = "shopRes";//商店
	public static RES_breedShopRes: string = "breedShopRes";
	public static RES_eventAdvRes: string = "eventAdvRes";
	public static RES_rankRes: string = "rankRes";//排行榜资源
	public static RES_heroRes: string = "heroRes";//
	public static RES_noticeRes: string = "noticeRes";//公告资源
	public static RES_setttingRes: string = "setttingRes";//设置界面资源
	public static RES_getNewRoleRes: string = "getNewRoleRes";
	public static RES_friendRes: string = "friendRes";//好友资源
	public static RES_activityRes: string = "activityRes";//活动
	public static RES_campChoose: string = "campChooseRes";//
	public static RES_riskWorldMapRes: string = "riskWorldMapRes";//冒险大地图
	public static RES_signRes: string = "signRes";//签到
	public static RES_otherRes: string = "otherRes";//其他资源
	public static RES_heroModuleRes: string = "heroModuleRes";//英雄界面资源
	public static RES_heroCollectRes: string = "heroCollectRes";//英雄图鉴资源
	public static RES_heroFireRes: string = "heroFireRes";//英雄分解资源
	public static RES_DepotRes: string = "depotRes";//仓库资源
	public static RES_ICONRES: string = "iconRes";//图标资源
	public static device_id: string = "Device_" + egret.getTimer() + "_" + StaticFun.getRandNum(1000000);
	public static LOCAL_ACC: string = "acc";
	public static LOCAL_PW: string = "pw";
	public static USER_UID: number;//

	public static MAIN_SCENE_LAST_ID: number = 2;//1:锻造界面,2:销售界面
	public static ROLE_TYPE_ME: string = "me";
	public static ROLE_TYPE_ENEMY: string = "enemy";
	//渠道标识
	public static PLATID_1010: number = 1010;//游客登录
	public static PLATID_1011: number = 1011;//邮箱注册登录
	public static PLATID_1012: number = 1012;//预留
	public static PLATID_1013: number = 1013;//白鹭渠道

	public static MONEY_COIN: number = 1;//金币
	public static MONEY_DIAMOND: number = 2;//钻石
	public static GOOD_EXP: number = 3;//经验
	public static GOOD_JJB: number = 6;//竞技币
	public static GOOD_PWB: number = 7;//排位币
	public static GOOD_FHZ: number = 8;//防护罩
	public static MONEY_RMB: number = 9;//人民币

	//游戏内物品
	public static TYPE_GOOD_MONEY: string = "money";//货币
	public static TYPE_GOOD_EQUIP: string = "equip";//装备
	public static TYPE_GOOD_EQUIP_FINAL: string = "equip_final";//成品装备
	public static TYPE_GOOD_MATER: string = "mater";//材料
	public static TYPE_GOOD_DRAW: string = "draw";//图纸
	public static TYPE_GOOD_DRAW_MATER: string = "draw_mater";//炼精图纸
	public static TYPE_GOOD_PROP: string = "prop";//可使用道具
	public static TYPE_HERO: string = "hero";//英雄
	public static TYPE_CHAPTER: string = "chapter";//关卡

	//事件类型（操作）86：随机事件   81：遗迹事件   87：普通战斗  85：诱捕宠物  83：魔王  88：净化野怪  82：神秘商店 84:偷取金币

	public static EVENT_TYPE_82: number = 82;//神秘商店
	public static EVENT_TYPE_83: number = 83;//魔王
	public static EVENT_TYPE_84: number = 84;//偷取金币
	public static EVENT_TYPE_85: number = 85;//诱捕宠物 
	public static EVENT_TYPE_86: number = 86;//随机事件
	public static EVENT_TYPE_87: number = 87;//普通战斗
	public static EVENT_TYPE_88: number = 88;//净化野怪

	public static EVENT_DO_900: number = 900; //下一步
	public static EVENT_DO_901: number = 901;//战斗
	public static EVENT_DO_902: number = 902;//赠送
	public static EVENT_DO_903: number = 903;//扣除
	public static EVENT_DO_906: number = 906;//关闭事件界面

	//新手引导
	public static IS_NEW_USER: boolean = false;
	public static GUIDE_CURR_ID: number = 0;
	public static GUIDE_START_STEP: number = 1;
	public static GUIDE_OVER_STEP: number = -1;

	public static GUIDE_CONTROL_BLACK: string = "black";//屏幕黑色遮罩
	public static GUIDE_CONTROL_ROLE: string = "role";//添加角色
	public static GUIDE_CONTROL_TALK: string = "talk";//场景中角色对话
	public static GUIDE_CONTROL_MOVE: string = "move";//场景中角色移动
	public static GUIDE_CONTROL_GET_ROLE: string = "get_role";//显示获得先角色
	public static GUIDE_CONTROL_START_RISK: string = "start_risk";//继续冒险
	public static GUIDE_CONTROL_STOP_RISK: string = "stop_risk";//暂停冒险

	//loading流水id
	public static LOAD_ID: number = 1;

	public static PAY_GIVE_DOUBLE: boolean = false;

	public constructor() {

	}
	public static getLoadID(): number {
		return ++StaticData.LOAD_ID;
	}
	public static getEquipDecompose(level: number, quality: number): number {
		return Math.ceil((level + 10) / 20 + quality * 0.002 * Math.pow(((level + 10) / 10), 3));
	}
	public static parseGoodsListString(str: string): GoodBaseObj[] {
		let goodsList: GoodBaseObj[] = [];
		if (str) {
			var _arr: string[] = String(str).split("|");
			for (var i in _arr) {
				var _obj = new GoodBaseObj();
				_obj.initDataByStr(_arr[i]);
				if (goodsList == null)
					goodsList = [];
				goodsList.push(_obj);
			}
		}
		return goodsList;
	}
	public static getRoleCamp(camp: number): string {
		if (camp == 1) {
			return "魏";
		} else if (camp == 2) {
			return "蜀";
		} else if (camp == 3) {
			return "吴";
		} else {
			return "群";
		}
	}

	public static getRoleScoreIcon(score: number): string {
		if (score > 0 && score <= 20) {
			return "B";
		} else if (score > 20 && score <= 40) {
			return "A";
		} else if (score > 40 && score < 60) {
			return "A+";
		} else if (score > 60 && score <= 80) {
			return "S";
		} else {
			return "SSS";
		}
	}

	public static getRoleQualityIcon(quality: number): string {
		return "hero_frame_qt_" + quality + "_png";
	}
	public static getMoneyName(type: number): string {
		return StaticData.configVO.getMoneyObj(type).name;
	}
	public static getCountryRes(countryId: number): string {
		if (!countryId) return;
		countryId = countryId < 1 ? 1 : countryId;
		var source = "commonRes_json.common_icon_country_" + countryId + "_png";
		return source;
	}
	public static getQualityRes(type: number): string {
		return "commonRes_json.common_quality_" + type + "_png";
	}

	public static goodIconObj: Object = {};//物品id对应的icon
	public static getGoodIcon(id: number): string {
		if (id <= 10) {
			//游戏公用图标,金币/钻石/经验...
			return StaticData.getMoneyIcon(id, true);
		}
		var _good_type: string = StaticData.getGoodType(id);
		var _icon = StaticData.goodIconObj[id];
		_icon = !_icon ? id : _icon;
		if (_good_type == StaticData.TYPE_GOOD_MATER || _good_type == StaticData.TYPE_GOOD_DRAW_MATER) {
			//材料
			// _icon = Math.min(132, _icon);
			return "mater_icon_" + _icon + "_png";
		} else if (_good_type == StaticData.TYPE_GOOD_EQUIP || _good_type == StaticData.TYPE_GOOD_EQUIP_FINAL) {
			//装备
			_icon = Math.min(3176, _icon);
			return "equip_icon_" + _icon + "_png";
		} else if (_good_type == StaticData.TYPE_GOOD_DRAW) {
			//图纸
			_icon = Math.min(2167, _icon);
			return "draw_icon_" + _icon + "_png";
		} else if (_good_type == StaticData.TYPE_GOOD_PROP) {
			//其他物品
			return "other_icon_" + _icon + "_png";
		} else if (_good_type == StaticData.TYPE_HERO) {
			//英雄图标
			return StaticData.getRoleIcon(_icon);
		}
		return "";
	}
	public static getRoleIcon(id: number): string {
		// id = Math.min(230001, id);
		if (!id) return "";
		return "role_icon_" + id + "_png";
	}
	public static getGoodType(id: number): string {
		// 1303011
		if (id < 3) {
			return StaticData.TYPE_GOOD_MONEY;
		} else if (1300001 <= id && id <= 1303000) {
			//材料
			return StaticData.TYPE_GOOD_MATER;
		} else if (290001 <= id && id <= 295000) {
			//装备
			return StaticData.TYPE_GOOD_EQUIP;
		} else if (296001 <= id && id <= 300000) {
			//成品装备
			return StaticData.TYPE_GOOD_EQUIP_FINAL;
		} else if (1290001 <= id && id <= 1300000) {
			//图纸
			return StaticData.TYPE_GOOD_DRAW;
		} else if (1291000 <= id && id <= 1291999) {
			//炼精图纸
			return StaticData.TYPE_GOOD_DRAW_MATER;
		} else if (1300001 <= id && id <= 1304001) {
			//可使用道具
			return StaticData.TYPE_GOOD_PROP;
		} else if (230001 <= id && id <= 240000) {
			return StaticData.TYPE_HERO;
		} else if (220001 <= id && id <= 230000) {
			return StaticData.TYPE_CHAPTER;
		}
	}

	public static getReqHttpUrl(reqStr: string): string {
		if (StaticData.PLAT_ID == StaticData.PLATID_1013) {
			return StaticData.configVO.http_platform + reqStr + "?";
		}
		return StaticData.configVO.http_platform + reqStr + "?pf=" + StaticData.configVO.platform + "&openid=" + StaticData.OPEN_ID + "&openkey=" + StaticData.OPEN_KEY
	}
	public static getSexIcon(sex: number): string {
		sex = sex == 2 ? 0 : sex;
		return "common_icon_sex_" + sex + "_png";
	}
	public static getRoleName(roleID: number): string {
		// roleID = Math.min(230006, roleID);
		return "role_" + roleID;
	}
	public static getSkillName(id: number): string {
		return "ani_" + id;
	}
	public static getRoleResList(list: number[]): string[] {
		var _list: string[] = [];
		for (var i in list) {
			var _item = list[i];
			if (_item == 0) {
				continue;
			}
			_list = _list.concat(StaticFun.getAniMcList(StaticData.getRoleName(_item)));
		}
		return _list;
	}
	public static getBufIcon(id: number): string {
		return "commonRes_json.common_icon_zhan_png";
	}
	public static getHeadIcon(id: number): string {
		if (id == 0) {
			return "";
		}
		return "head_" + id + "_png";
	}
	public static getMoneyIcon(type: number, isBig: boolean = false): string {
		var _name: string = "";
		if (type == StaticData.MONEY_COIN) {
			_name = "coin";
		} else if (type == StaticData.MONEY_DIAMOND) {
			_name = "diamond";
		} else if (type == StaticData.GOOD_EXP) {
			_name = "exp";
		} else if (type == StaticData.MONEY_RMB) {
			_name = "rmb";
		} else if (type == StaticData.GOOD_FHZ) {
			_name = "fhz";
		} else {
			return "";
		}
		var _type = !isBig ? "_png" : "_1_png";
		return "common_icon_" + _name + _type;
	}

	public static setRoleStarsIcon(group: eui.Group, count: number, scale: number = 1, showEmpty: boolean = true) {
		group.removeChildren();
		for (let i = 0; i < 5; i++) {
			let _img = new eui.Image();
			if (i < count) {
				_img.source = "commonRes_json.common_icon_star_001_png";
			} else {
				if (showEmpty) { _img.source = "commonRes_json.common_icon_star_002_png"; }
			}
			group.addChild(_img);
			_img.scaleX = scale;
			_img.scaleY = scale;
		}
	}

	public static getRoleStatus(status: number): string {
		let _status: string = "";
		switch (status) {
			case 1:
				_status = "冒险中";
				break;
			case 2:
				_status = "上阵中";
				break;
			case 3:
				_status = "锻造中";
				break;
			case 4:
				_status = "销售中";
				break;
			case 5:
				_status = "使用中";
				break;
			default:
				_status = "闲置中";
				break;
		}
		return _status;
	}

	public static getWorkBarStyleIcon(type: number, id: number): string {
		let img = "";
		if (id < 5) {
			img = "mainRes_json.main_workbar_" + type + "_2_1_png";
		} else if (id >= 5 && id <= 8) {
			img = "mainRes_json.main_workbar_" + type + "_2_2_png";
		} else {
			img = "mainRes_json.main_workbar_" + type + "_2_3_png";
		}
		return img;
	}

	public static setLabelStyleByQuality(label: eui.Label, quality: number, stroke: number = 1) {
		label.stroke = stroke;
		var _list_text_color = [0Xcdb9ae, 0X5ae350, 0X89cef2, 0xf289e6, 0Xff9e2c, 0Xee3d3d];
		var _list_stroke_color = [0x5f402f, 0x173a1a, 0x253c61, 0x5e1e57, 0x563204, 0x500a0a];

		label.textColor = _list_text_color[quality - 1];
		label.strokeColor = _list_stroke_color[quality - 1];
	}

	public static getCampMeleeQuestionStr(oldStr: string, reStr: string): string {
		let newStr = oldStr.replace("#var", reStr);
		return newStr;
	}

	//0:所有 ,1:武器,2:防具,3:饰品,4:坐骑,
	public static getEquipTypeStr(type: number): string {
		if (type == 1) {
			return "武器";
		} else if (type == 2) {
			return "防具";
		} else if (type == 3) {
			return "饰品";
		} else if (type == 4) {
			return "坐骑";
		} else {
			return "所有装备";
		}
	}


}	