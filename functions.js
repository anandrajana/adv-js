console.log('//Constructor function or Instance Function//');
function Gadget(name,color){
	this.name = name;
	this.color = color;
	this.whatAreYou = function(){
		return 'A am a ' + this.color + ' ' + this.name;
	}
}
var newtoy = new Gadget('webcam', 'black');
console.log(newtoy.name);
console.log(newtoy.color);
console.log(newtoy.whatAreYou());



console.log("//Private Inner Function//");

function a(param){
	function b(theinput){
		return theinput * 2;
	}
	return 'The result is ' + b(param);
}

console.log(a(2));

console.log("//Self Invoking function - IIEF//");
(function(){
	console.log('I am self invoking function - SIF or IIEF Immediately invoking executable function')
})()


