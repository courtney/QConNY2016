var time, startTime;		
var duration = 1000;	
var startX = 0; endX = 825;

function basicOne() {
	var basic = document.getElementById('basic-one');
	var currentPos = 0;
	var startBasic = function (e) {		
		currentPos += 12;	      
		basic.style.left = currentPos + "px";
		// basic.innerHTML = currentPos;		    
		if (Math.abs(currentPos) <= 820) { requestAnimationFrame(startBasic); }				    
	}			
	requestAnimationFrame(startBasic);				
}

function basicTwo() {
	var basic2 = document.getElementById('basic-two');					
	var startBasic2 = function () {
		startTime = new Date().getTime();
		runBasic2();
	}
	var runBasic2 = function (e) {	
		time = new Date().getTime() - startTime;
		value = time / 1000;
		basic2.style.left = 820 * value + "px";
	    
		if(value < 1) requestAnimationFrame(runBasic2);

	}
	requestAnimationFrame(startBasic2);					
}

function basicThree() {
	var basic3 = document.getElementById('basic-three');						
	var startBasic3 = function () {
		startTime = new Date().getTime();
		runBasic3();
	}	
	var runBasic3 = function (e) {							
		time = new Date().getTime() - startTime;
		value = time / 1000;
		basic3.style.left = 820 * value + "px";	    
		if(value < 1) requestAnimationFrame(runBasic3);
	}
	requestAnimationFrame(startBasic3);						
}

function easeAnim() {
	var ease = document.getElementById('ease-anim');					
	var startEase = function () {
		startTime = new Date().getTime();
		runEase();
	}
	var runEase = function (e) {							
		time = new Date().getTime() - startTime;
		value = time / 1000;
		ease.style.left = startX + (endX - startX) * Math.pow(value, 5) + "px";	
		if(value < 1) requestAnimationFrame(runEase);
	}
	requestAnimationFrame(startEase);						
}

function easeOutAnim() {	
	var startEaseOut = function () {		
		startTime = new Date().getTime();
		runEaseOut();
	}
	var easeOut = document.getElementById('ease-out-anim');					
	var runEaseOut = function (e) {							
		time = new Date().getTime() - startTime;
		value = time / duration;
		easeOut.style.left = startX + (endX - startX) * (1 - Math.pow(1 - value, 3)) + "px";	    
		if(value < 1) requestAnimationFrame(runEaseOut);
	}
	requestAnimationFrame(startEaseOut);						
}

function easeInAnim() {	
	var startEaseInSine = function () {
		startTime = new Date().getTime();
		runEaseInSine();
	}
	var easeInSine = document.getElementById('ease-in-anim');					
	var runEaseInSine = function (e) {							
		time = new Date().getTime() - startTime;
		value = time / duration;
		easeInSine.style.left = startX + (endX - startX) * Math.sin( value * Math.PI / 2 ) + "px";	    
		if(value < 1) requestAnimationFrame(runEaseInSine);
	}
	requestAnimationFrame(startEaseInSine);
}

function elasticAnim() {	
	var s, a = 0.1, p = 0.4;			
	var startElastic = function () {
		startTime = new Date().getTime();
		runElastic();
	}
	var elastic = document.getElementById('elastic-anim');					
	var runElastic = function (e) {		
		time = new Date().getTime() - startTime;
		k = time / duration;		
		var s = 1.70158;			    
	    elastic.style.left = startX + (endX - startX) * (--k * k * ( ( s + 1 ) * k + s ) + 1) + "px";			    
		if(k < 0) requestAnimationFrame(runElastic);
	}
	requestAnimationFrame(startElastic);							
}

function easeFunc(k) {
	if ( k < ( 1 / 2.75 ) ) {
	return 7.5625 * k * k;
	} else if ( k < ( 2 / 2.75 ) ) {
		return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
	} else if ( k < ( 2.5 / 2.75 ) ) {
		return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
	} else {
		return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
	}
}

function bounceAnim(div) {	
	var startBounce = function () {
		startTime = new Date().getTime();
		runBounce();
	}
	var bounce = document.getElementById(div);					
	
	var runBounce = function (e) {			
		time = new Date().getTime() - startTime;
		k = time / duration;	
		if (div == 'bounce-anim') {
			bounce.style.left = startX + (endX - startX) * easeFunc(k) + "px";			    	
		} else {
			endX = 300;
			bounce.style.top = startX + (endX - startX) * easeFunc(k) + "px";			    	
		}
		
		if(k < 1) requestAnimationFrame(runBounce);
	}
	requestAnimationFrame(startBounce);
}							

function checkForSpace(e) {			
	switch( Reveal.getCurrentSlide().dataset.state ) {				
		case 'design-dev': summary(); break;		
		case 'basic-one': basicOne(); break;		
		case 'basic-two': basicTwo(); break;		
		case 'basic-three': basicThree(); break;		
		case 'ease-anim': easeAnim(); break;
		case 'ease-out-anim': easeOutAnim(); break;				
		case 'ease-in-anim': easeInAnim(); break;				
		case 'elastic-anim': elasticAnim(); break;		
		case 'bounce-anim': bounceAnim('bounce-anim'); break;		
		default: return false;
	}
}

function fib(e) {	
	document.getElementsByClassName('state-background')[0].innerHTML='<iframe src="img/fib.svg" width="100%" height="100%" frameborder="0"></iframe>';
}

function birds(e) {				
	document.getElementsByClassName('state-background')[0].innerHTML='<iframe src="birds-on-a-wire.html" width="100%" height="100%" frameborder="0"></iframe>';
}

function flick(e) {	
	document.getElementsByClassName('state-background')[0].innerHTML='<iframe src="demo.html" width="100%" height="100%" frameborder="0"></iframe>';
}

function millisecond(e) {	
	document.getElementsByClassName('state-background')[0].innerHTML='<iframe src="100.html" width="100%" height="100%" frameborder="0"></iframe>';
}

function clearBackground() {
	document.getElementsByClassName('state-background')[0].innerHTML = '';
}

function gridDemo(e) {
	document.getElementById('show-grid-demo').style.display = 'block';
}

function closeGrid(e) {
	document.getElementById('show-grid-demo').style.display = 'none';
}


Reveal.addEventListener( 'slidechanged', function( event ) {
	console.log(event.currentSlide.dataset.state)
	if( event.currentSlide.dataset.state !== false ) {
		switch( event.currentSlide.dataset.state ) {				
			case 'introduction': clearBackground(); break;
			case 'design-dev': fib(); break;			
			case 'pixar': clearBackground(); break;
			case 'progressive-disclosure': closeGrid(); break;
			case 'grid-demo': gridDemo(event); break;
			case 'nav-demo': closeGrid(); break;			
			case 'friction': clearBackground(); break;
			case 'flick-anim': flick(); break;
			case 'pe1': clearBackground(); break;
			case 'birds-on-wire': birds(); break;
			case 'performance': clearBackground(); break;
			case 'rail': clearBackground(); break;
			case 'millisecond': millisecond(); break;
			case 'css-js': clearBackground(); break;			
			case 'buttons': closeGrid(event); break;
			default: return false;			
		}				
	}
});


