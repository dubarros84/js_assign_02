let add2 = [1, 2 , 3, 4, 5]
function assign3(array){
	for ( let i = 0; i < array.length; i++ ) {
		array[i] = array[i] + 2;
	}
console.log(array);
}

assign3(add2)