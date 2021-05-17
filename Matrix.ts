export default class Matrix<T> {
	rows: number
	columns: number
	initialValue: T
	storage: T[][]
	constructor(rows: number, columns: number, initialValue: T) {
		this.rows = rows
		this.columns = columns
		this.initialValue = initialValue
		this.storage = this.buildMatrix()
	}

	buildMatrix(): T[][] {
		const storage = []
		for (let i = 0; i < this.rows; i++) {
			const row = []
			for (let j = 0; j < this.columns; j++) {
				row.push(this.initialValue)
			}
			storage.push(row)
		}
		return storage
	}

	printMatrix() {
		console.log(this.storage)
	}
}
