/**
 * Compute the maximum length of string between all string in a string array
 * @param {string[]} split 
 * @returns {number}
 */
export function maximumLength(array: string[]){
    var output = 0;
    for (let i = 0; i < array.length; i++){
		if (array[i].length > output) output = array[i].length
	}
    return output;
}

/**
 * Adds a certain number of spaces between each letter of the string given
 * @param {string} str 
 * @param {number} number 
 * @returns {string}
 */
export function addSpace(str: string, number: number){
    var space = ``
    for (let i = 0; i < number; i++){
		space += ` `
	}
    return str.split('').join(space);
}