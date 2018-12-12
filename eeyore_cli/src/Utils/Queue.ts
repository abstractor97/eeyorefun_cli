class Queue<T> {
	private items: T[] = [];

	public constructor() {
	}
	/**
	 * 入队
	 */
	public enqueue(obj: T) {
		this.items.push(obj);
	}
	/**
	 * 出队
	 */
	public dequeue(): T {
		let result = this.items.shift();
		return result;
	}

	public isEmpty(): Boolean {
		return this.items.length == 0;
	}
	/**
	 * 返回队首元素
	 */
	public front(): T {
		return this.items[0];
	}
	/**
	 * 返回队尾元素
	 */
	public behind(): T {
		return this.items[this.items.length - 1];
	}

	/**
	 * 返回队列长度
	 */
	public size(): number {
		return this.items.length;
	}

	/**
	 * 清空队列
	 */
	public clear() {
		this.items = [];
	}

	/**
	 * 返回队列
	 */
	public getElmentAll(): T[] {
		return this.items;
	}
	/**
	 * 获取指定索引元素
	 */
	public getQueueElementByIndex(index: number): T {
		return this.items[index];
	}
	/**
	 * 删除指定索引元素
	 */
	public delQueueElementByIndex(index: number) {
		let newItems: T[] = [];
		for (var i = 0; i < this.items.length; i++) {
			if (i != index) {
				newItems.push(this.items[i]);
			}
		}
		this.items = newItems;
	}
}