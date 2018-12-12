class Stack<T>{
	private items: T[] = [];

	constructor() {
	}

	/**
	 * 入栈
	 */
	public pushStack(obj: T) {
		this.items.push(obj);
	}
	/**
	 * 出栈
	 */
	public popStack(): T {
		let result = this.items.pop();
		return result;
	}

	/**
	 * 如果栈为空的话返回true，否则就返回false
	 */
	public isEmpty(): Boolean {
		return this.items.length == 0;
	}
	/**
	 * 返回栈底元素
	 */
	public front(): T {
		return this.items[0];
	}
	/**
	 * 返回栈顶元素
	 */
	public behind(): T {
		return this.items[this.items.length - 1];
	}

	/**
	 * 返回栈长度
	 */
	public size(): number {
		return this.items.length;
	}

	/**
	 * 清空栈
	 */
	public clear() {
		this.items = [];
	}

	/**
	 * 返回栈
	 */
	public getElmentAll(): T[] {
		return this.items;
	}
	/**
	 * 获取指定栈索引元素
	 */
	public getStackElementByIndex(index: number): T {
		return this.items[index];
	}
	/**
	 * 删除指定栈索引元素
	 */
	public delStackElementByIndex(index: number) {
		let newItems: T[] = [];
		for (var i = 0; i < this.items.length; i++) {
			if (i != index) {
				newItems.push(this.items[i]);
			}
		}
		this.items = newItems;
	}
}