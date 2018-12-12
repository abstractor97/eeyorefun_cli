

module game {

	export class ModelPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand {

		public constructor() {
			super();
		}
		public execute(notification: puremvc.INotification): void {
			this.facade.registerProxy(new LoadResProxy());
			this.facade.registerProxy(new GameBaseDataProxy());
			this.facade.registerProxy(new WebSocketProxy());
			this.facade.registerProxy(new RoleBaseDataProxy());
			this.facade.registerProxy(new GoodsBaseDataProxy());
			this.facade.registerProxy(new RedPointProxy());
			this.facade.registerProxy(new TaskProxy());
		}
	}
}