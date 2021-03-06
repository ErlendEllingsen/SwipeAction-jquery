/**
 * SWIPE APPLICATION
 */


var globalSwipeData = {
	
};

var swipe = {
	threshold: {
		drag: 20,
		swipe: 10
	}
}


$.fn.swipeAction = function(params){
	globalSwipeData[params.name] = {};
	var swipeData = globalSwipeData[params.name];
	
	$(this).on('click', function(){
		alert('Download me');
	});
	
	$(this).on('touchstart', function(e){
		var id = $(this).attr('data-index');
		
		var touch = e.originalEvent.touches[0];
		swipeData[id] = {
			swipeStartX: touch.pageX,
			lastSwipeX: touch.pageX,
			
			swipeStartY: touch.pageY,
			lastSwipeY: touch.pageY
		};
		
		
	});
	
	$(this).on('touchmove', function(e){
		
		//Variables and aliases
		var treshhold = swipe.threshold; 
		
		//Variables for ease of access.
		var id = $(this).attr('data-index');
		var touch = e.originalEvent.touches[0];
		
		var pageX = Number(touch.pageX);
		var lastSwipeX = Number(swipeData[id].lastSwipeX);
		
		var pageY = Number(touch.pageY);
		var lastSwipeY = Number(swipeData[id].lastSwipeY);
		
		//Order of importance:
		// 1. If dragging (Horizontal) - DONT INTERRUPT
		// 2. If swiping (Vertical) - DONT INTERRUPT
		var isDragging = (((lastSwipeX - pageX) > treshhold.drag) || ((pageX - lastSwipeX) > treshhold.drag));
		
		if ((!isDragging) && (((lastSwipeY - pageY) > treshhold.swipe) || ((pageY - lastSwipeY) > treshhold.swipe))) {
			//Moving vertically..
			console.log("Moving vertically, lastSwipeY - pageY =  " + (String((swipeData[id].lastSwipeY - touch.pageY))))
			$.trigger(e);
			return false;
		}
		
		console.log("Not moving vertically: lastSwipeY: " + swipeData[id].lastSwipeY + " pageY: " + touch.pageY);
		
		e.preventDefault();
		
		
		var swipeDistance = Number(touch.pageX - swipeData[id].swipeStartX);
		var lastMoveDistance = Number(touch.pageX - swipeData[id].lastSwipeX);
		swipeData[id].lastSwipeX = touch.pageX;
		
		//FIND DIRECTION
		var direction = 'left';
		if (swipeData[id].lastSwipeX > touch.pageX) {
			direction = 'right';
		}
		var distance = lastMoveDistance;
		var currentLeft = 0;
		
		//ALTER THE DISPLAY
		$(this).css('margin-right', ((Number($(this).css('margin-right').replace('px', ''))) + lastMoveDistance) + 'px');
		
		
	});
	
	$(this).on('touchcancel', function(e){
		var id = $(this).attr('data-index');
		//Reset display
		$(this).css('margin-right', '0px');
	});
	
	$(this).on('touchend', function(e){
		var id = $(this).attr('data-index');
		//Reset display
		$(this).css('margin-right', '0px');
	});
		
};
