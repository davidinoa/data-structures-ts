type BST = BinarySearchTree

export default class BinarySearchTree {
	value: number
	left?: BST
	right?: BST
	constructor(value: number) {
		this.value = value
	}

	insert(this: BST, value: number) {
		const newNode = new BinarySearchTree(value)
		let node = this
		while (node) {
			if (value < node.value) {
				if (!node.left) {
					node.left = newNode
					return newNode
				}
				node = node.left
			} else {
				if (!node.right) {
					node.right = newNode
					return newNode
				}
				node = node.right
			}
		}
		return node
	}

	contains(this: BST, value: number) {
		let node: BST | undefined = this
		while (node) {
			if (value < node.value) {
				node = node.left
			} else if (value > node.value) {
				node = node.right
			} else {
				return true
			}
		}
		return false
	}

	remove(this: BST, value: number, parent?: BST) {
		let node: BST | undefined = this
		while (node) {
			if (value < node.value) {
				parent = node
				node = node.left
			} else if (value > node.value) {
				parent = node
				node = node.right
			} else {
				if (node.left && node.right) {
					node.value = node.right.getMinValue()
					node.right.remove(node.value, node)
				} else if (!parent) {
					if (node.left) {
						node.value = node.left.value
						node.right = node.left.right
						node.left = node.left.left
					} else if (node.right) {
						node.value = node.right.value
						node.left = node.right.left
						node.right = node.right.right
					} else {
						throw new Error()
					}
				} else if (parent.left === node) {
					parent.left = node.left ?? node.right
				} else if (parent.right === node) {
					parent.right = node.left ?? node.right
				}
				break
			}
		}
	}

	private getMinValue(this: BST) {
		let node = this
		while (node.left) {
			node = node.left
		}
		return node.value
	}
}
