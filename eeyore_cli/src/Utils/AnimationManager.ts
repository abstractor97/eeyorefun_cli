/**
 *
 * @author 
 *
 */
class AnimationManager {
    private static _instance: AnimationManager;
    private factory: dragonBones.EgretFactory = new dragonBones.EgretFactory();
    public constructor() {
    }
    public static getInstance(): AnimationManager {
        if (this._instance == null) {
            this._instance = new AnimationManager();
        }
        return this._instance;
    }
    public delResource(name: string) {
        this.factory.removeDragonBonesData(name);
        this.factory.removeTextureAtlasData(name);
    }
    public addResourceListByName(name: string) {
        var fileList = StaticFun.getAnimationResList(name);
        this.addAniResource(fileList[0], fileList[1], fileList[2], name);
    }
    public addResourceCombatEffect(skill_id: number) {
        var _aniSkillName = StaticData.getSkillName(skill_id);
        if (skill_id < 30000) {
            var _fileList = StaticFun.getAnimationResList(_aniSkillName);
            var _type = skill_id < 20000 ? 1 : 2;
            this.addAniResource(_fileList[0], "skill_cell_" + _type + "_tex_json", "skill_cell_" + _type + "_tex_png", _aniSkillName);
        } else {
            this.addResourceListByName(_aniSkillName);
        }
    }
    public addAniResource(dragonbonesName: string, textureDataName: string, textureName: string, name?: string) {
        let dragonbonesData = RES.getRes(dragonbonesName);
        let textureData = RES.getRes(textureDataName);
        let texture = RES.getRes(textureName);
        if (this.factory.getDragonBonesData(name) && this.factory.getTextureAtlasData(name)) {
            return;
        }
        this.factory.parseDragonBonesData(dragonbonesData, name);
        this.factory.parseTextureAtlasData(textureData, texture, name);
    }
    public buildArmatureDisplay(armatureName: string, dragonBonesName?: string): dragonBones.EgretArmatureDisplay {
        let armatureDisplayA = this.factory.buildArmatureDisplay(armatureName, dragonBonesName);
        return armatureDisplayA;
    }
    public buildArmature(armatureName: string, dragonBonesName: string): dragonBones.Armature {
        var armture = this.factory.buildArmature(armatureName, dragonBonesName);
        return armture;
    }
    public removeDisCell(_dis_ani: dragonBones.EgretArmatureDisplay) {
        if (_dis_ani) {
            _dis_ani.dispose();
            StaticFun.removeDis(_dis_ani);
        }
    }
}
