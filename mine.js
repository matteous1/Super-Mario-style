// Background

$(document).keydown(function(e){
    switch (e.which){
    case 37:    //left arrow key
        if( $(".background1").css("left") != '0px') {
          $(".background1").css("left", "+=10px");
        }
        break;
    case 39:    //right arrow key
        $(".background1").css("left", "-=10px");
        break;
    }
});



// Matteo walking

$(document).keydown(function(e){
    switch (e.which){
    case 37:    //left arrow key
				backMovement();
        break;
    case 39:    //right arrow key
				Movement();
        break;
    }
});

$(document).keyup(function(e){
    switch (e.which){
    case 37:    //left arrow key
				endBackMovement();
        break;
    case 39:    //right arrow key
				endMovement();
        break;
    }
});

/*
$(document).keyup(function(e){
    endMovement()
});
*/
function Movement() {
  $('#matteo-walking').removeClass('back');
	$('#matteo-walking').addClass('movement');
}

function backMovement() {
	$('#matteo-walking').addClass('movementback');
}

function endMovement() {
	$('#matteo-walking').removeClass('movement');
}

function endBackMovement() {
  $('#matteo-walking').removeClass('movementback');
  $('#matteo-walking').addClass('back');
}
