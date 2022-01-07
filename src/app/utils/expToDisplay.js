export default function expToDisplay(expressionState) {
	let display = expressionState.join('');

	display = display.replace(/([+\-÷×])(-?)(\.\d+)/g, '$1$20$3');
	display = display.replace(/([+\-÷×])(-\d+.?\d+?)/g, '$1($2)');
	//display = display.replace(/(\d)([+\-÷×])(-)?$/, '$1 $2 $3');

	display = display.replace(/(^[+÷×])/, '');
	display = display.replace(/(\d|\))([+\-÷×])/g, '$1 $2 ');

	// let display = [];
	// let tempDisplay = [];
	// let tempNumber = [];

	// //joining digits into numbers
	// expressionState.forEach((elem, index) => {
	//     if(typeof elem === NUMBER_TYPE){
	//         tempNumber.push(elem);
	//         if(typeof expressionState[index+1] !== NUMBER_TYPE){
	//             display.push(Number(tempNumber.join('')))
	//             tempNumber = []
	//         }
	//     }
	//     else display.push(elem);
	// })

	// //transforming .2 into 0.2
	// display.forEach((elem,index) => {
	//     if(typeof elem === NUMBER_TYPE && display[index+1] === OPERATORS.DOT) tempNumber = [elem, '.']
	//     else if(elem === OPERATORS.DOT && typeof display[index-1] !== NUMBER_TYPE){
	//             if(display.length === index+1)
	//                 tempDisplay.push(elem)
	//             else
	//                 tempNumber = [0, '.']
	//     }
	//     else if(elem !== OPERATORS.DOT && tempNumber.length){
	//         tempNumber.push(elem)
	//         tempDisplay.push(Number(tempNumber.join('')))
	//         tempNumber = []
	//     }
	//     else if(elem !== OPERATORS.DOT) tempDisplay.push(elem);
	// })

	// display = [...tempDisplay];
	// tempDisplay = []

	// //transforming 2+-2 to 2+(-2)
	// display.forEach((elem, index)=>{
	//     if(elem === OPERATORS.MINUS && typeof display[index-1] !== NUMBER_TYPE){
	//         tempNumber = ['(-', undefined, ')'];
	//     }
	//     else if(tempNumber.length){
	//         tempNumber[1] = elem;
	//         tempDisplay.push(tempNumber.join(''))
	//         tempNumber = []
	//     }
	//     else tempDisplay.push(elem);
	// })

	return display;
}
