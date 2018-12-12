class GravityParticleNewSystem extends particle.GravityParticleSystem {

	public constructor(texture: egret.Texture, config: any) {
		super(texture, config);
	}

	private _p0: Point;//起点
	private _p1: Point;//最高点
	private _p2: Point;//终点
	private _time: number;//动画时间

	public set P0(p0: Point) {
		this._p0 = p0;
	}

	public get P0(): Point {
		return this._p0;
	}

	public set P1(p1: Point) {
		this._p1 = p1;
	}

	public get P1(): Point {
		return this._p1;
	}

	public set P2(p2: Point) {
		this._p2 = p2;
	}

	public get P2(): Point {
		return this._p2;
	}

	public get valChange(): number {
		return 0;
	}

	public set valChange(value: number) {
		this.emitterX = (1 - value) * (1 - value) * this._p0.x + 2 * value * (1 - value) * this._p1.x + value * value * this._p2.x;
		this.emitterY = (1 - value) * (1 - value) * this._p0.y + 2 * value * (1 - value) * this._p1.y + value * value * this._p2.y;
	}
}