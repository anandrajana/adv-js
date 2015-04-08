(function (){
	var buttons = document.getElementsByTagName('a');

	var buttonClick = function  (evt) {
		// body...
		var target = eventUtility.getTarget(evt);
		eventUtility.preventDefault(evt);
		document.body.bgColor = "red";
	}


	for (var i = 0; i < buttons.length; i++) {
		eventUtility.addEvent(buttons[i],"click",buttonClick);
	};
})(window)