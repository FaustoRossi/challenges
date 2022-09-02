import { shuffle } from "lodash";

export const fillTicketsArray = (arr) => {
	for (let i = 0; i < 9; i++) {
		arr[i] = new Array(3);
	}
};

//si un num esta entre 1/4 = first row, 5-7= second row, 8-9 = third row
// cuando hay un X , el orden puede que se desplaze
function findRowInColumn(num, col) {
	let rowNumber;
	const y = col * 10;
	if (num > y && num <= y + 4) {
		rowNumber = 0;
	} else if (num > y + 4 && num <= y + 7) {
		rowNumber = 1;
	} else if (num > y + 7 && num <= y + 10) {
		rowNumber = 2;
	}
	return rowNumber;
}

//el param col inicia como un aray vacio, => shuffle en index.js, obtiene random 3 nums,
export const fillTicketColumnWithSingleNumber = (arr, col) => {
	col[0].map((item) => {
		const num = getSingleNumber(item);

		const row = findRowInColumn(num, item);
		arr[item][row] = num;
	});
};

// de los 3 random nums, los itero en su respectiva escala del 1 al 10 (si fuera 5, obtengo 50-60)
function getSingleNumber(column) {
	let nums = [];
	for (let i = column * 10; i <= (column + 1) * 10; i++) {
		nums.push(i);
	}

	//barajo los arrays
	const numArray = shuffle(nums);
	//obtengo el primer num del array barajado
	const num = numArray[0];

	//obtego 3 random nums entre 1 y 90
	return num;
}
//el param columns utiliza el los restantes 6 nums que no toma la función anterior
export const fillRemainingNumber = (arr, columns) => {
	columns[0].map((item) => {
		// console.log(item, 'item');
		fillSingleNumber(arr, item);
	});
};

const fillSingleNumber = (arr, column) => {
	//misma funcion para devolver la escala
	let nums = [];
	let rows = [0, 1, 2];
	for (let i = column * 10 + 1; i <= (column + 1) * 10; i++) {
		nums.push(i);
	}
	// console.log(column, "column");
	//barajo  el orden de los numeros
	const newNums = shuffle(nums);

	//barajo el orden de las rows
	const newRows = shuffle(rows);

	//estos son los dos nums que van a ocupar una fila

	//extraigo primer num del array
	const num1 = newNums[0];

	//extraigo 2do
	const num2 = newNums[1];
	//primer random row barajada
	const row1 = newRows[0];
	//2da random row barajada
	const row2 = newRows[1];

	//logica para rellnear los numeros en orden creciente
	if (num1 > num2 && row1 > row2) {
		arr[column][row1] = num1;
		arr[column][row2] = num2;
	} else if (num1 > num2 && row1 < row2) {
		arr[column][row2] = num1;
		arr[column][row1] = num2;
	} else if (num1 < num2 && row1 > row2) {
		arr[column][row2] = num1;
		arr[column][row1] = num2;
	} else if (num1 < num2 && row1 < row2) {
		arr[column][row1] = num1;
		arr[column][row2] = num2;
	}
};

export const fillZeroAtEmptyPlace = (arr) => {
	console.log(arr)
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			//donde no se ubicaron numeros, se devuelve X
			if (arr[i][j] === undefined) {
				arr[i][j] = "X";
			}
		}
	}
};
