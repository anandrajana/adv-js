//Constructor function or Instance Function
function Gadget(name,color){
	this.name = name;
	this.color = color;
	this.whatAreYou = function(){
		return 'A am a' + this.color + ' ' + this.name;
	}
}
var newtoy = new Gadget('webcam', 'black');
console.log(newtoy.name);
console.log(newtoy.color);
console.log(newtoy.whatAreYou());

