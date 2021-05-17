export default class BinaryTree {
	value: number
	left?: BinaryTree
	right?: BinaryTree
	constructor(value: number) {
		this.value = value
	}

	insertLeft(value: number) {
		this.left = new BinaryTree(value)
		return this.left
	}

	insertRight(value: number) {
		this.right = new BinaryTree(value)
		return this.right
	}
}
