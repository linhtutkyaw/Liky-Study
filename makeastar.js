function getPentagonCoordinates(r){
	var a={
		x:0+r,
		y:(r*-1)+r
	};
	var b={
		x:Math.round(r*Math.cos(getRadians(90-72)))+r,
		y:(Math.round(r*Math.sin(getRadians(90-72)))*-1)+r
	};
	var c={
		x:Math.round(r*Math.cos(getRadians(90-72-72)))+r,
		y:(Math.round(r*Math.sin(getRadians(90-72-72)))*-1)+r
	};
	var d={
		x:Math.round(r*Math.cos(getRadians(90+72+72)))+r,
		y:(Math.round(r*Math.sin(getRadians(90+72+72)))*-1)+r
	};
	var e={
		x:Math.round(r*Math.cos(getRadians(90+72)))+r,
		y:(Math.round(r*Math.sin(getRadians(90+72)))*-1)+r
	};
	return {p1:a,p2:b,p3:c,p4:d,p5:e};
}
function getRadians(degrees){
	return degrees * Math.PI / 180;
}
function makeastar(r){
	var pc=getPentagonCoordinates(r);
	var svg=document.getElementById("starSVG");
	svg.setAttribute("width",((r*2)-(r*0.05)+""));
	svg.setAttribute("height",((r*2)-(r*0.19)+""));
	var str = document.getElementById("star");
	str.setAttribute("points",(pc.p1.x+","+pc.p1.y+" "+pc.p3.x+","+pc.p3.y+" "+pc.p5.x+","+pc.p5.y+" "+pc.p2.x+","+pc.p2.y+" "+pc.p4.x+","+pc.p4.y));
	console.log(str.innerHTML);
}