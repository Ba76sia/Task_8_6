var a = 3;
var b = 4;
var value = (a * a) + (2 * a * b) - (b * b);
console.log(value);
if (value > 0) {
    console.log('variable value is positive');
} else if (value < 0) {
    console.log('variable value is negative');
} else {
    console.log('variable value equals 0');
}