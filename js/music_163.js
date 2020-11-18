window.onscroll = function () {
	let goTop = document.getElementsByClassName('goTop')[0];
	let res = document.body.scrollTop || document.documentElement.scrollTop;
	// console.log(res);
	if (res > 0) {
		goTop.style.display = 'block';
	}else{
		goTop.style.display = 'none';
	}

	goTop.onclick = function () {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
}


// 获取图片和点
var items = document.getElementsByClassName('item');
var points = document.getElementsByClassName('pg');
// 获取按钮
var PrevBtn = document.getElementById('btnl');
var NextBtn = document.getElementById('btnr');

var index = 0;

var clearActive = function() {
	for (var i = 0; i < items.length; i++) {
		items[i].className = 'item';
		points[i].className = 'pg';
	}
}

var goIndex = function() {
	clearActive();
	items[index].className = 'item active';
	points[index].className = 'pg active';
}

var Next = function() {
	if (index < items.length-1) {
		index++;
	} else {
		index = 0;		//切一轮后index归零
	}
	goIndex();
}

var  Prev = function() {
	if (index == 0) {
		index = items.length-1;
	} else {
		index--;
	}
	goIndex();
}

NextBtn.addEventListener('click', function() {
	Next();
});

PrevBtn.addEventListener('click', function() {
	Prev();
});

for (var i = 0; i < points.length; i++) {
	points[i].addEventListener('click', function(){
		var pointIndex = this.getAttribute('data-index');
		// console.log(pointIndex);
		index = pointIndex;
		goIndex();
	})
}

var dsq = setInterval(Next, 2000);

var ban_img = document.getElementsByClassName('ban-img')[0];
ban_img.onmouseover = function() {
	clearInterval(dsq);
}
ban_img.onmouseout = function() {
	dsq = setInterval(Next, 2000);
}