window.onload = function(){
	function mouseLocate(e){
		var e = event || window.event;
		var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
		var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
		var x = e.pageX || e.clientX + scrollX;
		var y = e.pageY || e.clientY + scrollY;
		return { 'x': x, 'y': y };
	}
	document.getElementById('menuArea').addEventListener('contextmenu', function(e){
		e.stopPropagation();
		e.preventDefault();
		var areaX = document.getElementById('menuArea').offsetWidth,
				areaY = document.getElementById('menuArea').offsetHeight,
				menuX = document.getElementById('menu').offsetWidth,
				menuY = document.getElementById('menu').offsetHeight,
				maxX = areaX - menuX,
				maxY = areaY - menuY;
		if(mouseLocate().x <= maxX && mouseLocate().y <= maxY){
		    document.getElementById('menu').style.left = mouseLocate().x + "px";
				document.getElementById('menu').style.top = mouseLocate().y + "px";
		}else if(mouseLocate().x > maxX && mouseLocate().y > maxY){
				document.getElementById('menu').style.left = mouseLocate().x - menuX + "px";
				document.getElementById('menu').style.top = mouseLocate().y -menuY + "px";
		}else if(mouseLocate().x > maxX) {
				document.getElementById('menu').style.left = mouseLocate().x - menuX + "px";
				document.getElementById('menu').style.top = mouseLocate().y + "px";
		}else if(mouseLocate().y > maxY){
				document.getElementById('menu').style.top = mouseLocate().y -menuY + "px";
				document.getElementById('menu').style.left = mouseLocate().x + "px";
		}
		document.getElementById('menu').style.visibility = 'visible';
	});
	document.getElementById('menu').addEventListener('click', function(e){
		e.preventDefault();
		e.stopPropagation();
	})
	document.getElementById('menu').addEventListener('contextmenu', function(e){
		e.preventDefault();
		e.stopPropagation();
	})
	document.getElementById('main').addEventListener('click', function(e){
		document.getElementById('menu').style.visibility = 'hidden';
		document.getElementById('menu').style.left = "0px";
		document.getElementById('menu').style.top = "0px";
	})
}