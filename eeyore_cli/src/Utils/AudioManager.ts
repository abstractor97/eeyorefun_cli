class AudioManager {
	private _save_key_main: string = "sound_main";
	private _save_key_effect: string = "sound_effect";

	private static _instance: AudioManager;
	private _isPlayEffec: boolean = true;
	private _isPlayMain: boolean = true;
	private _mainSoundChannel: egret.SoundChannel;
	public constructor() {
		if (AudioManager._instance != null) {
			Error("请使用getInstance()获取");
		}
		this._isPlayMain = egret.localStorage.getItem(this._save_key_main) != "0";
		this._isPlayEffec = egret.localStorage.getItem(this._save_key_effect) != "0";
	}
	public static getInstance(): AudioManager {
		if (AudioManager._instance == null) {
			AudioManager._instance = new AudioManager();
		}
		return AudioManager._instance;
	}
	public playEffecAudio(sd: string) {
		if (sd && this._isPlayEffec) {
			var sound: egret.Sound = RES.getRes(sd);
			if (sound) {
				sound.play(0, 1);
			} else {
				DebugLog.getInstance().showLog("playEffecAudio_fail:" + sd);
			}
		}
	}
	public playMainSound(sd: string, times: number = 0) {
		this.stopMainSound();
		if (sd) {
			var sound: egret.Sound = RES.getRes(sd);
			this._mainSoundChannel = sound.play(0, times);
			if (!this._isPlayMain) {
				this._mainSoundChannel.volume = 0;
			}
		}
	}

	public stopMainSound() {
		if (this._mainSoundChannel) {
			this._mainSoundChannel.stop();
		}
	}
	public setPlayEffec(isTrue: boolean) {
		this._isPlayEffec = isTrue;
		egret.localStorage.setItem(this._save_key_effect, this._isPlayEffec ? "1" : "0");
	}
	public isPlayMain(): boolean {
		return this._isPlayMain;
	}
	public isPlayEffec(): boolean {
		return this._isPlayEffec;
	}
	public setPlayMain(isTrue: boolean) {
		this._isPlayMain = isTrue;
		egret.localStorage.setItem(this._save_key_main, this.isPlayMain ? "1" : "0");
		if (this._mainSoundChannel) {
			if (this._isPlayMain) {
				this._mainSoundChannel.volume = 1;
			} else {
				this._mainSoundChannel.volume = 0;
			}
		}
	}
}