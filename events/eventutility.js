var eventUtility = {
	addEvent: function (el,type,fn) {
		// body...
		if(typeof window.addEventListener !== "undefined"){
			el.addEventListener(type,fn,false); //bubble
		}
		//legacy code IE 8
		else if ((typeof attachEvent !== "undefined")) {
			el.attachEvent("on"+type,fn); //onclick
		}
		//DoM level 0
		else{
			el["on"+type] = fn; //obj["property"]
		}
	},
	removeEvent: function (el,type,fn) {
		// body...
		//feature detection
		//IE9 supports both std and legacy
		if(typeof window.removeEventListener !== "undefined"){
			el.removeEventListener(type, fn, false)
		}
		//legacy code IE8
		else if(typeof detachEvent !== "undefined"){
			el.detachEvent("on" + type,fn);
		}
		else{
			el["on" + type] = null;
		}
	},
	getTarget: function(event){
		if (typeof event.target !== "undefined") {
			return event.target;
		}
		else{
			return event.srcElement;
		}
	},
	getCharCode: function(event){
		if (typeof event.charCode === 'number') {
			//other than IE
			return event.charCode;
		}else{
			//IE
			return event.keyCode;
		}
	},
	preventDefault: function(event){
		if (typeof event.preventDefault !== "undefined") {
			event.preventDefault();
		}else{
			//IE 8
			event.returnValue = false;
		}
	},
	stopPropagation: function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	}
}