/**
 *
 * @author 
 *
 */
class StaticFun {
    public constructor() {
    }
    public static getDisTexture(dis: egret.DisplayObject): egret.RenderTexture {
        if (!dis) {
            return;
        }
        var renderTexture: egret.RenderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(dis);
        return renderTexture;
    }

    //把点变成线
    public static posCheckLine(_posList: number[]): number[][] {
        _posList.sort(function (a: number, b: number): number {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        });
        var _tempPointList: number[][] = [];
        for (var m: number = 0; m < _posList.length; m++) {
            var _pos2: number = _posList[m];
            if (_tempPointList.length > 0) {
                var _lastList: number[] = _tempPointList[_tempPointList.length - 1];
                var _lastPos: number = _lastList[_lastList.length - 1];
                var _disNum: number = Math.abs(_pos2 - _lastPos);
                if (_disNum == 1) {
                    _lastList.push(_pos2);
                    _tempPointList[_tempPointList.length - 1] = _lastList;
                } else if (_disNum > 1) {
                    _tempPointList.push([_pos2]);
                }
            } else {
                _tempPointList.push([_pos2]);
            }
        }
        return _tempPointList;
    }
    public static slotChangeDisplay(dis_flower_ani: dragonBones.EgretArmatureDisplay, slotName: string, b: egret.Bitmap, anchorX?: string) {
        var slot = dis_flower_ani.armature.getSlot(slotName);
        b.x = slot.display.x;
        b.y = slot.display.y;
        anchorX = anchorX ? anchorX : "center";
        if (anchorX == "center") {
            b.anchorOffsetX = b.width / 2;
        } else if (anchorX == "right") {
            b.anchorOffsetX = 0;
        } else if (anchorX == "left") {
            b.anchorOffsetX = b.width;
        }

        b.anchorOffsetY = b.height / 2;
        slot.setDisplay(b);
    }
    public static scrollRefresh(scroller: eui.Scroller, list?: any[], list_c?: eui.List) {
        var _num: number = scroller.viewport.scrollV;
        list_c.dataProvider = new eui.ArrayCollection(list);
        // this.initEventListData(this._eventList);
        _num = Math.min(_num, scroller.viewport.contentHeight);
        _num = Math.max(_num, 0);
        egret.Tween.get(this).wait(100).call(() => {
            scroller.viewport.scrollV = _num;
        });
    };

    public static removeDis(dis: egret.DisplayObject) {
        if (dis && dis.parent) {
            dis.parent.removeChild(dis);
        }
    }
    public static getDisByPos(sPos: egret.Point, ePos: egret.Point): number {
        var _disX: number = sPos.x - ePos.x;
        var _disY: number = sPos.y - ePos.y;
        return Math.sqrt(Math.pow(_disX, 2) + Math.pow(_disY, 2));
    }
    public static getAniMcList(name: string): string[] {
        var _list: string[] = [];
        _list.push(name + "_json");
        _list.push(name + "_png");
        return _list;
    }
    public static getAnimationResList(name: string): string[] {
        var _list: string[] = [];
        _list.push(name + "_ske_json");
        _list.push(name + "_tex_json");
        _list.push(name + "_tex_png");
        return _list;
    }
    public static creatParticle(_pname: string, _target: egret.DisplayObjectContainer): GravityParticleNewSystem {
        if (_target != null) {
            let texture = RES.getRes(_pname + "_png");
            let config = RES.getRes(_pname + "_json");
            var _particle = new GravityParticleNewSystem(texture, config);
            _target.addChild(_particle);
            _particle.touchEnabled = false;
            _particle.start();
            return _particle;
        } else {
            console.log("装载容器不存在");
        }
    }

    public static setLabelStr(lb: eui.Label, str: string) {
        lb.text = StaticFun.changeStrByWidth(str, lb.size, lb.width);
    }
    public static changeStrByWidth(str: string, fSize: number, fWidth: number): string {
        if (!str) {
            return "";
        }
        var _tempLb: eui.Label = new eui.Label();
        _tempLb.size = fSize;
        var _tempStr: string;
        for (var i: number = 0; i <= str.length; i++) {
            _tempStr = str.substr(0, i);
            _tempLb.text = _tempStr;
            if (_tempLb.width > fWidth) {
                _tempStr = str.substr(0, i - 1) + ".";
                break;
            }
        }
        return _tempStr;
    }
    public static setBtnEnable(btn: egret.DisplayObject, isEnable: boolean) {
        if (isEnable) {
            // btn.filters = [];
            btn.alpha = 1;
            btn.touchEnabled = true;
        } else {
            btn.alpha = 0.5;
            // btn.filters = [StaticFun.getNoColorFilter()];
            btn.touchEnabled = false;
        }
    }
    public static getNoColorFilter(): egret.ColorMatrixFilter {
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        return new egret.ColorMatrixFilter(colorMatrix);
    }
    /**
		 * 转换时间格式
		 * @param time 时间(秒)
		 * @param type 类型,0:"00:00:00",1:"00小时00分钟00秒",2:"00天00小时",3:"00:00",4:"00小时00分";
		 * @return 
    **/
    public static changeTimeStr(time: number, type: number = 0): string {
        if (time <= 0) {
            if (type == 0) {
                return "00:00:00";
            } else if (type == 1) {
                return "0";
            } else if (type == 2) {
                if (time == 0) {
                    return "永久";
                } else if (time == -1) {
                    return "已过期";
                }
            } else if (type == 3) {
                return "00:00";
            }
        }

        var thisD: number = Math.floor(time / (3600 * 24));
        var _num: number = type == 1 || type == 2 ? time % (3600 * 24) : time;
        var thisH: number = Math.floor(_num / 3600);
        var thisM: number = Math.floor((_num % 3600) / 60);
        var thisS: number = Math.floor((_num % 3600) % 60);
        var _str: string = "";

        if (thisD > 0 && type != 2) {
            // type = 1;
        }
        if (type == 0) {
            if (thisH < 10) {
                _str += "0" + thisH + ":";
            } else {
                _str += thisH + ":";
            }
            if (thisM < 10) {
                _str += "0" + thisM + ":";
            } else {
                _str += thisM + ":";
            }
            if (thisS < 10) {
                _str += "0" + thisS;
            } else {
                _str += "" + thisS;
            }

        } else if (type == 1) {
            if (thisD > 0) {
                _str = thisD + "天";
            }
            if (thisH > 0) {
                _str += thisH + "小时";
            }
            if (thisM > 0) {
                _str += thisM + "分钟";
            } else if (thisH > 0 && thisS > 0) {
                _str += "零";
            }
            if (thisS > 0) {
                _str += thisS + "秒";
            } else if (thisM > 0) {
                _str += thisS + "秒"
            }
        } else if (type == 2) {
            if (thisD > 0) {
                _str = thisD + "天";
            }
            if (thisH == 0 && thisM > 0) {
                thisH = 1;
            }
            if (thisH > 0) {
                _str += thisH + "小时";
            }
        } else if (type == 3) {

            thisM = Math.floor(time / 60);
            if (thisM < 10) {
                _str += "0" + thisM + ":";
            } else {
                _str += thisM + ":";
            }
            if (thisS < 10) {
                _str += "0" + thisS;
            } else {
                _str += "" + thisS;
            }

        } else if (type == 4) {

            if (thisH > 0) {
                _str += thisH + "小时";
            }
            if (thisM == 0 && thisS > 0) {
                thisM = 1;
            }
            if (thisM > 0) {
                _str += thisM + "分钟";
            }

        }
        return _str;

    }
    public static getNumStr(num: number): string {
        if (num < 10000) {
            return num + "";
        } else if (num < 100000000) {
            return Math.floor(10 * num / 10000) / 10 + "万";
        } else {
            return Math.floor(10 * num / 100000000) / 10 + "亿";
        }
    }
    public static getNumEnStr(num: number, floor: number = 2): string {
        var _K: number = 1000;
        var _M: number = Math.pow(_K, 2);
        var _B: number = Math.pow(_K, 3);
        var _T: number = Math.pow(_K, 4);
        var _KT: number = Math.pow(_K, 5);
        var _MT: number = Math.pow(_K, 6);
        var _BT: number = Math.pow(_K, 7);
        var _TT: number = Math.pow(_K, 8);
        var _len: number = 3;
        var _floor: number = Math.pow(10, floor);
        if (num >= _TT) {
            return getDecCount(num / _TT) + "TT";
            // return Math.floor(_floor * num / _TT) / _floor + "TT";
        } else if (num >= _BT) {
            return getDecCount(num / _BT) + "BT";
            // return Math.floor(_floor * num / _BT) / _floor + "BT";
        } else if (num >= _MT) {
            return getDecCount(num / _MT) + "MT";
            // return Math.floor(_floor * num / _MT) / _floor + "MT";
        } else if (num >= _KT) {
            return getDecCount(num / _KT) + "KT";
            // return Math.floor(_floor * num / _KT) / _floor + "KT";
        } else if (num >= _T) {
            return getDecCount(num / _T) + "T";
            // return Math.floor(_floor * num / _T) / _floor + "T";
        } else if (num >= _B) {
            return getDecCount(num / _B) + "B";
            // return Math.floor(_floor * num / _B) / _floor + "B";
        } else if (num >= _M) {
            return getDecCount(num / _M) + "M";
            // return Math.floor(_floor * num / _M) / _floor + "M";
        } else if (num >= _K) {
            return getDecCount(num / _K) + "K";
            // return Math.floor(_floor * num / _K) / _floor + "K";
        } else {
            return num + "";
        }
        //获取小数位数
        function getDecCount(num: number): number {
            var _temp = Math.floor(num);
            var floor = _len - String(_temp).length;
            var _floor: number = Math.pow(10, floor);
            return Math.floor(_floor * num) / _floor
        }
    }
    public static addTouchTap(btn: egret.DisplayObject, callBack: Function, target: any) {
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, callBack.bind(target), target);
    }
    public static removeTouchTap(btn: egret.DisplayObject, callBack: Function, target: any) {
        btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, callBack.bind(target), target);
    }
    public static getObjList(dataObj: Object): Object[] {
        return dataObj["DATA"]["list"];
    }
    public static getListByNum(list: Object[], num: number): Object[] {
        var _tempList: Object[] = [];
        var _rowNum: number = Math.ceil(list.length / num);
        for (var i: number = 0; i < _rowNum; i++) {
            var _startNum: number = i * num;
            var _endNum: number = _startNum + num;
            _tempList.push(list.slice(_startNum, _endNum));
        }
        return _tempList;
    }

    /*  3点方向为0度;
        posS:起点
        posE:终点
    */
    public static getAngle(sPos: Point, ePos: Point): number {
        var _disX = (ePos.x - sPos.x);
        var _disY = (ePos.y - sPos.y);
        var _rNum: number = Math.atan2(_disY, _disX) * 180 / Math.PI;
        return Math.ceil(_rNum);
    }

    public static scrollHideBar(sc_map: eui.Scroller) {
        sc_map.horizontalScrollBar.autoVisibility = false;
        sc_map.verticalScrollBar.autoVisibility = false;
        sc_map.horizontalScrollBar.visible = false;
        sc_map.verticalScrollBar.visible = false;
    }

    public static getRect(w: number, h: number, color: number = 0xFFFFFF, alpha: number = 1): egret.Sprite {
        var _sp: egret.Sprite = new egret.Sprite();
        _sp.graphics.beginFill(color, alpha);
        _sp.graphics.drawRect(0, 0, w, h);
        _sp.graphics.endFill();
        return _sp;
    }
    public static setDisPos(dis: egret.DisplayObject, pos: egret.Point) {
        if (!dis || !pos) {
            return;
        }
        dis.x = pos.x;
        dis.y = pos.y;
    }
    public static setDisCenter(dis: egret.DisplayObject, disBG: egret.DisplayObject) {
        dis.x = (disBG.width - dis.width) / 2;
        dis.y = (disBG.height - dis.height) / 2;
    }
    //type=1 年/月/日  type=2 月/日 时:分
    public static getTimestampStr(time: number, type: number = 1): string {
        var _date = new Date(time * 1000);
        var _timeStr: string;
        if (type == 1) {
            _timeStr = _date.getFullYear() + "/" + (_date.getMonth() + 1) + "/" + _date.getDate();
        } else if (type == 2) {
            var _h = _date.getHours();
            var _hStr = _h < 10 ? "0" + _h : _h;

            var _m = _date.getMinutes();
            var _mStr = _m < 10 ? "0" + _m : _m;

            _timeStr = (_date.getMonth() + 1) + "/" + _date.getDate() + " " + _hStr + ":" + _mStr;
        }
        return _timeStr;
    }
    /**
		 * 获得随机数
		 *@param num:随机值
		 *@param type:范围,0:0-(num-1),-1>(-num+1)-(num-1),-2:-num/num;
		 **/
    public static getRandNum(num: number, type: number = 0): number {
        var _value: number = 0;
        if (type == 0) {
            _value = Math.random() * num >> 0;
        } else if (type == -1) {
            _value = (Math.random() * num >> 0) - (Math.random() * num >> 0);
        } else if (type == -2) {
            _value = num * (Math.random() * 1 > 0.5 ? 1 : -1);
        }
        return _value;
    }
    public static getRandPosByRect(rect: egret.Rectangle): Point {
        var _pos = new Point(rect.x, rect.y);
        _pos.x += StaticFun.getRandNum(rect.width);
        _pos.y += StaticFun.getRandNum(rect.height);
        return _pos;
    }
    public static getRandObj(obj: Object): any {
        var _len: number = Object.keys(obj).length;
        var _start: number = 0;
        var _end: number = StaticFun.getRandNum(_len);
        for (var i in obj) {
            if (_start == _end) {
                return obj[i];
            }
            _start++;
        }
    }
    public static getRandList(list: any[], count: number = 1): any[] {
        if (list.length < count) {
            return list;
        }
        var _tempList: any[] = list.concat();
        var _getList: any[] = [];
        for (var i = 0; i < count; i++) {
            _getList.push(_tempList.splice(StaticFun.getRandNum(_tempList.length), 1)[0]);
        }
        return _getList;
    }
    public static printObj(obj: Object, isList: boolean = true): void {
        if (isList == true) {
            var list: any[] = obj as any[];
            for (var i = 0; i < list.length; i++) {
                console.log(list[i]);
            }
        } else {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    console.log("printObj", obj[key]);
                }
            }
        }
    }

    //判断两对象是否相等
    public static isObjectValueEqual(a, b) {
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);

        if (aProps.length != bProps.length) {
            return false;
        }

        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];

            if (a[propName] !== b[propName]) {
                return false;
            }
        }
        return true;
    }


    public static printResListName(groupName: string): void {
        var _tempList: RES.ResourceItem[] = RES.getGroupByName(groupName);
        for (var i in _tempList) {
            console.log("RES:", groupName, i, _tempList[i].name);
        }
    }
    public static checkHave(list: any[], id: number, typeStr?: string): Boolean {
        for (var i = 0; i < list.length; i++) {
            var _id: number;
            if (typeStr == null) {
                _id = list[i] as number;
            } else {
                _id = list[i][typeStr];
            }
            if (_id == id) {
                return true;
            }
        }
        return false;
    }
    /*
    index:序列号
    rowNum:一排有几个
    disX:X方向距离
    disY:Y方向距离
    type=x,左右上下, type=y 上下左右
    */
    public static getListPoint(index: number, rowNum: number, disX: number, disY: number, type: string = "x"): Point {
        var n: number = 0;
        var point: Point = new Point();
        if (index != 0 && rowNum != 0) {
            n = Math.floor(index / rowNum);
        }
        if (type == "x") {
            point.x = disX * (index - rowNum * n);
            point.y = disY * n;
        } else {
            point.x = disX * n;
            point.y = disY * (index - rowNum * n);
        }
        return point;
    }
    /**
     * 数组去重
     */
    public static distinctArray(array: number[]): number[] {
        let result = [], len = array.length;
        array.forEach(function (v, i, arr) {
            var bool = arr.indexOf(v, i + 1);
            if (bool === -1) {
                result.push(v);
            }
        })
        return result;
    }
    /**
     * 删除arr1中包含arr2中的值
     */
    public static arrayDelInclude(arr1: Array<number>, arr2: Array<number>): number[] {
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                if (arr2[j] == arr1[i]) {
                    arr1.splice(i, 1)
                }
            }
        }
        return arr1;
    }

    /**
     * 找出json中的同级对象
     * @param _baseObj json值
     * @param _k 键
     * @param _kval 值
     */

    public static findJsonSameK(_baseObj: Array<any>, _k: string, _kval): Object {
        let _len = _baseObj.length;
        for (let i = 0; i < _len; i++) {
            if (_baseObj[i][_k] === _kval) {
                return _baseObj[i];
            }
        }
    }

    public static copyToClipboard(copyStr: string, callback?: Function) {
        if (!copyStr)
            return;
        if (egret.Capabilities.runtimeType == egret.RuntimeType.WEB) {
            let input = document.createElement("input");
            input.readOnly = true;
            input.value = copyStr;
            document.body.appendChild(input);
            input.select();
            input.setSelectionRange(0, input.value.length);
            let bool: boolean = document.execCommand("Copy");
            document.body.removeChild(input);
            if (bool && callback != null)
                callback.call(null);
            if (bool == false) {
                console.log("web copy failed");
            }
        }
        else if (egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME) {
            platform.setClipboardData({
                data: copyStr,
                success: callback,
                fail: function () {
                    console.log("wx copy failed");
                }
            });
        }
    }


    /**
     * 获取数组中不重复元素
     * 
     */
    public static getUniqueArray(arr): Array<any> {
        var result = [], hash = {};
        for (var i = 0, elem; (elem = arr[i]) != null; i++) {
            if (!hash[elem]) {
                result.push(elem);
                hash[elem] = true;
            }
        }
        return result;
    }

    /**
     * 获取数组重复出现过的元素
     */
    public static getRepetArray(arr: Array<any>): Array<any> {
        var result = [];
        arr.forEach(function (item) {
            if (arr.indexOf(item) != arr.lastIndexOf(item) && result.indexOf(item) == -1)
                result.push(item);
        })
        return result;
    }

    /**
     * 如果A和B有共同属性c,且A.c属性值不为null,则B.c = A.c
     */
    public static copyObjAttrAToB(aObj: Object, bObj: Object) {
        for (let k in aObj) {
            if (bObj.hasOwnProperty(k) && (aObj[k] != null)) {
                bObj[k] = aObj[k];
            }
        }
    }
    public isObjectValueEqual(a, b): boolean {
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);
        if (aProps.length != bProps.length) {
            return false;
        }

        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
            if (a[propName] !== b[propName]) {
                return false;
            }
        }
        return true;
    }


    public static setPgbarStyle(pgb: eui.ProgressBar, tweenTime: number, floorBg: string, thumb: string, fontColor: number) {
        (pgb.getChildAt(0) as eui.Image).source = floorBg;
        (pgb.getChildAt(1) as eui.Image).source = thumb;
        (pgb.getChildAt(2) as eui.Label).textColor = fontColor;
        pgb.slideDuration = tweenTime;
    }

    public static getNumAddOrLess(num: number): string {
        if (num >= 0) {
            return "增加";
        }
        return "减少";
    }
}