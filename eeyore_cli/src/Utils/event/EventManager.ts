/**
 *
 * @author 
 *
 */
class EventManager extends egret.EventDispatcher {
    public static REC_EVENT: string = "rec_event";//发送主事件
    public static EVENT_USER_INFO_CHANGE: string = "event_user_info_change";//玩家信息发生变化
    public static EVENT_LANG_CHANGE: string = "event_lang_change";//语言切换
    public static EVENT_MALL_GOOD_TAP: string = "event_mall_good_tap";//点击商城物品
    public static EVENT_RANK_LIST_TAP: string = "event_rank_list_tap";//排行榜列表点击事件
    public static EVENT_EMAIL_LIST_TAP: string = "event_email_list_tap";//点击邮件
    public static EVENT_TAP_TASK_LIST: string = "event_tap_task_list";//点击任务列表
    public static EVENT_GET_TASK_COM: string = "event_get_task_com";//成功领取任务奖励
    public static EVENT_GET_COLLECT_COM: string = "event_get_collect_com";//成功领取收集奖励
    public static EVENT_SHOW_USER_INFO: string = "event_show_user_info";//显示用户信息
    public static EVENT_GAME_DO: string = "event_game_do";//游戏操作
    public static EVENT_PAY_RESULT: string = "event_pay_result";//支付结果返回
    public static EVENT_SHARE_RESULT: string = "event_share_result";//分享结果返回
    public static EVENT_ADD_SHORTCUT: string = "event_add_shortcut";//发送到桌面
    public static EVENT_ADD_POWER: string = "event_add_power";//增加体力
    public static EVENT_SCENE_ROLE_COUNT_CHANGE: string = "event_scene_role_count_change";//培育室或军营的角色数量发生改变
    public static EVENT_RISK_EVENT_ADV_TAP: string = "event_risk_event_adv_tap";//冒险主动事件列表点击
    public static EVENT_FRIEND_LIST: string = "event_friend_list";//好友列表事件
    public static EVENT_USER_POWER_CHANGE: string = "event_user_power_change";//用户战斗力改变事件
    public static EVENT_SEVEN_LOGIN_LIST_TAP: string = "event_seven_login_list_tap";//点击七日登录领取物品列表

    public static EVENT_SHOW_GOOD_INFO: string = "event_show_good_info";//显示物品详情
    public static EVENT_PAY_FOR_MONEY: string = "event_pay_for_money";//支付

    public static EVENT_TOP_USER_INFO_ADD: string = "event_top_btn_shop";//顶部Add按钮shopping事件

    public static EVENT_GUIDE_ADD_ERASE_DIS: string = "event_guide_add_erase_dis";//添加新手镂空对象;
    public static EVENT_GUIDE_ADD_ROLE_DIS: string = "event_guide_add_role_dis";//添加新手角色;
    public static EVENT_GUIDE_DEL_ALL_ROLE: string = "event_guide_del_all_role";//删除所有已添加新手角色;

    public static EVENT_ACTIVITY_LIST_TAP: string = "event_activity_list_tap";//点击活动标题列表item事件
    public static EVENT_ACTIVITY_GET_ITEM: string = "event_activity_get_item";//获取活动奖励时间

    public static EVENT_MELEE_ROLE_LIST_TAP: string = "event_melee_role_list_tap";//点击三国大乱斗角色列表
    public static EVENT_REFUSH_CAMP_MELEE_VIEW: string = "event_refush_camp_melee_view";//刷新三国大乱斗

    public static EVENT_LINEUPPED_ROLE_TAP; string = "event_lineupped_role_tap";//点击已上阵英雄ITEM
    public static EVENT_ROLE_COLLECT_TAP: string = "event_role_collect_tap";//点击图鉴列表
    public static EVENT_PROPERTY_LOCK: string = "event_property_lock";//对装备或英雄上锁
    public static EVENT_HERO_FIRE_ITEM_TAP: string = "event_hero_fire_item_tap";//解雇英雄列表点击事件
    public static EVENT_HERO_LIST_CHOOSE_ITEM_TAP: string = "event_hero_list_choose_item_tap";//点击英雄选择列表
    public static EVENT_LINEUPPED_EMPTY_TAP: string = "event_lineupped_empty_tap";//点击上阵列表空位置
    public static EVENT_HERO_LIST_ITEM_TAP: string = "event_hero_list_item_tap";//英雄列表查看英雄
    public static EVENT_HERO_USE_EXP_GOODS: string = "event_hero_use_exp_goods";//单次使用经验瓶
    public static EVENT_HERO_CHANGE_EQUIP_TAP: string = "event_hero_change_equip_tap";//英雄更换装备事件
    public static EVENT_HERO_LINE_MOVE_ITEM: string = "event_hero_line_move_item";//英雄上下阵ITEM拖动
    public static EVENT_HERO_LINE_CHANGE: string = "event_hero_line_change";//英雄上下阵拖动改变阵容事件
    public static EVENT_HERO_EXTEND_CHOOSE_TAP: string = "event_hero_extend_choose_tap";//英雄继承选择英雄事件
    public static EVENT_ROLE_LIST_TAP: string = "event_role_list_tap";//点击英雄列表
    public static EVENT_HERO_LEVEL_UP: string = "event_hero_level_up";//英雄升级觉醒事件
    public static EVENT_HERO_FILTER_TAP: string = "event_hero_filter_tap";//英雄列表筛选
    public static EVENT_HERO_FILTER_COLLECT_TAP: string = "event_hero_filter_collect_tap";//英雄图鉴筛选
    public static EVENT_HERO_FILTER_CHOOSE_LIST_TAP: string = "event_hero_filter_choose_list_tap";//英雄选择列表筛选
    public static EVENT_DEPOT_LIST_TAP: string = "event_depot_list_tap";//仓库点击

    public static EVENT_FACTORY_WORKBAR_TAP: string = "event_factory_workbar_tap";//工作台点击事件
    public static EVENT_WORKBAR_HERO_CHOOSE_TAP: string = "event_workbar_hero_choose_tap";//工作台更换选择英雄
    public static EVENT_WORKBAR_PRODUCE_ITEM_TAP: string = "event_workbar_produce_item_tap";//工作台点击生产位置ITEM事件
    public static EVENT_WORKBAR_UPDATE_VIEW_DATA: string = "event_workbar_update_view_data";//工作台刷新视图数据事件
    public static EVENT_WORKBAR_FORMULA_USE_TAP: string = "event_workbar_formula_use_tap";//使用配方
    public static EVENT_WORKBAR_DUANG_USE_TAP: string = "event_workbar_duang_use_tap";//打造
    public static EVENT_WORKBAR_DUANG_OVER: string = "evetn_workbar_duang_over";//打造完成
    public static EVENT_WORKBAR_LEVEL_OVER: string = "event_workbar_level_over";//升级成功事件
    public static EVENT_WORKBAR_GET_ALL: string = "event_workbar_get_all";//一键收取装备事件
    //public static EVENT_WOKRBAR_FILTER_MADE_EQUIP: string = "event_workbar_filter_made_equip";//筛选打造装备

    public static EVENT_SALE_STORE_ONEKEYUP_TAP: string = "event_sale_store_onekeyup_tap";//销售铺一键上架
    public static EVENT_SALE_CUPBOARD_INFO_CHOOSE_TAP: string = "event_sale_cupboard_info_choose_tap";//销售铺单个货柜详情选中货物上架
    public static EVENT_SALE_CUPBOARD_GOODS_DOWN_TAP: string = "event_sale_cupboard_goods_down_tap";//销售店铺货物下架
    public static EVENT_SALE_HERO_CHANGE_TAP: string = "event_sale_hero_change_tap";//柜台更换英雄
    public static EVENT_SALE_CUPBOARD_FILTER_EQUIP: string = "event_sale_cupboard_filter_equip";//柜台筛选装备
    public static EVENT_SALE_EVENT_REFUSH: string = "event_sale_event_refush";//刷新贸易信息

    public static EVENT_BAZAAR_BUY_EQUIP_TAP: string = "event_bazaar_buy_equip_tap";//集市购买装备
    public static EVENT_BAZAAR_EQUIP_LEVEL_TAP: string = "event_bazaar_equip_level_tap";//选择装备等级
    public static EVENT_BAZAAR_MINE_EQUIP_TAP: string = "event_bazaar_mine_equip_tap";//集市我的货柜选中装备


    private static _instance: EventManager;
    public constructor() {
        super();
    }
    public static getInstance(): EventManager {
        if (this._instance == null) {
            this._instance = new EventManager();
        }
        return this._instance;
    }
    public sendEvent(name: string, data: any = null, type?: string): void {
        this.dispatchEvent(new CustomEventMy(name, data, type));
    }

}
