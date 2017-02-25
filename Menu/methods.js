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
		var menu = document.getElementById('menu'),
				areaX = document.getElementById('menuArea').offsetWidth,
				areaY = document.getElementById('menuArea').offsetHeight,
				menuX = menu.offsetWidth,
				menuY = menu.offsetHeight,
				maxX = areaX - menuX,
				maxY = areaY - menuY;
		if(mouseLocate().x <= maxX && mouseLocate().y <= maxY){
		    menu.style.left = mouseLocate().x + "px";
				menu.style.top = mouseLocate().y + "px";
		}else if(mouseLocate().x > maxX && mouseLocate().y > maxY){
				menu.style.left = mouseLocate().x - menuX + "px";
				menu.style.top = mouseLocate().y -menuY + "px";
		}else if(mouseLocate().x > maxX) {
				menu.style.left = mouseLocate().x - menuX + "px";
				menu.style.top = mouseLocate().y + "px";
		}else if(mouseLocate().y > maxY){
				menu.style.top = mouseLocate().y -menuY + "px";
				menu.style.left = mouseLocate().x + "px";
		}
		menu.style.visibility = 'visible';
	});
	menu.addEventListener('click', function(e){
		e.preventDefault();
		e.stopPropagation();
	})
	menu.addEventListener('contextmenu', function(e){
		e.preventDefault();
		e.stopPropagation();
	})
	document.getElementById('main').addEventListener('click', function(e){
		menu.style.visibility = 'hidden';
		menu.style.left = "0px";
		menu.style.top = "0px";
	})
}