import React from "react";
import lodash, { shuffle } from "lodash";
import {
	fillTicketColumnWithSingleNumber,
	fillTicketsArray,
	fillRemainingNumber,
	fillZeroAtEmptyPlace,
} from "./createTicket";

// de 9 columnas tenemos 15 numeros. Para llenar cada columna entre 1 y 2 nums, 6 columnas se quedan con 2 nums, y las 3 restantes con uno
const Ticket = () => {
	let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

	let columnsWithOneNumberOnly = [];
	let remainingColumns = [];

	const ticketsArray = new Array(3);

	function getColumnsWithOneNumberOnly() {
		//se barajan 3 random nms entre 0 y 8
		const shuffledArr = shuffle(arr);
		console.log(shuffledArr);
		//corto los primeros 3
		columnsWithOneNumberOnly.push(shuffledArr.slice(0, 3));
		//guardo el resto
		remainingColumns.push(shuffledArr.slice(3));
	}

	getColumnsWithOneNumberOnly();
	fillTicketsArray(ticketsArray);
	fillTicketColumnWithSingleNumber(ticketsArray, columnsWithOneNumberOnly);
	fillRemainingNumber(ticketsArray, remainingColumns);

	fillZeroAtEmptyPlace(ticketsArray);

	return (
		<div className=" h-screen w-screen flex flex-col justify-center text-center  items-center p-20 bg-gray-400">
			<h1 className="text-2xl text-black">Ticket</h1>
			<div className="flex justify-center items-center m-auto shadow-xl mt-4 border bg-gray-100 border-gray-200  rounded-lg">
				{ticketsArray.map((rows, index) => (
					<div key={index} className="flex flex-col justify-items-center p-3">
						{rows.map((columns, i) => {
							return (
								<button
									key={i}
									className="flex font-semibold p-4 flex-col m-3 rounded-xl border bg-gray-200 border-gray-300 shadow-xl cursor-pointer"
								>
									{columns}
								</button>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
};
export default Ticket;
