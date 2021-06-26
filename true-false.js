/**
 * Falsy values are:
 * 0 is always false, but '0' is true because that is a string
 * myVar = false is false, but 'false' is true because now it is a string
 * '' empty string false but ' ' white space is true
 * null is false
 * NaN is false
 * undefined is false
 */
/**
 * Truthy values are:
 * []
 * {}
 * all strings except empty stings
 * ' ' white space
 */

let userName = 0;
if (userName || userName == 0) {
	console.log("condition is true");
} else {
	console.log("condition is false");
}
