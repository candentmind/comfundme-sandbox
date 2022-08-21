var sweetAlert = function(title, message, status, timer = 5000, isReload = false, showConfirmation = false, showCancel = false, redirectUrl){
	isTimerStarted = false;
	var
    closeInSeconds = timer/1000,
    displayText = message + ". Closing in #1 seconds."
	
    swal({
        title   : title,
        text    : displayText.replace(/#1/, closeInSeconds),
        type    : status,
        html    : true,
        timer   : closeInSeconds * 1000,
        allowEscapeKey  : false,
        showConfirmButton: showConfirmation,
        showCancelButton: showCancel
    });
	timer = setInterval(function() {
	    closeInSeconds--;
	    if (closeInSeconds < 0) {
	        clearInterval(timer);
	        swal.close();
	        if (isReload == true) {
	        	location.reload(true);
	        }
	        if (redirectUrl) {
	        	window.location.href = redirectUrl;
	        }
	    }
	    $('.sweet-alert > p').text(displayText.replace(/#1/, closeInSeconds));
	}, 1000);
}