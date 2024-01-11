jQuery(document).ready(function ($) {
    var mywindow = $(window);
    var mypos = mywindow.scrollTop();
    let scrolling = false;
    window.addEventListener('scroll', function () {
        scrolling = true;
    });
    setInterval(() => {
        if (scrolling) {
            scrolling = false;
            if (mypos > 40) {
                if (mywindow.scrollTop() > mypos) {
                    $('#stickyheader').addClass('headerup');
                } else {
                    $('#stickyheader').removeClass('headerup');
                }
            }
            mypos = mywindow.scrollTop();
        }
    }, 300);
});
