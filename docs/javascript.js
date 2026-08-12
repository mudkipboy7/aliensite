/*
	Functions
*/
// Makes it go to the next line
function ln(){
	document.write("<br>");
}
// Draws a header
function header(string,size,color){
	document.write("<h1 style=font-size:" + size + ";color:" + color + ";>" + string + "</h1>");
}

// Draws the name of a site
function siteName(string){
	document.write("<v style=font-size:20px>" + string + "</v>");
	ln();
}

// Draws a site link
function siteLink(string, lnk){
	document.write("<a style=font-size:20px href=" + lnk + ">" + string + "</a>");
	ln();
	ln();
}



