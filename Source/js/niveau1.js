/* Constant */
var CATEGORIES = [];
var REGEX=2;

function parseXMLCategories() {
	var xmlhttp,xmlDoc,x;
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "../xml/animals.xml", false);
	xmlhttp.send();
	xmlDoc = xmlhttp.responseXML; 
	var count = xmlDoc.getElementsByTagName("animal");
	var category = xmlDoc.getElementsByTagName("category");
	for (var i=0;i<count.length;i++) {
		var tmp = $.inArray(category[i].childNodes[0].nodeValue, CATEGORIES);
		if(tmp == -1) {
			CATEGORIES[CATEGORIES.length] = category[i].childNodes[0].nodeValue;
		}
	}
}

/*
 * Creating the new element and returning it.
 */
function picture(animal) {
	var object = $('<div></div>');
	object.append('<img id="'+animal[1]+'" data="'+animal[2]+'" src="'+animal[1]+'" alt="image" style="position:absolute;" width="100%"/>');
	object.addClass("elem");
	object.attr("data-result",animal[2]);
	object.css("opacity","0");
	return object;
}	